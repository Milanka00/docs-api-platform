---
title: "Policies Overview"
description: "Apply built-in guardrail, rate-limiting, and traffic-management policies to LLM providers, App LLM proxies, MCP proxies, and agent proxies in AI Workspace."
---

The AI Workspace provides built-in policies that let you govern how traffic flows through your LLM Providers, App LLM Proxies, MCP Proxies, and Agent Proxies. For LLM traffic, policies can be applied at the provider level (affecting all proxies that use the provider) or at the proxy level (scoped to a specific proxy or individual endpoints).

## Guardrails

Guardrails enforce content safety and compliance on requests and responses.

| Guardrail | Description |
|-----------|-------------|
| [PII Masking Regex](guardrails/regex-pii-masking.md) | Detect and mask PII in requests and responses using regex patterns. |
| [Azure Content Safety](guardrails/azure-content-safety.md) | Filter harmful content using Azure Content Safety moderation. |
| [Word Count](guardrails/word-count-guardrail.md) | Enforce word count limits on prompts or responses. |
| [Sentence Count](guardrails/sentence-count-guardrail.md) | Enforce sentence count limits on prompts or responses. |

## Rate Limit

Rate limit policies control how much LLM traffic by token count or monetary cost can flow through a provider or proxy.

| Policy | Description |
|--------|-------------|
| [LLM Cost](rate-limit/llm-cost.md) | Calculate the USD cost of each LLM call and make it available to cost-based rate limiting. No configuration required. |
| [Token-Based Rate Limit](rate-limit/token-based-rate-limit.md) | Limit prompt, completion, or total token consumption within a time window. |
| [LLM Cost-Based Rate Limit](rate-limit/llm-cost-based-rate-limit.md) | Enforce monetary spending budgets (e.g., $10/hour). Requires the LLM Cost policy. |

## Other Policies

| Policy | Description |
|--------|-------------|
| [Model Round Robin](other-policies/model-round-robin.md) | Distribute requests across multiple models in round-robin order. |
| [Prompt Decorator](other-policies/prompt-decorator.md) | Prepend or append content to every request. |
| [Prompt Template](other-policies/prompt-template.md) | Apply reusable parameterized prompt templates to requests. |
| [Semantic Cache](other-policies/semantic-cache.md) | Cache LLM responses and serve them for semantically similar requests. |


## Where Policies are Applied

You configure policies on the LLM Providers, App LLM Proxies, MCP Proxies, and Agent Proxies in AI Workspace.

- **LLM Provider** - Rate limits and guardrails configured on a provider apply to all proxies that use it. Guardrails can be applied globally (all endpoints) or per resource (specific endpoints).
- **App LLM Proxy** - Guardrails configured on a proxy can be applied globally (all endpoints) or per resource (specific endpoints) to specialize the behavior for a specific Gen AI application or agent.
- **MCP Proxy** - Policies configured in the **Policies** tab of an MCP proxy apply to all the MCP traffic through the proxy.
- **Agent Proxy** - Policies configured on an agent proxy apply to the agent-to-agent (A2A) traffic through the proxy.

When both provider-level and proxy-level policies are active on LLM traffic, they are both enforced. Provider-level policies act as a baseline, and proxy-level policies add additional protection.

## Policy Hub

All guardrail policies in the AI Workspace are powered by the [Policy Hub](https://wso2.com/api-platform/policy-hub/). The Policy Hub is a central registry of all available policies and their latest versions.

Visit the [Policy Hub](https://wso2.com/api-platform/policy-hub/) to explore all available guardrails, their documentation, and configuration schemas.

## Next Steps

- [Guardrails Overview](guardrails/overview.md) — Explore available guardrails and how to configure them
- [Writing an AI Policy](writing-an-ai-policy.md) — Learn how to write a custom AI policy for the self-hosted gateway
