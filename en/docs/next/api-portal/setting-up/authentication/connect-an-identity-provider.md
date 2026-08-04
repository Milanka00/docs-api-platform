---
title: "Connect an identity provider to the API Portal"
description: "Configure the API Portal & MCP Hub to delegate login to any OIDC identity provider: client registration, claim mappings, role or scope authorization, and the config.toml tables involved."
canonical_url: https://wso2.com/api-platform/docs/next/api-portal/setting-up/authentication/connect-an-identity-provider/
md_url: https://wso2.com/api-platform/docs/next/api-portal/setting-up/authentication/connect-an-identity-provider.md
tags:
  - cloud
  - api-portal
  - authentication
  - oidc
author: WSO2 API Platform Documentation Team
last_updated: 2026-08-04
content_type: "how-to"
---

# Connect an identity provider to the API Portal

The API Portal & MCP Hub delegates user login to any identity provider (IdP) that speaks OpenID Connect (OIDC). This guide is written for the administrator who deploys the portal, and it covers the configuration every IdP needs. For a worked example of these steps against one specific IdP, see [Set up Asgardeo as your identity provider](../../tutorials/asgardeo-as-idp.md).

For how identity provider authentication compares with local authentication, see [Authentication in the API Portal & MCP Hub](overview.md).

## How OIDC login works here

The portal itself is the OIDC client, not the browser. It runs the authorization code exchange server-side with PKCE and a state parameter, keeps the resulting tokens in a server-side session, and gives the browser only a session cookie. Register the portal as a **confidential** client, not a public or single-page application client.

Two points shape the rest of this guide:

- **There is no OIDC discovery.** The portal never reads `/.well-known/openid-configuration`, so you configure each endpoint URL explicitly in `[api_portal.auth.idp]`.
- **Two token types are read.** Identity claims (organization, roles, groups, name, email) come from the **ID token**. The `scope` claim, used only in `mode = "scope"`, comes from the **access token**.

Clicking **Login** in `mode = "idp"` redirects straight to the IdP's authorization endpoint—the built-in username and password form is never shown, and `POST` to the local login route returns `404`.

## What your identity provider must support

Check your IdP against these requirements before you start:

| Requirement | Details |
|-------------|---------|
| OIDC endpoints | Exposes authorization, token, userinfo, JWKS, and end-session endpoints. You supply each URL individually. |
| Confidential client | Issues a client secret, and accepts PKCE on the authorization code exchange. |
| Authorization code and refresh token grants | Both enabled on the application. The portal refreshes an expired access token before failing a Management API request. |
| JWT access tokens | Access tokens are signed JWTs. The portal verifies a Bearer token's signature against the JWKS endpoint, so opaque tokens don't work for machine clients calling `/api/v0.9`. |
| Custom claims | Emits the organization identifier and the user's roles in the ID token. Claim names are configurable; the claims themselves are required. |

## Step 1: Register the portal as a confidential client

In your IdP, create a confidential OIDC application. Replace `<your-domain>` with the address users reach the portal at, including the port when it isn't 443, and `<org-handle>` with the value of `[api_portal.organization] handle`—`default` in the packaged configuration.

1. Set the authorized redirect URL to `https://<your-domain>/<org-handle>/callback`.
2. Set the post-logout redirect URL to `https://<your-domain>/<org-handle>`. Most IdPs validate `post_logout_redirect_uri` against the same list as the login callback, so add both URLs there.
3. Enable the **Authorization Code** and **Refresh Token** grants.
4. Set the access token type to **JWT**.
5. Add `given_name`, `family_name`, `email`, and `roles` to the token's attributes, along with whichever claim carries the organization identifier.
6. Record the client ID and client secret.

One redirect URL covers the whole portal. After the callback, the portal routes the user from the return path stored in their session, so there are no per-view or per-page redirect URLs to register.

## Step 2: Map the claims the portal reads

The portal reads three claims out of the ID token by name, and `[api_portal.auth.claim_mappings]` says which name carries each one. Either configure your IdP to emit the default names, or keep your IdP's names and set the mappings to match.

| Mapping key | Default claim | Carries |
|-------------|---------------|---------|
| `organization` | `org_name` | The organization identifier, matched against the organization's IDP reference ID on every request. Required—a token without it is rejected with `403`. |
| `roles` | `roles` | The user's role names. Required when `authorization.mode = "role"`; startup fails if the mapping is empty. |
| `groups` | `groups` | The user's group names. Carried into the session for use in page and content rules. |

Each value is either a flat top-level claim name or a dot-separated path into a nested claim. That path syntax accommodates providers that nest their claims—Keycloak puts roles under `realm_access.roles`, for example.

A roles or groups claim may arrive as a JSON array or as a space- or comma-separated string. The portal accepts both.

