---
title: "Overview"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## LLM Providers Overview

LLM Providers are integrations with AI service platforms that offer language models. By configuring providers in the AI Workspace, you can:

- **Centralize credential management**: Store API keys and authentication details securely
- **Connect multiple providers**: Integrate with leading LLM services
- **Monitor provider status**: Track availability and health of connected services
- **Simplify configuration**: Use providers across multiple proxies without duplicating credentials

### Supported Providers

API Platform AI Workspace supports the following LLM providers:

| Provider | Description | Learn More |
|----------|-------------|-----------|
| <img src="https://raw.githubusercontent.com/nomadxd/openapi-connectors/main/openapi/openai/icon.png" alt="OpenAI" style={{width: '32px', verticalAlign: 'middle'}} /> **OpenAI** | Access GPT-4, GPT-3.5, and other OpenAI models | [Documentation](https://developers.openai.com/api/docs) |
| <img src="https://raw.githubusercontent.com/nomadxd/openapi-connectors/main/openapi/anthropic.claude/icon.png" alt="Anthropic" style={{width: '32px', verticalAlign: 'middle'}} /> **Anthropic** | Integrate Claude models for advanced AI capabilities | [Documentation](https://docs.anthropic.com/) |
| <img src="https://raw.githubusercontent.com/nomadxd/openapi-connectors/main/openapi/azure.openai/icon.png" alt="Azure OpenAI" style={{width: '32px', verticalAlign: 'middle'}} /> **Azure OpenAI** | Use OpenAI models hosted on Microsoft Azure | [Documentation](https://azure.microsoft.com/products/ai-services/openai-service) |
| <img src="https://raw.githubusercontent.com/wso2/api-platform/main/llm-provider-specs/azureai-foundry/icon.png" alt="Azure AI Foundry" style={{width: '32px', verticalAlign: 'middle'}} /> **Azure AI Foundry** | Access models through Azure AI Foundry platform | [Documentation](https://azure.microsoft.com/products/ai-studio) |
| <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="Gemini" style={{width: '32px', verticalAlign: 'middle'}} /> **Gemini** | Integrate Google's Gemini language models | [Documentation](https://ai.google.dev/gemini-api) |
| <img src="https://raw.githubusercontent.com/nomadxd/openapi-connectors/main/openapi/mistral/icon.png" alt="Mistral AI" style={{width: '32px', verticalAlign: 'middle'}} /> **Mistral AI** | Access Mistral's open and commercial models | [Documentation](https://mistral.ai/) |
| **AWS Bedrock (Coming Soon)** | Connect to Amazon Bedrock's managed AI service |  |

[//]: # (## Quick Start)

[//]: # ()
[//]: # (To start using LLM Providers:)

[//]: # ()
[//]: # (1. Navigate to AI Workspace in your API Platform dashboard)

[//]: # (2. Select "LLM Providers" from the menu)

[//]: # (3. Click "+ Add New Provider" and choose your provider type)

[//]: # (4. Enter your credentials and configure settings)

[//]: # (5. Save and test the connection)

**Next:** Configure LLM Provider - Step-by-step guide to set up your first provider

## Configure LLM Provider

LLM Providers allow you to connect AI service platforms like OpenAI, Anthropic, and others to the AI Workspace. Once configured, providers can be deployed and used directly through the managed gateway.

:::note
App LLM Proxies are optional. Use them when you want app- or agent-specific guardrails, authentication, resource exposure, or other controls on top of the same provider.
:::

### Prerequisites

- Access to API Platform Console with **Admin** role
- At least one [AI Gateway created and set up](../ai-gateway/setting-up.md)
- API credentials for your LLM provider (API key, access tokens, etc.)

### Add a New Provider

1. Navigate to **AI Workspace** in your API Platform dashboard.
2. Select **Service Providers** from the menu.
3. Click **+ Add New Provider** and choose your provider type (e.g., **OpenAI**, **Anthropic**).

   ![Add LLM Service Provider panel showing selectable tiles for OpenAI, Mistral, Gemini, Azure OpenAI, Azure AI Foundry, AWS Bedrock, and Anthropic](/img/cloud/ai-gateway/ai-workspace/llm-provider/select-llm-provider-type.png)

### Configure Provider Details

After selecting your provider type, fill in the provider configuration form:

   ![Add LLM Service Provider form with OpenAI selected, showing Name, Version, Description, Context, API Key, and Guardrails fields](/img/cloud/ai-gateway/ai-workspace/llm-provider/llm-provider-details.png)

#### Basic Information

1. **Name*** (Required): Enter a unique name for the provider (e.g., `openai-production`, `anthropic-dev`).

2. **Version*** (Required): The version is pre-filled (e.g., `v1.0`). You can edit this if needed.

3. **Description** (Optional): Add a description to identify the provider's purpose.

4. **Context** (Optional): Enter the context path (default: `/`). This is the base context for the provider.

#### Authentication

The authentication fields vary depending on the provider you selected:

<Tabs>
<TabItem value="openai" label="OpenAI">

**API Key*** (Required): Enter your OpenAI API key (starts with `sk-proj-` or `sk-`).

:::info
OpenAI's endpoint URL is pre-configured automatically.
:::

</TabItem>
<TabItem value="anthropic" label="Anthropic">

**API Key*** (Required): Enter your Anthropic API key (starts with `sk-ant-`).

:::info
Anthropic's endpoint URL is pre-configured automatically.
:::

</TabItem>
<TabItem value="gemini" label="Gemini">

**API Key*** (Required): Enter your Google AI API key.

:::info
Gemini's endpoint URL is pre-configured automatically.
:::

</TabItem>
<TabItem value="mistral-ai" label="Mistral AI">

**API Key*** (Required): Enter your Mistral AI API key.

:::info
Mistral AI's endpoint URL is pre-configured automatically.
:::

</TabItem>
<TabItem value="azure-openai" label="Azure OpenAI">

1. **Upstream URL*** (Required): Enter your Azure OpenAI resource endpoint (e.g., `https://your-resource.openai.azure.com/`).
2. **API Key*** (Required): Enter your Azure OpenAI API key.

</TabItem>
<TabItem value="azure-ai-foundry" label="Azure AI Foundry">

1. **Upstream URL*** (Required): Enter your Azure AI Foundry endpoint URL.
2. **API Key*** (Required): Enter your Azure AI Foundry API key.

</TabItem>
</Tabs>

#### Add Guardrails (Optional)

You can attach policies and guardrails to your provider that apply to all requests:

1. In the **Guardrails** section of the form, click **+ Add Guardrail**.

2. A sidebar will open showing available guardrails and policies.

3. Click on a guardrail to select it and configure its settings.

4. Click **Add** to attach it to the provider.

:::tip[Advanced Settings]
Each guardrail includes advanced configuration options that allow you to fine-tune its behavior. After selecting a guardrail, you can configure these settings before attaching it to the provider.
:::

:::info
Learn more about available guardrails in the Guardrails Overview. For the full list of policies and their specifications, visit the [Policy Hub](https://wso2.com/api-platform/policy-hub/).
:::

### Save Provider

1. After configuring all settings and adding guardrails (if needed), click **Add Provider**.

2. You'll see a confirmation message indicating the provider was created successfully.

3. The provider will appear in the providers list.

### Deploy Provider to Gateway

After creating your provider, you must deploy it to a gateway before it can be used.

:::warning[Required Step]
Your provider will not be functional until it is deployed to at least one gateway.
:::

1. Click the **Deploy to Gateway** button in the top right corner.

2. Click **Deploy** on one or more gateways from the available list.

3. Wait for the deployment to complete. The status will change to **Deployed**.

### Get Started

Once the provider is deployed, the provider details page shows the Invoke URL on the left and a **Get Started** panel on the right.

#### Invoke URL

Select a gateway from the **Gateways** dropdown to see the base URL for accessing this provider through that gateway.

#### API Keys

Generate an API key to authenticate requests to the deployed gateway.

1. Click **Generate API Key** in the Get Started panel.
2. Copy and save your API key immediately.

:::danger[Important]
API keys are only displayed once. Store it in a secure location immediately — you will not be able to retrieve it again.
:::

#### Deployed Gateways

The **Deployed Gateways** section lists all gateways this provider is deployed to, along with the host address and deployment status.

---

### Next Steps

- [Configure App LLM Proxy](../app-llm-proxies/overview.md) - Configure and deploy a specialized proxy endpoint for a Gen AI application or agent using your provider
- Manage Provider - Configure access control, security, rate limiting, and more

## Manage LLM Provider

After deploying your LLM Provider, manage its configuration through the provider details page. This guide covers all management operations organized by tab.

:::info[On This Page]
**Provider Configuration:**

- [Connection](#connection) - Endpoint and authentication settings
- [Access Control](#access-control) - Enable/disable API endpoints
- [Security](#security) - Application authentication setup
- [Rate Limiting](#rate-limiting) - Token usage controls
- [Guardrails](#guardrails) - Content safety and compliance
- [Models](#models) - Available AI models

**Lifecycle Operations:**

- [Redeploy Provider](#redeploy-provider) - Push configuration updates
- [Delete Provider](#delete-provider) - Remove provider permanently
:::

---

### Access Provider Details

1. Navigate to **AI Workspace** > **LLM Providers**.

2. Click on a provider name to open its details page.

The provider details page shows:

- Provider name, version, and template type
- Creation and last updated timestamps  
- Six management tabs (Connection, Access Control, Security, Rate Limiting, Guardrails, Models)
- **Deploy to Gateway** button in the top right

### Connection

<div style={{borderLeft: '4px solid #2196F3', paddingLeft: '16px', marginBottom: '24px'}}>

Manage upstream endpoint configuration and authentication credentials for the LLM provider.

</div>

#### Provider Endpoint

**Upstream URL** - Where API requests are forwarded to:

| Provider Type | URL Configuration |
|---------------|-------------------|
| OpenAI, Anthropic, Gemini, Mistral AI | Pre-configured (read-only) |
| Azure OpenAI, Azure AI Foundry, AWS Bedrock | Custom URL (editable) |

**To update:**

1. Modify the **Provider Endpoint** field
2. Click **Save**

#### Authentication

Configure how the gateway authenticates with the upstream provider:

- **Authentication Type**: Usually `api-key` (set by template)
- **Credentials**: Your provider API key
    - Click the 👁️ icon to show/hide the value
    - Update and click **Save** to change credentials

#### OpenAPI Specification

**Spec URL** - The OpenAPI specification for importing API resources:

- Can be a URL or file upload
- Automatically populates the Access Control resources list
- Re-import to refresh available endpoints

---

### Access Control

<div style={{borderLeft: '4px solid #4CAF50', paddingLeft: '16px', marginBottom: '24px'}}>

Control which API endpoints are accessible through this provider.

</div>

#### Mode

Select the access control mode at the top of the tab:

| Mode | Behavior |
|------|----------|
| **Allow all** | All resources are accessible by default. Move specific resources to **Denied Resources** to block them. |
| **Deny all** | All resources are blocked by default. Move specific resources to **Allowed Resources** to permit them. |

Use the arrow buttons between the two panels to move resources:

- **`>>`** — Move all resources to the other panel
- **`>`** — Move selected resource(s) to the other panel
- **`<`** — Move selected resource(s) back
- **`<<`** — Move all resources back

#### Import Resources

Click **Import resources from specification** to load or refresh the resource list from the provider's OpenAPI specification.

---

### Security

<div style={{borderLeft: '4px solid #FF9800', paddingLeft: '16px', marginBottom: '24px'}}>

Configure how applications authenticate when accessing this provider through the gateway.

</div>

#### API Key Authentication

Set up the API key that client applications must provide:

| Field | Description | Example |
|-------|-------------|---------|
| **Authentication Type** | Authentication method | `apiKey` (default) |
| **API Key Name** | Header or query parameter name | `x-api-key`, `apikey`, `Authorization` |
| **Key Location** | Where clients send the key | `Header` (recommended) or `Query` |

**To configure:**

1. Select **Authentication Type**: `apiKey`
2. Enter **API Key Name** that applications will use
3. Choose **Key Location**:
    - **Header** - Sent in HTTP request header (most secure)
    - **Query** - Sent as URL query parameter (less secure)
4. Click **Save**

---

### Rate Limiting

<div style={{borderLeft: '4px solid #9C27B0', paddingLeft: '16px', marginBottom: '24px'}}>

Control request and token consumption to prevent cost overruns and ensure fair usage across all consumers.

</div>

The Rate Limiting tab provides two independent sections: **Backend** and **Per Consumer**.

| Section | Controls | Protects | Status |
|---------|----------|----------|--------|
| **Backend** | Requests from the gateway to the upstream LLM provider | Your provider API credentials and total spend | Available |
| **Per Consumer** | Requests from client applications to the gateway | Fair usage across all consumers | *Coming soon* |

:::info[Per Consumer Rate Limiting — Coming Soon]
Per consumer rate limiting is not yet available. Only the **Backend** section is currently configurable.
:::

Both sections support two configuration modes:

- **Provider-wide** — A single limit applied across all API endpoints.
- **Per Resource** — Individual limits per API endpoint (e.g., chat completions vs. embeddings).

:::note
Provider-wide and Per Resource modes are mutually exclusive per section. Clear existing limits before switching modes.
:::

#### Limit Criteria

Each section lets you configure:

| Criterion | Description |
|-----------|-------------|
| **Request Count** | Maximum number of requests within the reset duration |
| **Token Count** | Maximum number of tokens (prompt + completion) within the reset duration |
| **Cost** | Cost-based limiting *(Coming soon)* |

For each enabled criterion, set the **Quota** and **Reset Duration** (`second`, `minute`, or `hour`).

#### Provider-wide Configuration

1. Select **Provider-wide** in the Backend section.
2. Enable **Request Count** and/or **Token Count**.
3. Enter the **Quota** and select the **Reset Duration** for each criterion.
4. Click **Save**.

#### Per Resource Configuration

1. Select **Per Resource** in the Backend section.
2. Expand **Limit per Resource** to set default limits for all endpoints:
    - Enable the criteria and configure **Quota** and **Reset Duration**.
3. To override limits for a specific endpoint, expand that resource row and configure it separately.
4. Click **Save**.

:::tip[Cost Control Best Practices]
Set conservative backend limits first to protect your provider credentials. Monitor actual usage via the Insights dashboard before increasing limits. Use Per Resource mode only when endpoints have significantly different usage patterns.
:::

**Learn more:** Token-Based Rate Limiting

---

### Guardrails

<div style={{borderLeft: '4px solid #F44336', paddingLeft: '16px', marginBottom: '24px'}}>

Attach guardrails to enforce content safety, compliance, and quality standards. Guardrails on a provider can be applied globally (all endpoints) or per resource (specific endpoints), and affect all proxies that use this provider.

</div>

#### View Attached Guardrails

The tab displays all guardrails currently attached to the provider:

- **Guardrail name** and type
- **Configuration status** and parameters
- **Enable/disable toggles** for quick activation control

#### Add a Guardrail

Guardrails can be added globally (applying to all endpoints) or per resource (applying to a specific endpoint).

**To add a global guardrail:**

1. In the **Global Guardrails** section, click **+ Add Guardrail**.
2. A sidebar opens showing available guardrail types.
3. Select a guardrail and configure its settings:
    - Fill in required parameters
    - Expand **Advanced Settings** for additional options
4. Click **Add** to attach it to the provider.

**To add a resource-level guardrail:**

1. Find the resource you want to protect and expand its card.
2. Click **+ Add Guardrail** within that resource.
3. Select and configure the guardrail (same process as global guardrails).
4. Click **Add** to attach it to the resource.

#### Configure Guardrails

Guardrail parameters cannot be edited in place. To change a guardrail's configuration, you must delete it and add it again with the updated settings.

**To update a guardrail:**

1. Delete the existing guardrail.
2. Click **+ Add Guardrail** and re-add it with the updated configuration.
3. Redeploy the provider to apply the changes.

:::tip[Advanced Settings]
Each guardrail includes advanced configuration options such as custom thresholds, severity levels, and execution phases. Click **Advanced Settings** when adding a guardrail.
:::

:::warning[Production Impact]
Guardrail changes require a manual redeploy to take effect on deployed gateways. Test thoroughly in a non-production environment before enabling strict guardrails.
:::

**Learn more:** Guardrails Overview. For the full policy catalog, visit the [Policy Hub](https://wso2.com/api-platform/policy-hub/).

---

### Models

<div style={{borderLeft: '4px solid #00BCD4', paddingLeft: '16px', marginBottom: '24px'}}>

Configure which AI models are accessible through this provider.

</div>

#### Add Models

**To add new models:**

1. Click **Add model provider**
2. Select a provider from the list to import its model catalog
3. Click **Add**
4. The models are added and enabled by default

#### Enable/Disable Models

Control which models applications can access:

- **Toggle switches**: Enable/disable individual models
- **Effect**: Disabled models are blocked at the gateway
- Applications attempting to use disabled models will receive an error

---

### Lifecycle Operations

---

#### Redeploy Provider

Push configuration changes to deployed gateways.

**When to redeploy:**

- After updating connection settings
- After modifying rate limits or guardrails  
- After enabling/disabling resources or models

**To redeploy:**

1. Click **Deploy to Gateway** (top right corner)
2. Select the gateway(s) to deploy to
3. Review the changes summary
4. Click **Deploy**

:::info[Deployment Status]
Monitor deployment progress in the notification panel. Changes take effect within seconds of successful deployment.
:::

---

#### Delete Provider

Permanently remove the provider and all its configurations.

:::warning[Prerequisite]
A provider cannot be deleted if any App LLM Proxy is currently using it. Delete or reassign all dependent proxies before proceeding.
:::

**To delete:**

1. Navigate to **AI Workspace** > **LLM Providers**
2. Find the provider in the list
3. Click the **Delete** icon
4. Review the warning and confirm deletion

:::danger[Warning: Irreversible Action]
Deleting a provider will:

- ❌ Remove it from all deployed gateways **immediately**
- ❌ Break applications consuming this provider
- ❌ Delete all configuration (guardrails, rate limits, models)
- ❌ **Cannot be undone**
:::

---

### Next Steps

- [Configure App LLM Proxy](../app-llm-proxies/overview.md) - Configure and deploy specialized proxy endpoints for Gen AI applications or agents using your provider
- [Policies Overview](../policies/overview.md) - Explore all available guardrails and policies
