---
title: "PII Masking Regex"
description: "Detect and mask personally identifiable information in LLM requests and responses using regex patterns, configured in AI Workspace."
---

The PII Masking Regex guardrail detects and masks Personally Identifiable Information (PII) in request and response payloads using regex patterns. It supports built-in detectors for common PII types and custom regex patterns for additional entities.

It operates in two modes.

- **Masking (default)** - Detected PII is replaced with a reversible placeholder (e.g., `[EMAIL_0000]`). The original value can be restored in the response flow.
- **Redaction** - Detected PII is permanently replaced with `*****` and cannot be restored.

## Configuration Parameters

All parameters are optional.

| Parameter | Default | Description |
|-----------|---------|-------------|
| **Email** | `false` | Enable built-in EMAIL detection. |
| **Phone** | `false` | Enable built-in PHONE detection. |
| **SSN** | `false` | Enable built-in SSN (Social Security Number) detection. |
| **Custom PII Entities** | — | Custom PII definitions. Each entry has a name and a regex pattern used to match it. |
| **JSON Path** | `$.messages` | JSONPath to extract the field to scan. If empty, the entire payload is processed as plain text. |
| **Redact PII** | `false` | When `true`, matched PII is permanently replaced with `*****`. When `false`, PII is masked with reversible placeholders. |

## Add This Policy

1. Sign in to [AI Workspace](https://ai-workspace.bijira.dev/).
2. In the left navigation menu, under **LLM**, click **LLM Providers** or **App LLM Proxies**, and then click the provider or proxy.
3. Click the **Guardrails & Policies** tab.
4. To apply the policy to all resources, click **Add** in the **Global Guardrails & Policies** section. To apply it to a specific resource, expand the resource in the resource-wise section and add the policy there.
5. In the **Guardrails** panel, click **PII Masking Regex**.
6. Expand **Advanced Settings** and enable the built-in detectors and/or add custom PII entities.
7. Add the policy, and then click **Save**.
8. To apply the changes to the gateways, click **Deploy to Gateway** and deploy the provider or proxy.

## Behavior

- Matched PII in the request is masked before forwarding to the upstream LLM.
- In masking mode (default), the original values are restored in the response.
- In redaction mode (`Redact PII: true`), the replacement is permanent — PII is removed from both the request and the response.

## Related

- [Guardrails Overview](overview.md)
- [Policy Hub](https://wso2.com/api-platform/policy-hub/) - Full policy specification and latest version