Four more claims are read under fixed names and aren't configurable: `sub` for the user identity, `given_name` (falling back to `nickname`) and `family_name` for the display name, `email` for the address shown in the profile menu, and `picture` for the avatar.

## Step 3: Choose how privileges reach the token

The portal's Management API (`/api/v0.9`) guards each operation with a `dp:*` scope. `[api_portal.auth.authorization] mode` decides where a request's effective scopes come from. Pick the one that matches what your IdP can put in a token.

**Role mode** (`mode = "role"`, the default) expands the token's roles claim through a YAML grant table and ignores the token's own scope claim entirely. Your IdP only has to emit role names, which most products do out of the box, and a caller can't widen a role's grant by requesting extra scopes. Set `role_to_scope_mapping` to the path of the table; the image ships an editable copy, which `docker-compose.yaml` mounts at `/etc/api-portal/role-to-scope-mapping.yaml`. It defines two roles:

| Role | Grants |
|------|--------|
| `dp_admin` | Every action on the organization: content and theme, the API and MCP server catalog, views, labels, subscription plans, key managers, webhook subscribers, and every application and subscription |
| `dp_subscriber` | The consumer persona: own applications, subscriptions, and keys, plus read access to the catalog |

The table also aliases `ap_admin` and `ap_subscriber` onto those same grants, because those are the role names the Platform API mints. Map your IdP's groups onto any of the four names, or add an entry of your own for a narrower grant. The portal validates every scope in the table against its OpenAPI specification at startup, so an undeclared `dp:*` scope fails startup rather than surfacing later as a role that logs in and is denied every request.

**Scope mode** (`mode = "scope"`) reads the access token's own `scope` claim. Use it when the IdP mints `dp:*` scopes directly, which means registering all of them in the IdP and granting them to the application. Browser sessions are preauthorized in this mode—the per-operation check is skipped, and page role gating is the authorization that applies to them.

Role mode is the lighter integration of the two. Editing the mapping file needs a restart, since the portal reads it at startup.

### Page access tiers

Page access is separate from Management API scopes. `[api_portal.auth.authorization.portal_roles]` names the role that grants each of the portal's two page tiers, and `page_role_validation` switches the gate on:

```toml
[api_portal.auth.authorization]
page_role_validation = true

[api_portal.auth.authorization.portal_roles]
admin      = "ap_admin"
subscriber = "ap_subscriber"
```

Point these at your IdP's role names, or at names in the grant table so one set of roles drives both page access and Management API authorization.

## Step 4: Configure the portal

Set the `[api_portal.auth]` tables in `configs/config.toml`. `mode` selects exactly one authentication backend, so `"idp"` also stops the local login form from being used:

{% raw %}

```toml
[api_portal.auth]
mode = "idp"

[api_portal.auth.idp]
name                = "my-idp"                                          # friendly name, used in logs
issuer              = "https://idp.example.com/oauth2/token"
authorization_url   = "https://idp.example.com/oauth2/authorize"
token_url           = "https://idp.example.com/oauth2/token"
user_info_url       = "https://idp.example.com/oauth2/userinfo"
jwks_url            = "https://idp.example.com/oauth2/jwks"
client_id           = "<portal-client-id>"
client_secret       = '{{ env "APIP_AP_AUTH_IDP_CLIENT_SECRET" }}'
audience            = "<portal-client-id>"                              # expected "aud" claim
callback_url        = "https://<your-domain>/<org-handle>/callback"
logout_url          = "https://idp.example.com/oidc/logout"
logout_redirect_uri = "https://<your-domain>/<org-handle>"
scope               = "openid profile email roles"

# Which token claim carries each field. A sibling of [api_portal.auth.idp], not
# nested in it — dot notation reaches a nested claim, e.g. "realm_access.roles".
[api_portal.auth.claim_mappings]
organization = "org_name"
roles        = "roles"
groups       = "groups"

# Applies in both auth modes, which is why it is NOT under [api_portal.auth.idp].
[api_portal.auth.authorization]
enabled               = true
mode                  = "role"
role_to_scope_mapping = "/etc/api-portal/role-to-scope-mapping.yaml"
page_role_validation  = true

[api_portal.auth.authorization.portal_roles]
admin      = "ap_admin"
subscriber = "ap_subscriber"
```

{% endraw %}

Three things to get right:

- **`callback_url`** must match the URL registered in step 1 exactly, character for character.
- **`issuer`** must match the token's `iss` claim, and **`audience`** its `aud` claim. Set `audience` to your client ID rather than leaving it empty, so a token minted for a different application is rejected.
- **`scope`** must request whatever the IdP needs to emit the organization and roles claims. Keep `openid`, and add the scope your IdP attaches role information to.

