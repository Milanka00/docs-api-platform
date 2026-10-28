---
title: "Manage an LLM Provider"
description: "Configure connection, access control, security, rate limiting, guardrails, and models for a deployed LLM provider, then redeploy or delete it."
---

After you create an LLM provider, you can view and update its configuration from the provider details page. Each tab on the page manages one part of the configuration.

:::info[On This Page]
**Provider Configuration:**

- [Overview](#overview) - View the proxies, gateways, and API resources of the provider
- [Connection](#connection) - Update the provider endpoint and authentication
- [Access Control](#access-control) - Allow or deny access to API resources
- [Security](#security) - Set how applications authenticate to the provider
- [Rate Limiting](#rate-limiting) - Limit the requests and tokens sent to the provider
- [Guardrails & Policies](#guardrails--policies) - Apply content safety and compliance checks
- [Models](#models) - Choose the AI models that applications can use

**Lifecycle Operations:**

- [Redeploy Provider](#redeploy-provider) - Apply configuration changes to the deployed gateways
- [Delete Provider](#delete-provider) - Remove the provider permanently
:::

---

## Open the Provider Details Page

1. Sign in to [AI Workspace](https://ai-workspace.bijira.dev/).
2. In the left navigation menu, under **LLM**, click **LLM Providers**.
3. Click the provider you want to manage from the list.

The top of the page shows the provider type, for example, **OpenAI**, along with the provider's name, version, description, and context, and when it was last updated.

To view or change the provider's configuration, use the **Overview**, **Connection**, **Access Control**, **Security**, **Rate Limiting**, **Guardrails & Policies**, and **Models** tabs below the provider details. The following sections describe each tab.

:::note
Right after you create a provider, a banner at the top of the page shows the next steps: **Add Guardrails**, **Deploy to Gateway**, and **Consume LLM Provider**. Click a step to go to it, or click **×** to close the banner.
:::

## Overview

The **Overview** tab gives a summary of the provider.

![Overview tab showing the Available Proxies and Deployed Gateways counts, and the OpenAPI Resources list with a search box, an All methods filter, and POST resources such as /chat/completions, /completions, and /images/generations](/img/cloud/ai-gateway/ai-workspace/llm-provider/provider-overview.png)

- **Available Proxies**: The number of App LLM Proxies that use this provider.
- **Deployed Gateways**: The number of AI Gateways that the provider is deployed to.
- **OpenAPI Resources**: The API resources of the provider, taken from its OpenAPI specification.

## Connection

The **Connection** tab can be used to manage the upstream endpoint configuration and authentication credentials for the LLM provider.

![Connection tab of the WSO2 OpenAI Provider showing the Provider Endpoint field set to https://api.openai.com/v1 and the Authentication list set to none, with Cancel and Save buttons](/img/cloud/ai-gateway/ai-workspace/llm-provider/provider-connection.png)

## Access Control

The **Access Control** tab controls which API resources of the provider applications can access through the gateway. The tab lists the resources in two panels, **Allowed Resources** and **Denied Resources**.

![Access Control tab with the Allow all mode selected, Allowed Resources listing resources such as GET /assistants and DELETE /assistants/{assistant_id}, an empty Denied Resources panel, the arrow buttons between the panels, and the Update OpenAPI Definition button](/img/cloud/ai-gateway/ai-workspace/llm-provider/provider-access-control.png)

The **Mode** you select sets the default access to resources.

| Mode | Behavior |
|:-----|:---------|
| **Allow all** | All resources are allowed by default. Move the resources you want to block to **Denied Resources**. |
| **Deny all** | All resources are denied by default. Move the resources you want to permit to **Allowed Resources**. |

To change the list of resources, for example, after the provider adds new endpoints, click **Update OpenAPI Definition** and update the provider's OpenAPI definition.

To apply the changes to the gateways that the provider is deployed to, [redeploy the provider](#redeploy-provider).

## Security

The **Security** tab controls how applications authenticate when they call the provider through the gateway. When authentication is turned on, applications must send an API key with each request.

![Security tab with Authentication turned on, the apiKey authentication type, Authorization as the API key name, Bearer as the API key value prefix, and header as the key location](/img/cloud/ai-gateway/ai-workspace/llm-provider/provider-security.png)

To apply the changes to the gateways that the provider is deployed to, [redeploy the provider](#redeploy-provider).

## Rate Limiting

The **Rate Limiting** tab limits the requests, tokens, and cost that the provider handles, so that you can control spending and share the provider fairly among consumers.

![Rate Limiting tab with the Backend and Per Consumer sections, each with Provider-wide and Per Resource options and Request Count, Token Count, and Cost limits that you can enable](/img/cloud/ai-gateway/ai-workspace/llm-provider/provider-rate-limiting.png)

The tab has two sections that you configure separately.

| Section | Limits | Use it to |
|:--------|:-------|:----------|
| **Backend** | Requests that the gateway sends to the upstream LLM provider | Protect your provider credentials and control the total spend |
| **Per Consumer** | Requests that each consumer sends to the gateway | Share the provider fairly among consumers |

    :::note
    **Provider-wide** and **Per Resource** can't be used together in the same section. Clear the existing limits before you switch from one to the other.
    :::

To apply the changes to the gateways that the provider is deployed to, [redeploy the provider](#redeploy-provider).

:::tip
Start with conservative **Backend** limits to protect your provider credentials. Monitor the actual usage in [Insights](../monitoring-and-analytics.md) before you increase the limits. Use **Per Resource** only when resources have very different usage patterns.
:::

## Guardrails & Policies

The **Guardrails & Policies** tab manages the guardrails and policies that apply to requests to the provider, such as content safety, compliance, and cost checks. Guardrails and policies on a provider affect all the proxies that use the provider.

![Guardrails & Policies tab showing the Global Guardrails & Policies section with the LLM Cost (v1) policy and an Add button, and the Resource-wise Guardrails section listing resources such as POST /chat/completions and POST /completions with a search box and a Policy applied filter](/img/cloud/ai-gateway/ai-workspace/llm-provider/provider-guardrails.png)

| Section | Applies to | Description |
|:--------|:-----------|:------------|
| **Global Guardrails & Policies** | All resources of the provider | Click **Add** to add a guardrail or policy. Drag the guardrails and policies to change the order in which they run. The **LLM Cost** policy is added by default. |
| **Resource-wise Guardrails** | A specific resource | Expand a resource to add guardrails to it. To find a resource, search by its path, or click **Policy applied** to sort the resources that have guardrails applied. |

For the details and configuration of each guardrail and policy, see the [Policy Hub](https://wso2.com/api-platform/policy-hub/).

To apply the changes to the gateways that the provider is deployed to, [redeploy the provider](#redeploy-provider).

## Models

The **Models** tab defines the AI models that applications can use through the provider.

![Models tab showing OpenAI under Model Provider with an Add Model Provider button, and the Models Available — OpenAI section with a box to type a model ID and the gpt-4o-mini, gpt-4.1-mini, and o4-mini models](/img/cloud/ai-gateway/ai-workspace/llm-provider/provider-models.png)

| Section | Description |
|:--------|:------------|
| **Model Provider** | The model providers whose models are available through the provider, for example, **OpenAI**. Click **Add Model Provider** to add one, or click **×** next to a model provider to remove it. |
| **Models Available** | The models of the selected model provider, for example, `gpt-4o-mini`. To add a model, type its ID, for example, `gpt-4.1-mini`, and press **Enter**. To remove a model, click **×** next to it. |

After you make changes, click **Save**. To discard them, click **Cancel**.

To apply the changes to the gateways that the provider is deployed to, [redeploy the provider](#redeploy-provider).

## Lifecycle Operations

### Redeploy Provider

Push configuration changes to deployed gateways.

**When to redeploy:**

- After updating connection settings
- After modifying rate limits or guardrails  
- After enabling/disabling resources or models

**To redeploy:**

1. Click **Deploy to Gateway** (top right corner)
2. Select the gateway(s) to deploy to
3. Click **Deploy**

### Delete Provider

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

## Next Steps

- [Configure App LLM Proxy](../app-llm-proxies/overview.md) - Configure and deploy specialized proxy endpoints for Gen AI applications or agents using your provider
