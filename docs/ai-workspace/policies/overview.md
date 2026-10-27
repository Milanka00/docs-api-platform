---
title: "Overview"
description: "Apply built-in guardrail, rate-limiting, and traffic-management policies to LLM providers and App LLM proxies in AI Workspace."
---

The AI Workspace provides built-in policies that let you govern how traffic flows through your LLM Providers and App LLM Proxies. Policies can be applied at the provider level (affecting all proxies that use the provider) or at the proxy level (scoped to a specific proxy or individual endpoints).

## Guardrails

Guardrails enforce content safety and compliance on requests and responses.

| Guardrail | Description |
|-----------|-------------|
| Semantic Prompt Guard | Block or allow prompts based on semantic similarity to configured phrases. |
| PII Masking Regex | Detect and mask PII in requests and responses using regex patterns. |
| Azure Content Safety | Filter harmful content using Azure Content Safety moderation. |
| Word Count | Enforce word count limits on prompts or responses. |
| Sentence Count | Enforce sentence count limits on prompts or responses. |

## Rate Limit

Rate limit policies control how much LLM traffic — by token count or monetary cost — can flow through a provider or proxy.

| Policy | Description |
|--------|-------------|
| LLM Cost | Calculate the USD cost of each LLM call and make it available to cost-based rate limiting. No configuration required. |
| Token-Based Rate Limit | Limit prompt, completion, or total token consumption within a time window. |
| LLM Cost-Based Rate Limit | Enforce monetary spending budgets (e.g., $10/hour). Requires the LLM Cost policy. |

## Other Policies

| Policy | Description |
|--------|-------------|
| Token-Based Rate Limit | Limit request count and token consumption via the built-in Rate Limiting tab or the Token Based Rate Limit policy. |
| Rate Limit - Basic | Enforce a simple request count limit within a time window. |
| Model Round Robin | Distribute requests across multiple models in round-robin order. |
| Prompt Decorator | Prepend or append content to every request. |
| Prompt Template | Apply reusable parameterized prompt templates to requests. |
| Semantic Cache | Cache LLM responses and serve them for semantically similar requests. |

## Where Policies are Applied

Policies are configured through the management tabs of your LLM Providers and App LLM Proxies:

- **LLM Provider** — Rate limits and guardrails configured on a provider apply to all proxies that use it. Guardrails can be applied globally (all endpoints) or per resource (specific endpoints).
- **App LLM Proxy** — Guardrails configured on a proxy can be applied globally (all endpoints) or per resource (specific endpoints) to specialize the behavior for a specific Gen AI application or agent.

When both provider-level and proxy-level policies are active, they are both enforced. Provider-level policies act as a baseline, and proxy-level policies add additional protection.

## Policy Hub

All guardrail policies in the AI Workspace are powered by the [Policy Hub](https://wso2.com/api-platform/policy-hub/). The Policy Hub is a central registry of all available policies and their latest versions.

Visit the [Policy Hub](https://wso2.com/api-platform/policy-hub/) to explore all available guardrails, their documentation, and configuration schemas.

## Next Steps

- Guardrails Overview — Explore available guardrails and how to configure them
- Writing an AI Policy — Learn how to write a custom AI policy for the self-hosted gateway
