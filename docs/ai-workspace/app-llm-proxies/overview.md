---
title: "Overview"
---

## App LLM Proxies Overview

### Why a Proxy on Top of a Provider?

An **LLM Provider** connects the gateway to an upstream LLM service and can be called directly. An **App LLM Proxy** adds an optional, application-facing endpoint on top when you need controls that are specific to a Gen AI application or agent.

The main benefit is specialization and isolation. A single provider can be used directly, or it can back multiple App LLM Proxies: one for a customer-facing chatbot with strict guardrails, another for an internal agent with relaxed settings, and another for a workflow-specific Gen AI assistant. Each proxy is independently configured, and swapping the underlying provider doesn't require any changes to the applications or agents calling the proxy.

### What You Can Do with an App LLM Proxy

**Expose a controlled API endpoint**
The proxy gives you a stable URL your Gen AI application or agent calls. You control which resources (API paths) are exposed, and can enable or disable them without touching the upstream provider.

**Add app-specific controls only when needed**
If provider-level controls are sufficient, you can call the provider directly. Use an App LLM Proxy only when a specific application or agent needs its own authentication, guardrails, exposed resources, or traffic controls.

**Enforce authentication**
Require applications or agents to present an API key before their requests are forwarded to the LLM. Keys are generated per proxy and expire after 90 days.

**Apply guardrails**
Attach content safety, PII masking, or semantic caching policies globally across all endpoints, or target them at specific resources only.

**Create specialized endpoints for apps and agents**
Create separate proxies for different Gen AI applications, agents, teams, or environments (dev, staging, production) — each with independent rate limits, guardrails, access keys, and exposed resources — all sharing the same provider backend.

**Switch providers without client changes**
Because applications and agents call the proxy URL rather than the provider directly, you can swap the underlying LLM Provider (e.g., from OpenAI to Azure OpenAI) without any changes on the client side.

### Next Steps

- Configure App LLM Proxy — Step-by-step guide to create and deploy your first specialized proxy
- Manage App LLM Proxy — Update configuration, guardrails, and resources after deployment

## Configure App LLM Proxy

An App LLM Proxy exposes a managed endpoint that your Gen AI applications or agents use to reach an LLM Provider. Once deployed, the proxy handles authentication and enforces any guardrails you configure. While the provider can be called directly, the proxy lets you create specialized endpoints for different applications, agents, or environments with independent keys, guardrails, and access controls on top of the same provider.

This guide walks you through creating an App LLM Proxy, optionally attaching guardrails, and deploying it to a gateway.

### Prerequisites

:::info[Before You Begin]
- Access to API Platform Console with **Admin** or **Developer** role
- At least one [configured and deployed LLM Provider](../llm-providers/overview.md)
:::

---

### Create a New App LLM Proxy

1. Navigate to **LLM** > **Proxies** in the left navigation menu.

2. Click **+ Create Proxy** button.

3. Fill in the required proxy details:

    1. **Name*** (Required): Enter a unique name for the proxy (e.g., `support-chat-api`, `sales-agent-proxy`). The Proxy ID is auto-generated from the name (lowercase, hyphen-separated).

    2. **LLM Service Provider*** (Required): Select the LLM provider this proxy will route to from the dropdown (defaults to the latest updated provider).

    3. **Version*** (Required): The version is pre-filled (e.g., `v1.0`). You can edit this if needed.

    4. **Description** (Optional): Add a brief description to identify the Gen AI application or agent use case this proxy is created for.

    5. **Context** (Optional): Enter the context path (default: `/`). This is the base path for proxy endpoints (normalized with "/" prefix).

4. Click **Create Proxy** to save the proxy.

---

### Add Guardrails (Optional)

You can attach policies and guardrails to your proxy that apply to all requests:

1. In the **Guardrails** tab, click **+ Add Guardrail**.

2. A sidebar will open showing available guardrails and policies.

3. Click on a guardrail to select it and configure its settings.

4. Click **Submit** to attach it to the proxy.

:::tip[Advanced Settings]
Each guardrail includes advanced configuration options that allow you to fine-tune its behavior. After selecting a guardrail, you can configure these settings before attaching it to the proxy.
:::

