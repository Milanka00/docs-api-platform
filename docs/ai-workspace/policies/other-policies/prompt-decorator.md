---
title: "Prompt Decorator"
description: "Prepend or append system instructions or context to every LLM request, configured in AI Workspace."
---

The Prompt Decorator policy prepends or appends content to prompts before they are sent to the upstream LLM. Use it to inject system instructions, safety guidelines, or contextual information into every request — without requiring changes to the client application.

## Configuration Parameters

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| **Decoration** | Yes | — | The content to inject. Either a plain text string (for single-field prompts) or a list of chat messages with `role` and `content` (for chat-format requests). |
| **JSON Path** | Yes | — | A JSONPath expression pointing to the field in the request body where the decoration is applied (e.g., `$.messages` for a chat array, `$.prompt` for a text field). |
| **Append** | No | `false` | When `true`, the decoration is appended after the existing content. When `false` (default), it is prepended before. |

### Decoration Formats

**Text decoration** — Use a plain string to inject text into a single-field prompt:

```json
"decoration": "You are a helpful assistant. Always respond in formal English.\n\n"
```

**Chat message decoration** — Use an array of role/content objects to inject messages into a chat conversation:

```json
"decoration": [
  {
    "role": "system",
    "content": "You are a helpful assistant. Only answer questions about software development."
  }
]
```

## Add This Policy

1. Sign in to [AI Workspace](https://ai-workspace.bijira.dev/). To add the policy to an App LLM Proxy, also select the project from the top navigation.
2. In the left navigation menu, under **LLM**, click **LLM Providers** or **App LLM Proxies**, and then click the provider or proxy.
3. Click the **Guardrails & Policies** tab.
4. To apply the policy to all resources, click **Add** in the **Global Guardrails & Policies** section. To apply it to a specific resource, expand the resource in the resource-wise section and add the policy there.
5. In the **Guardrails** panel, click **Prompt Decorator**.
6. Enter the **Decoration** content.
7. Set the **JSON Path** to the field in the request where content should be injected.
8. Choose whether to **Append** (after) or prepend (before) the existing content.
9. Add the policy, and then click **Save**.
10. To apply the changes to the gateways, click **Deploy to Gateway** and deploy the provider or proxy.

## Example: Inject a System Prompt

The following configuration prepends a system instruction to every chat completion request:

| Parameter | Value |
|-----------|-------|
| JSON Path | `$.messages` |
| Decoration | `[{"role": "system", "content": "Always respond in plain text. Do not use markdown formatting."}]` |
| Append | `false` |

**Original request:**

```json
{
  "model": "gpt-4o",
  "messages": [
    {"role": "user", "content": "Explain recursion."}
  ]
}
```

**Request after decoration (sent to LLM):**

```json
{
  "model": "gpt-4o",
  "messages": [
    {"role": "system", "content": "Always respond in plain text. Do not use markdown formatting."},
    {"role": "user", "content": "Explain recursion."}
  ]
}
```

## Related

- [Policies Overview](../overview.md)
- [Prompt Template](prompt-template.md) — Apply reusable prompt templates with parameter substitution
- [Policy Hub](https://wso2.com/api-platform/policy-hub/) — Full policy specification and latest version
