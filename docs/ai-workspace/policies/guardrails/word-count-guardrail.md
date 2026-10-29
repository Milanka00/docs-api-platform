---
title: "Word Count Guardrail"
description: "Enforce minimum and maximum word count limits on LLM prompts or responses, configured in AI Workspace."
---

The Word Count Guardrail validates the number of words in a request or response. Use it to enforce content length policies for example, limiting how long a user's prompt can be, or ensuring responses meet a minimum length requirement.

## Configuration

All parameters are under **Advanced Settings**. Configure a **request** section, a **response** section, or both.

### Request / Response Parameters

Each section (request and response) has the following parameters.

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| **min** | Yes | `0` | Minimum number of words required. |
| **max** | Yes | `0` | Maximum number of words allowed. Set to `0` to disable the upper limit. |
| **jsonPath** | No | — | JSONPath expression to extract a specific field for validation (e.g., `$.messages[0].content`). If not set, the entire payload is evaluated. |
| **invert** | No | `false` | When `true`, the guardrail intervenes when the word count **is within** the configured range instead of outside it. |
| **showAssessment** | No | `false` | When `true`, the intervention response includes details about the violation. |

## Add This Guardrail

1. Sign in to [AI Workspace](https://ai-workspace.bijira.dev/).
2. In the left navigation menu, under **LLM**, click **LLM Providers** or **App LLM Proxies**, and then click the provider or proxy.
3. Click the **Guardrails & Policies** tab.
4. To apply the policy to all resources, click **Add** in the **Global Guardrails & Policies** section. To apply it to a specific resource, expand the resource in the resource-wise section and add the policy there.
5. In the **Guardrails** panel, click **Word Count Guardrail**.
6. Expand **Advanced Settings** and configure the **request** and/or **response** sections.
7. Add the policy, and then click **Save**.
8. To apply the changes to the gateways, click **Deploy to Gateway** and deploy the provider or proxy.

## Example: Limit Prompt Length

The following configuration blocks requests where the user message exceeds 50 words.

**Advanced Settings - request:**

| Parameter | Value |
|-----------|-------|
| min | `1` |
| max | `50` |
| jsonPath | `$.messages[0].content` |
| invert | `false` |
| showAssessment | `true` |

**Intervention response:**

```json
{
  "type": "WORD_COUNT_GUARDRAIL",
  "message": {
    "action": "GUARDRAIL_INTERVENED",
    "interveningGuardrail": "Word Count Guardrail",
    "direction": "REQUEST",
    "actionReason": "Violation of applied word count constraints detected.",
    "assessments": "Violation of word count detected. Expected between 1 and 50 words."
  }
}
```

## Related

- [Guardrails Overview](overview.md)
- [Sentence Count Guardrail](sentence-count-guardrail.md)
- [Policy Hub](https://wso2.com/api-platform/policy-hub/) - Full policy specification and latest version
