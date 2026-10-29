---
title: "Insights"
description: "Monitor the LLM, MCP, and agent-to-agent traffic that flows through your AI Gateways, along with its users, requests, and errors, in AI Workspace."
---

Insights shows how your AI workloads use the AI Gateway. It collects analytics from the LLM, MCP, and agent-to-agent (A2A) requests that pass through your gateways, so that you can understand how your applications and agents consume AI services and spot problems early.

Use Insights to

- See how much traffic your applications send to LLM providers and App LLM Proxies.
- Track how AI agents and MCP clients use the tools, resources, and prompts of your MCP proxies.
- Follow agent-to-agent interactions that pass through your agent proxies.
- Find errors in AI traffic, such as requests blocked by guardrails or rate limits, or failures from upstream providers.
- Decide where to tune rate limits, guardrails, and other policies, based on actual usage.

Insights is powered by [Moesif](https://www.moesif.com/).

## View Insights

1. Sign in to [AI Workspace](https://ai-workspace.bijira.dev/), and select the project from the top navigation.
2. In the left navigation menu, click **Insights**.

The **Overview** dashboard opens.

## AI Traffic

The traffic charts at the bottom of the **Overview** dashboard break down the traffic by type, so that you can monitor each kind of AI workload separately.

| Chart | Shows | Use it to |
|:------|:------|:----------|
| **LLM Traffic** | Requests to LLM providers and App LLM Proxies | Understand how your applications consume LLMs, and detect spikes that can increase your provider costs. |
| **MCP Traffic** | Requests from MCP clients to MCP proxies | See how AI agents use the capabilities of your MCP servers. |
| **A2A Traffic** | Agent-to-agent requests, such as requests to agent proxies | Monitor how your agents communicate with each other. |
| **API Traffic** | Requests to APIs | Compare your AI traffic with your regular API traffic. |

## Usage Summary

The charts at the top of the **Overview** dashboard summarize all the traffic for the selected time range.

| Chart | Shows |
|:------|:------|
| **Unique Users** | The number of distinct users who sent requests. |
| **Total Requests** | The number of requests that the gateways handled. |
| **Total Errors** | The number of requests that failed. A rise in errors can point to guardrail interventions, exceeded rate limits, or problems with an upstream LLM provider or MCP server. |

To view a chart in more detail, click the arrow next to its name.

## Filter and Refresh the Data

Use the controls at the top of the dashboard to change the data that the charts show.

| Control | Use it to |
|:--------|:----------|
| **Analytics** and **Overview** | Switch to another analytics view or dashboard. |
| **Day** | Set the time interval that each data point in a chart covers. |
| **Last 7 Days** | Set the time range of the data, for example, the last 24 hours or the last 30 days. |
| **No Refresh** | Set how often the dashboard refreshes automatically. |
| Refresh icon | Refresh the dashboard now. |

If a chart shows **0 Results**, no traffic was recorded in the selected time range. Send requests through a deployed LLM provider or proxy, or select a longer time range.

## Related

- [GenAI Applications](./gen-ai-applications.md) - Group API keys by application to view AI usage per application
- [Manage an LLM Provider](./llm-providers/manage-provider.md) - Set rate limits based on the usage you observe
- [Policies](./policies/overview.md) - Apply guardrails and rate limits to your AI traffic
