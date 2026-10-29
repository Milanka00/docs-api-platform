---
title: "Model Round Robin"
description: "Distribute LLM requests across multiple models in round-robin order, with automatic suspension of failing models, configured in AI Workspace."
---

The Model Round Robin policy distributes requests across multiple AI models using round-robin selection. If a model returns a server error (`5xx`) or a rate limit response (`429`), it can be temporarily suspended so that traffic automatically shifts to the remaining healthy models.

## Configuration Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| **Models** | Yes | The list of model names to balance across (e.g., `gpt-4o`, `gpt-4-turbo`). Add at least two models. |
| **Suspend Duration** | No | Number of seconds to suspend a model after it returns a `5xx` or `429` response. While suspended, the model is skipped. Set to `0` (default) to disable suspension. |

## Add This Policy

1. Sign in to [AI Workspace](https://ai-workspace.bijira.dev/). To add the policy to an App LLM Proxy, also select the project from the top navigation.
2. In the left navigation menu, under **LLM**, click **LLM Providers** or **App LLM Proxies**, and then click the provider or proxy.
3. Click the **Guardrails & Policies** tab.
4. To apply the policy to all resources, click **Add** in the **Global Guardrails & Policies** section. To apply it to a specific resource, expand the resource in the resource-wise section and add the policy there.
5. In the **Guardrails** panel, click **Model Round Robin**.
6. Add the model names to balance across.
7. Optionally, expand **Advanced Settings** and set a **Suspend Duration** to handle model failures gracefully.
8. Add the policy, and then click **Save**.
9. To apply the changes to the gateways, click **Deploy to Gateway** and deploy the provider or proxy.

## Behavior

- On each request, the policy selects the next available model in round-robin order and replaces the model value in the request before forwarding upstream.
- If a model returns a `5xx` or `429` response and **Suspend Duration** is set, the model is suspended for that duration and subsequent requests skip it.
- If all models are suspended, the gateway returns `503 Service Unavailable`.

## Related

- [Policies Overview](../overview.md)
- [Policy Hub](https://wso2.com/api-platform/policy-hub/) — Full policy specification and latest version
