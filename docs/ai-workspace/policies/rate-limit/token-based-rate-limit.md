---
title: "Token-Based Rate Limit"
description: "Limit LLM traffic by prompt, completion, or total token consumption within a configurable time window."
---

The Token-Based Rate Limit policy enforces rate limits based on token consumption rather than request count. Limits can be applied to prompt (input) tokens, completion (output) tokens, or total tokens — independently or in combination.

## Configuration Parameters

At least one of the three limit categories must be configured. Any combination is valid.

| Parameter | Required | Description |
|-----------|----------|-------------|
| **Prompt Token Limits** | Conditional | Rate limits applied to prompt (input) tokens. |
| **Completion Token Limits** | Conditional | Rate limits applied to completion (output) tokens. |
| **Total Token Limits** | Conditional | Rate limits applied to combined prompt + completion tokens. |

Each entry within a category requires:

| Field | Required | Description |
|-------|----------|-------------|
| **count** | Yes | Maximum tokens allowed within the duration. Minimum: `1`. |
| **duration** | Yes | Time window as a Go duration string (e.g., `"1m"`, `"1h"`, `"24h"`). |

When multiple limits are configured within a category, the most restrictive limit is enforced.

## Add This Policy

1. Sign in to [AI Workspace](https://ai-workspace.bijira.dev/). To add the policy to an App LLM Proxy, also select the project from the top navigation.
2. In the left navigation menu, under **LLM**, click **LLM Providers** or **App LLM Proxies**, and then click the provider or proxy.
3. Click the **Guardrails & Policies** tab.
4. To apply the policy to all resources, click **Add** in the **Global Guardrails & Policies** section. To apply it to a specific resource, expand the resource in the resource-wise section and add the policy there.
5. In the **Guardrails** panel, click **Token Based Rate Limit**.
6. Configure limits for prompt tokens, completion tokens, total tokens, or any combination.
7. Add the policy, and then click **Save**.
8. To apply the changes to the gateways, click **Deploy to Gateway** and deploy the provider or proxy.

## Behavior

- Token counts are extracted from the LLM provider's response using paths defined in the provider template. 
- When any configured limit is exceeded, the gateway returns `429 Too Many Requests`.
- Each counter resets after its configured duration elapses.
- Rate limit headers are included in responses:

| Header | Description |
|--------|-------------|
| `X-RateLimit-Limit` | Configured token limit |
| `X-RateLimit-Remaining` | Remaining tokens in the current window |
| `X-RateLimit-Reset` | Time (epoch seconds) when the window resets |
| `RateLimit-*` | IETF equivalents of the above |

## Example: Cap Total Tokens Per Minute

Block requests once 100,000 total tokens have been consumed in a 1-minute window.

| Parameter | Value |
|-----------|-------|
| Total Token Limits — count | `100000` |
| Total Token Limits — duration | `1m` |

## Example: Separate Prompt and Completion Limits

Limit prompt tokens to 50,000 per hour and completion tokens to 20,000 per hour independently.

| Category | count | duration |
|----------|-------|----------|
| Prompt Token Limits | `50000` | `1h` |
| Completion Token Limits | `20000` | `1h` |

## Related

- [LLM Cost-Based Rate Limit](llm-cost-based-rate-limit.md) — Enforce monetary spending budgets instead of token counts
- [Policy Hub](https://wso2.com/api-platform/policy-hub/) — Full policy specification and latest version
