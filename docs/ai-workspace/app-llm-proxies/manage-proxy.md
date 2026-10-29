---
title: "Manage App LLM Proxy"
description: "Update resources, providers, security, and guardrails for an App LLM Proxy."
---

After creating an App LLM Proxy, you can manage its configuration from the proxy details page. This guide covers the available management operations, including updating the API definition, configuring providers and security, managing guardrails and policies, and deploying configuration changes to a gateway.

:::info[On This Page]
**Proxy Configuration:**

- [Access Proxy Details](#access-proxy-details) - Open the proxy and view its configuration
- [Overview](#overview) - View the available API resources
- [Definition](#definition) - Manage the inbound interface and OpenAPI definition
- [Providers](#providers) - Configure LLM Providers and transformers
- [Security](#security) - Configure client authentication
- [Guardrails and Policies](#guardrails-and-policies) - Apply policies globally or to individual resources

**Lifecycle Operations:**

- [Save Changes](#save-changes) - Apply configuration updates
- [Delete the Proxy](#delete-the-proxy) - Remove the proxy
:::

## Access Proxy Details

1. Sign in to AI Workspace and open your organization.
2. In the left navigation menu, under **LLM**, click **App LLM Proxies**.
3. Select the project containing the proxy.
4. Open the proxy by clicking its name.

The proxy list displays the following columns:

- **Name** - The proxy name.
- **Description** - A brief description of the proxy.
- **Service Provider** - The associated LLM Provider.
- **Version** - The proxy version.
- **Last Updated** - The time of the most recent update.
- **Actions** - Available actions for the proxy.

The proxy details page displays the provider, context, and last updated time in the header. The page contains five tabs: **Overview**, **Definition**, **Providers**, **Security**, and **Guardrails & Policies**.

Use **Save** to apply configuration changes or **Cancel** to discard unsaved changes. When there are no pending changes, the page displays **All changes saved**.

The **Deploy to Gateway** button opens the deployment workflow. Use **Delete proxy** to remove the proxy.

{/* Screenshot: App LLM Proxy details header and tabs. File: static/img/cloud/ai-workspace/app-llm-proxies/details.png */}

---

## Overview

The **Overview** tab displays the OpenAPI resources loaded from the provider.

You can:

- Search for resources by path.
- Filter resources by HTTP method.
- Expand an operation to view its description.

Use this tab to review the operations exposed by the proxy.

---

## Definition

The **Definition** tab lets you configure the API contract exposed to client applications, including the inbound interface and OpenAPI definition.

### Configure the inbound interface

The **Inbound Interface** determines the request format accepted by the proxy. Changing the inbound interface replaces the OpenAPI definition displayed below it.

Choose an interface that matches the request format used by your client applications.

### Update the OpenAPI definition

You can update the OpenAPI definition by fetching a specification from a URL or uploading a file.

**To import an OpenAPI specification:**

1. In the **Definition** tab, locate **Update OpenAPI Definition**.
2. To import a specification from a URL, enter the URL and click **Fetch specification**.
3. To upload a specification file, click **Upload Specification** and select a `.json`, `.yaml`, or `.yml` file.

---

## Providers

Configure the LLM Providers that the proxy routes requests to and the transformers required to translate between request formats.

A proxy can use multiple providers. For more information, see [Route to Several Providers](./multi-provider.md).

### View and manage providers

1. Open the **Providers** tab.
2. Review the inbound interface and the provider table.

The table displays the following information:

| Column | Description |
|---|---|
| **Provider** | The provider name and identifier. |
| **Transformer policy** | The transformer associated with the provider. If the request formats match, a transformer may not be required. Click **Add** to attach a transformer when needed. |
| **Primary** | Indicates which provider is configured as the primary provider. |
| **Actions** | Provides options to edit or remove the provider. |

To manage the provider list:

- Click **Add Additional LLM Provider** to add another provider.
- Use the available edit action to update a provider's configuration.
- Use the remove action to detach a provider.
- Change the **Primary** selection to designate the primary provider.

Click **Save** after making changes to the provider configuration.

---

## Security

Configure how client applications authenticate when invoking the App LLM Proxy.

### Configure authentication

1. Open the **Security** tab.
2. Configure the authentication settings.

| Field | Description |
|---|---|
| **Authentication type** | The authentication method. The default is **API Key**. |
| **Key name** | The name of the header or parameter used to send the API key. The default is `Authorization`, and the placeholder is `X-API-Key`. |
| **Sent in** | Specifies how clients send the API key. The default is **Header**. |
| **API Key Value Prefix** | The prefix expected before the API key value. The default is `Bearer`. |

The **Key name** field is required. Click **Save** to apply the configuration changes.

{/* Screenshot: Security tab with authentication type, key name, sent in, and prefix. File: static/img/cloud/ai-workspace/app-llm-proxies/security.png */}

:::tip[Best Practice]
Use header-based authentication to send API keys. Avoid placing credentials in query parameters, where they may be exposed through logs or other systems.
:::

---

## Guardrails and Policies

Use the **Guardrails & Policies** tab to apply policies to all resources exposed by the proxy or to individual operations.

### Global guardrails and policies

Global policies apply to **all resources** in the proxy.

To add a global policy:

1. Open the **Guardrails & Policies** tab.
2. In the **Global Guardrails & Policies** section, click **Add**.
3. In the **Guardrails** panel, select a policy.
4. Configure the policy parameters and any available advanced settings.
5. Click the option to add the policy.

Added policies appear in the global section. You can drag policies to change their execution order.

### Resource-wise guardrails and policies

Resource-wise policies apply to a **specific operation** rather than all resources.

To add a resource-specific policy:

1. In the **Resource-wise Guardrails & Policies** section, search for the resource you want to configure. Alternatively, click **Show resources with guardrails first** to find resources that already have policies.
2. Locate the resource and use the option to add a policy.
3. In the **Guardrails** panel, select a policy and configure its parameters and advanced settings.
4. Add the policy to the resource.

The policy picker lets you filter by category, search for policies, or open the **Policy Hub** to explore the available options.

For more information about available policies, visit the [Policy Hub](https://wso2.com/api-platform/policy-hub/).

{/* Screenshot: Guardrails and Policies tab with global and resource-wise sections. File: static/img/cloud/ai-workspace/app-llm-proxies/guardrails.png */}

:::warning
After adding or removing policies, save the proxy and redeploy it for the changes to take effect on the gateway.
:::

---

## Save Changes

After updating the proxy configuration, click **Save** to apply your changes. This saves changes made across the **Definition**, **Providers**, **Security**, and **Guardrails & Policies** tabs.

Click **Cancel** to discard unsaved changes and return to the last saved configuration.

:::info
Saving changes does not automatically update an existing gateway deployment. After saving, click **Deploy to Gateway** and complete the deployment workflow to apply the changes.
:::

For deployment instructions, see [Configure App LLM Proxy](./configure-proxy.md).

---

## Delete the Proxy

To remove an App LLM Proxy, open its details page and click **Delete proxy**.

Deleting the proxy removes it from the project. Before proceeding, ensure that applications and agents no longer depend on the proxy.

---

## Next Steps

- [Configure App LLM Proxy](./configure-proxy.md) - Create and deploy an App LLM Proxy.
- [Route to Several Providers](./multi-provider.md) - Configure multiple providers and request-format translation.
- [Policies Overview](../policies/overview.md) - Learn about the policies available for proxies.
- [Policy Hub](https://wso2.com/api-platform/policy-hub/) - Browse the available guardrails and policies.