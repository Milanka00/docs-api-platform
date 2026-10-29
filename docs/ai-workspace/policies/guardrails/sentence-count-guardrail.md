---
title: "Sentence Count Guardrail"
description: "Enforce minimum and maximum sentence count limits on LLM prompts or responses, configured in AI Workspace."
---

The Sentence Count Guardrail validates the number of sentences in a request or response. Use it to enforce policies on the structural complexity of prompts or responses for example, requiring responses to be at least a certain length, or capping how many sentences a user prompt can contain.

## Configuration

All parameters are under **Advanced Settings**. Configure a **request** section, a **response** section, or both.

### Request / Response Parameters

Each section (request and response) has the following parameters:

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| **min** | Yes | `0` | Minimum number of sentences required. |
| **max** | Yes | `0` | Maximum number of sentences allowed. Set to `0` to disable the upper limit. |
| **jsonPath** | No | — | JSONPath expression to extract a specific field for validation (e.g., `$.messages[0].content`). If not set, the entire payload is evaluated. |
| **invert** | No | `false` | When `true`, the guardrail intervenes when the sentence count **is within** the configured range instead of outside it. |
| **showAssessment** | No | `false` | When `true`, the intervention response includes details about the violation. |

## Add This Guardrail

1. Sign in to [AI Workspace](https://ai-workspace.bijira.dev/).
2. In the left navigation menu, under **LLM**, click **LLM Providers** or **App LLM Proxies**, and then click the provider or proxy.
3. Click the **Guardrails & Policies** tab.
4. To apply the policy to all resources, click **Add** in the **Global Guardrails & Policies** section. To apply it to a specific resource, expand the resource in the resource-wise section and add the policy there.
5. In the **Guardrails** panel, click **Sentence Count Guardrail**.
6. Expand **Advanced Settings** and configure the **request** and/or **response** sections.
7. Add the policy, and then click **Save**.
8. To apply the changes to the gateways, click **Deploy to Gateway** and deploy the provider or proxy.

## Example: Limit Prompt to 3 Sentences

The following configuration blocks requests where the user message contains more than 3 sentences.

**Advanced Settings - request:**

| Parameter | Value |
|-----------|-------|
| min | `1` |
| max | `3` |
| jsonPath | `$.messages[0].content` |
| invert | `false` |
| showAssessment | `true` |

**Intervention response:**

```json
{
  "type": "SENTENCE_COUNT_GUARDRAIL",
  "message": {
    "action": "GUARDRAIL_INTERVENED",
    "interveningGuardrail": "Sentence Count Guardrail",
    "direction": "REQUEST",
    "actionReason": "Violation of applied sentence count constraints detected.",
    "assessments": "Violation of sentence count detected. Expected between 1 and 3 sentences."
  }
}
```

## Related

- [Guardrails Overview](overview.md)
- [Word Count Guardrail](word-count-guardrail.md)
- [Policy Hub](https://wso2.com/api-platform/policy-hub/) - Full policy specification and latest version