!!! important "Two retired keys abort startup"
    Earlier versions configured roles under `[api_portal.auth.idp.roles]`, with a third `super_admin` tier. That section is retired, along with `auth.role_validation`, and leaving either in `config.toml` fails startup rather than silently applying a default. Use `[api_portal.auth.authorization.portal_roles]` and `auth.authorization.page_role_validation` instead—see [Authorization](../../references/configurations.md#authorization).

### Supply the client secret

Never write the client secret as a literal in `config.toml`. The {% raw %}`{{ env }}`{% endraw %} token above reads it from an environment variable instead, so it never has to be committed to source control:

```bash
export APIP_AP_AUTH_IDP_CLIENT_SECRET=<portal-client-secret>
```

In production, prefer a mounted secret file. Swap the token for {% raw %}`'{{ file "/secrets/api-portal/oidc_client_secret" }}'`{% endraw %}, then mount the secret at that path. Both forms fail closed: a missing variable or unreadable file aborts startup rather than falling back to an empty credential. See [Interpolation tokens](../../references/configurations.md#interpolation-tokens).

## Step 5: Match the organization claim

A portal instance serves exactly one organization, and the database schema is multi-organization—so a token your IdP correctly signed for a *different* organization would pass every signature, expiry, and audience check. The portal closes that gap by comparing the mapped organization claim against the organization it's pinned to, at login and on every authenticated request. A mismatch is a flat `403`, whether the asserted organization is unknown or merely someone else's.

The value the claim is compared against is the organization's **IDP reference ID**, which defaults to the organization handle. Set it when your IdP asserts something other than the handle:

- **Before first boot:** set `idp_ref_id` in `[api_portal.organization]`. This key is read only when the organization row is seeded, so a later change to it has no effect.
- **After first boot:** edit **IDP reference ID** under **Settings > Organization**, or set `idpRefId` through the [Organizations](../../rest-api/organizations.md) Management API.

The value is compared verbatim and is case-sensitive, unlike the handle.

When the organization has an IDP reference ID, the portal also appends `org=<idp-reference-id>` to the authorization request. Providers with a business-to-business organization model—Asgardeo among them—use that parameter to scope the login session to the matching sub-organization. Providers that don't recognize it ignore it.

## Step 6: Restart and verify

Restart the portal so it reloads the configuration:

```bash
docker compose up -d --force-recreate
```

Open the portal and select **Login**. Instead of the username and password form, you're redirected to your IdP's hosted login page, and land back on the page you started from after signing in.

If sign-in fails, the mismatch is usually one of these:

- `callback_url` differs from the redirect URL registered in the IdP.
- `issuer` doesn't match the token's `iss` claim, or `audience` doesn't match its `aud` claim.
- The ID token carries organization or roles claims under names `[api_portal.auth.claim_mappings]` doesn't name.
- The organization claim's value doesn't match the organization's IDP reference ID.
- The IdP issues opaque access tokens rather than JWTs, which fails Bearer-token requests to `/api/v0.9` while browser login still works.

Set `[api_portal.logging] level = "debug"` to see which claim or check fails.

## Optional settings

These `[api_portal.auth.idp]` keys tune the login experience. Leave them at their defaults unless you need the behavior:

| Key | Default | Effect |
|-----|---------|--------|
| `silent_sso` | `true` | Attempts a `prompt=none` authorization on the first page load, so a user with a live IdP session arrives already signed in. Set to `false` to require an explicit **Login**. |
| `org_callback` | `false` | Sends a user with no stored return path to the organization's landing page after login, rather than the portal root. |
| `sign_up_url` | empty | The IdP's self-registration page. The portal's **Sign up** route redirects here; without it the route has nowhere to send the user. |
| `token_refresh_timeout_ms` | `10000` | How long the portal waits on the IdP's token endpoint when refreshing an expired access token. |
| `certificate` | empty | An X.509 certificate used to verify Bearer-token signatures instead of fetching the JWKS endpoint. Set it only for an IdP whose JWKS endpoint the portal can't reach; browser login always uses `jwks_url`. |

## Claim names for common identity providers

The roles claim is the one that most often differs. These paths are known to work:

| Identity provider | `claim_mappings` roles value |
|-------------------|------------------------------|
| Asgardeo | `roles` |
| Microsoft Entra ID | `roles` |
| Keycloak | `realm_access.roles`, or `resource_access.<client>.roles` |

## Related topics

- [Set up Asgardeo as your identity provider](../../tutorials/asgardeo-as-idp.md): these steps applied to Asgardeo, including `dp:*` scope registration
- [Authentication in the API Portal & MCP Hub](overview.md): how identity provider authentication compares with local authentication
- [Configurations](../../references/configurations.md): every `config.toml` key, and how interpolation tokens deliver values into it
- [Organization settings](../../admin-settings/organization-settings.md): where administrators edit the IDP reference ID