:::info
Learn more about available guardrails in the Guardrails Overview. For the full list of policies and their specifications, visit the [Policy Hub](https://wso2.com/api-platform/policy-hub/).
:::

---

### Deploy Proxy to Gateway

After creating your proxy, you must deploy it to a gateway before it can be used.

:::warning[Required Step]
Your proxy will not be functional until it is deployed to at least one gateway.
:::

1. Click the **Deploy to Gateway** button in the top-right corner of the proxy details page.

2. The **Deploy to Gateway** page opens, showing all available gateways. Use the search bar to find a specific gateway.

3. Each gateway card displays:
    - **Gateway name** and **status** (Active or Not Active)
    - **Current Deployment** identifier (if previously deployed)

4. Click **Deploy** next to the gateway you want to deploy to.

5. Once deployed, expand the gateway card to view deployment details:

    | Field | Description |
    |-------|-------------|
    | **Deployment Status** | Active or Inactive |
    | **Deployment ID** | Unique identifier for the deployment |
    | **Deployed** | Time since deployment |
    | **Stop** | Button to stop an active deployment |

6. The **API Deployment History** panel on the right shows the deployment timeline:
    - Deployment identifier and timestamp
    - Status tags (**Latest**, **Deployed**)

**To stop a deployment:**

Click the **Stop** button next to an active deployment to undeploy the proxy from that gateway.

Click **Back to App LLM Proxy** to return to the proxy details page.

:::info[Deployment Status]
Monitor deployment progress on this page. Changes take effect within seconds of successful deployment.
:::

---

### Get Started

Once the proxy is deployed, the proxy details page shows the **Get Started** panel on the right.

#### Invoke URL

Select a gateway from the **Gateways** dropdown to see the base URL for calling this proxy through that gateway.

The URL follows the format:

```
https://{gateway-host}/{proxy-name}
```

To call a specific resource, append the resource path:

```
https://{gateway-host}/{proxy-name}/chat/completions
```

#### App LLM Proxy Keys

Generate an API key to authenticate requests to the deployed gateway.

1. Click **Generate API Key** in the Get Started panel.
2. Copy and save your API key immediately.

:::danger[Important]
API keys are only displayed once. Store it in a secure location immediately — you will not be able to retrieve it again.
:::

#### Deployed Gateways

The **Deployed Gateways** section lists all gateways this proxy is deployed to, along with the deployment status.

---

### Next Steps

- [Invoke via SDKs](../invoke-via-sdk.md) - Connect to your proxy from Python using provider-native SDKs
- Manage Your App LLM Proxy - Configure provider, resources, security, and guardrails
- [Apply Policies](../policies/overview.md) - Learn about available policies for rate limiting and caching

## Manage App LLM Proxy

Once you create an App LLM Proxy, you can manage its configuration through the proxy details page. This guide covers all management operations available for your specialized application or agent proxy.

:::info[On This Page]
**Proxy Configuration:**

- [Provider Settings](#provider-settings) - LLM service provider and authentication
- [Resources](#resources) - OpenAPI specification and endpoints
- [Security](#security) - Client application authentication
- [Guardrails](#guardrails) - Content protection and policies
- [Get Started](#get-started) - API keys and gateway deployments

**Lifecycle Operations:**

- [Save Changes](#save-changes) - Apply configuration updates
- [Delete Proxy](#delete-proxy) - Remove proxy permanently
:::

---

### Access Proxy Details

1. Navigate to **LLM** > **Proxies** in the left navigation menu.

2. Click on a proxy name to open its details page.

The proxy details page displays the following information at the top:

- **Proxy name** (e.g., Test-Openai)
- **Provider** - The linked LLM service provider
- **Version** - The proxy version
- **Last updated** - Timestamp of the most recent change

The page is organized into four configuration tabs: **Provider**, **Resources**, **Security**, and **Guardrails**. On the right side, you'll find the **Get Started** panel with API key generation and deployed gateway information.

The **Deploy to Gateway** button and a **delete** icon are located in the top-right corner of the page.

---

### Provider Settings

<div style={{borderLeft: '4px solid #1976d2', paddingLeft: '16px', marginBottom: '24px'}}>

Configure which LLM service provider the proxy connects to and how it authenticates with the provider.

</div>

#### LLM Service Provider

1. Go to the **Provider** tab.

2. Use the **Provider** dropdown to select or change the linked LLM service provider.

    The dropdown lists all service providers that have been configured in your workspace.

    :::info
    Changing the provider updates related settings such as authentication and available resources.
    :::

#### API Key Configuration

If your selected provider uses API key authentication, you'll see the **API Key Configuration** section below the provider dropdown.

| Field | Description |
|-------|-------------|
| **Header Name** | The authentication header required by the provider (e.g., `X-API-Key`). This field is read-only and is defined by the provider template. |
| **API Key** | Enter your provider's API key in this field. |

**To configure:**

1. Enter the API key in the **API Key** field.
2. Click **Save API Key** to store the credential securely.

:::warning[Security Best Practices]
- API keys are encrypted and stored securely
- Keys are not displayed after saving
- Store a backup copy in a secure location
- Rotate keys regularly for security
:::

---

### Resources

<div style={{borderLeft: '4px solid #388e3c', paddingLeft: '16px', marginBottom: '24px'}}>

Define which API endpoints (resources) are available through this proxy by importing an OpenAPI specification.

</div>

#### OpenAPI Specification

The OpenAPI specification defines the resources (API endpoints) available through your proxy. Depending on the provider, the specification may be automatically populated.

**To import manually:**

1. Go to the **Resources** tab.

2. Click the **Import from file** button.

3. Upload a JSON or YAML file containing your OpenAPI specification.

4. The proxy automatically parses the file and displays the extracted resources.

:::tip[OpenAPI Format]
Supports OpenAPI 3.0 and 3.1 specifications in both JSON and YAML formats.
:::

#### View Resources

After importing, the **Resources** section displays the count and list of parsed resources. Each resource shows:

- **HTTP Method** - The HTTP method (GET, POST, PUT, DELETE, PATCH)
- **Resource Path** - The endpoint path (e.g., `/v1/chat/completions`)
- **Description** - A description extracted from the OpenAPI spec

---

### Security

<div style={{borderLeft: '4px solid #f57c00', paddingLeft: '16px', marginBottom: '24px'}}>

Configure how client applications authenticate when accessing your proxy endpoints.

</div>

#### Authentication

1. Go to the **Security** tab.

2. Configure the following authentication settings:

| Field | Description |
|-------|-------------|
| **Authentication type** | Select the authentication method from the dropdown. Currently, **API Key** is available. |
| **Key name** | The name of the key that clients must provide (e.g., `X-API-Key`). |
| **Sent in** | Choose how clients send the authentication key: **Header** (recommended) or **Query Parameter**. |

3. Click **Save** to apply the security configuration.

:::tip[Best Practice]
Use **Header** authentication for production environments. Query parameters may be logged in server access logs and browser history.
:::

---

### Guardrails

<div style={{borderLeft: '4px solid #d32f2f', paddingLeft: '16px', marginBottom: '24px'}}>

Attach guardrails to enforce content safety, compliance, and quality standards on this proxy.

</div>

#### Global Guardrails

Global guardrails apply to **all resources** in the proxy.

**To add a global guardrail:**

1. Go to the **Guardrails** tab.

2. In the **Global Guardrails** section, click **+ Add Guardrail**.

3. A right-side panel opens displaying the available guardrails and policies.

4. Select a guardrail from the list.

5. Configure the guardrail settings including version, parameters, and any advanced settings.

6. Click **Submit** to add the guardrail.

Added guardrails appear as pills showing the guardrail name and version.

#### Resource-wise Guardrails

Resource-wise guardrails apply to **specific endpoints** only. This section lists each resource from your OpenAPI specification, allowing you to attach guardrails to individual endpoints.

**To add a resource-specific guardrail:**

1. In the **Resource-wise Guardrails** section, find the resource you want to protect.

2. Expand the resource card and click **+ Add Guardrail**.

3. Select and configure the guardrail (same process as global guardrails).

4. Click **Submit** to attach the guardrail to the resource.

#### Manage Guardrails

- **View**: Global guardrails appear as pills in the Global Guardrails section. Resource-specific guardrails appear under each resource card.
- **Remove**: Click the **×** icon on a guardrail pill to remove it.

:::warning
After adding or removing guardrails, you must redeploy the proxy for the changes to take effect. Click **Deploy to Gateway** to apply your changes.
:::

:::info
Learn more about available guardrails in the Guardrails Overview. For the full list of policies and their specifications, visit the [Policy Hub](https://wso2.com/api-platform/policy-hub/).
:::

---

### Save Changes

After making configuration changes across any tab (Provider, Resources, Security, Guardrails), click the **Save** button at the bottom-right of the page to persist your changes.

Use the **Cancel** button to discard all unsaved changes and revert to the last saved state.

:::info
Configuration changes require a manual redeploy to take effect on deployed gateways. After saving, click **Deploy to Gateway** to apply your changes.
:::

---

### Delete Proxy

To delete a proxy, click the **delete** icon (trash icon) in the top-right corner of the proxy details page, next to the Deploy to Gateway button.

:::danger[Irreversible Action]
Deleting a proxy is permanent and cannot be undone.

- The proxy is immediately removed from all gateways
- All generated API keys stop working
- All configuration (resources, security, guardrails) is deleted
:::

:::warning[Before Deleting]
- Ensure no applications are actively using the proxy
- Back up any important configuration settings
- Notify teams that depend on the proxy endpoints
:::

---

### Next Steps

- [Policies Overview](../policies/overview.md) - Learn about all available policies for proxies
- [Policy Hub](https://wso2.com/api-platform/policy-hub/) - Browse the full catalog of available guardrails and policies
