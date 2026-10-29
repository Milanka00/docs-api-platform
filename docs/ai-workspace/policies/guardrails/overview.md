---
title: "Guardrails Overview"
description: "Detect unsafe content, mask sensitive data, and enforce content limits on LLM traffic using guardrails configured in AI Workspace."
---

Guardrails inspect and act on the content of requests and responses flowing through the AI Gateway detecting unsafe content, masking sensitive data, and caching responses. They run without any changes to client applications.

## Available Guardrails

| Guardrail | Description |
|-----------|-------------|
| [PII Masking Regex](regex-pii-masking.md) | Detect and mask Personally Identifiable Information (PII) using regex patterns. No external service required. |
| [Azure Content Safety](azure-content-safety.md) | Filter harmful content (hate, sexual, self-harm, violence) using Azure Content Safety. Requires an Azure subscription. |
| [Word Count](word-count-guardrail.md) | Enforce minimum or maximum word count limits on prompts or responses. |
| [Sentence Count](sentence-count-guardrail.md) | Enforce minimum or maximum sentence count limits on prompts or responses. |

## How Guardrails Work

| Guardrail | Behavior |
|-----------|----------|
| **Semantic Prompt Guard** | Blocks requests with `422 Unprocessable Entity` if the prompt is semantically similar to a denied phrase, or not similar enough to any allowed phrase. |
| **PII Masking Regex** | Masks PII in the request before forwarding upstream. In masking mode, original values are restored in the response. Does not block requests. |
| **Azure Content Safety** | Blocks requests or responses with `422 Unprocessable Entity` if content meets or exceeds a configured severity threshold. |
| **Word Count** | Blocks requests or responses with `422 Unprocessable Entity` if the word count falls outside the configured limits. |
| **Sentence Count** | Blocks requests or responses with `422 Unprocessable Entity` if the sentence count falls outside the configured limits. |

## Applying Guardrails

Guardrails can be configured on both LLM Providers and App LLM Proxies:

| Level | Scope | Best For |
|-------|-------|----------|
| **LLM Provider (Global)** | All endpoints, across all proxies using the provider | Organization-wide policies applied uniformly (e.g., PII masking) |
| **LLM Provider (Per Resource)** | A specific endpoint, across all proxies using the provider | Endpoint-specific provider-level rules |
| **App LLM Proxy (Global)** | All endpoints of the proxy | Proxy-wide rules for a specific Gen AI application or agent |
| **App LLM Proxy (Per Resource)** | A specific endpoint within the proxy | Endpoint-specific rules scoped to a single specialized proxy |

:::note
When guardrails are configured at multiple levels, all of them are evaluated. Provider-level guardrails run first, followed by proxy-level guardrails.
:::

### How to Add a Guardrail

**On an LLM Provider:**

1. Sign in to [AI Workspace](https://ai-workspace.bijira.dev/).
2. In the left navigation menu, under **LLM**, click **LLM Providers**, and then click the provider.
3. Click the **Guardrails & Policies** tab.

    ![Guardrails & Policies tab of the WSO2 OpenAI Provider showing the Global Guardrails & Policies section with the LLM Cost (v1) policy and an Add button, and the Resource-wise Guardrails section](</img/cloud/ai-gateway/ai-workspace/policies/llm-provider-guardrails.png>)

4. Add the guardrail.

    - To add a guardrail to all resources, click **Add** in the **Global Guardrails & Policies** section.
    - To add a guardrail to a specific resource, expand the resource in the **Resource-wise Guardrails** section, and add the guardrail there.

5. In the **Guardrails** panel, click the guardrail, configure its parameters, and add it.
6. To change the order in which the guardrails and policies run, drag them in the section.
7. Click **Save**.
8. To apply the changes to the gateways, click **Deploy to Gateway** and deploy the provider.

**On an App LLM Proxy:**

1. Sign in to [AI Workspace](https://ai-workspace.bijira.dev/), and select the project from the top navigation.
2. In the left navigation menu, under **LLM**, click **App LLM Proxies**, and then click the proxy.
3. Click the **Guardrails & Policies** tab.

    ![Guardrails & Policies tab of the Support Chat Proxy showing the Global Guardrails & Policies section with the API Key Auth (1) policy and an Add button, and the Resource-wise Guardrails & Policies section with a search box and a Policy applied filter](</img/cloud/ai-gateway/ai-workspace/policies/app-llm-proxy-guardrails.png>)

4. Add the guardrail.

    - To add a guardrail to all resources, click **Add** in the **Global Guardrails & Policies** section.
    - To add a guardrail to a specific resource, expand the resource in the **Resource-wise Guardrails & Policies** section, and add the guardrail there. To find a resource, type its path in **Search resources**.

5. In the **Guardrails** panel, click the guardrail, configure its parameters, and add it.
6. To change the order in which the guardrails and policies run, drag them in the section.
7. Click **Save**.
8. To apply the changes to the gateways, click **Deploy to Gateway** and deploy the proxy.

To remove a guardrail, click **×** next to it, and then click **Save**.

## Guardrail Intervention Response

When a guardrail blocks a request or response, it returns the following structure:

```json
{
  "type": "<GUARDRAIL_TYPE>",
  "message": {
    "action": "GUARDRAIL_INTERVENED",
    "interveningGuardrail": "<guardrail name>",
    "direction": "REQUEST or RESPONSE",
    "actionReason": "<reason for intervention>",
    "assessments": "<detailed assessment (if Show Assessment is enabled)>"
  }
}
```

## Learn More

The [Policy Hub](https://wso2.com/api-platform/policy-hub/) is the central registry for all guardrail policies. It contains full documentation, configuration schemas, and the latest versions of each guardrail.
