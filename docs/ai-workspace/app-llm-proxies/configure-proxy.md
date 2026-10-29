---
title: "Configure App LLM Proxy"
description: "Create an App LLM Proxy in a project and deploy it to a gateway."
---

An App LLM Proxy exposes a managed endpoint that your Gen AI applications or agents use to access an LLM Provider. Once deployed, the proxy handles authentication and enforces the guardrails you configure. You can create separate proxies for different applications, agents, or environments, each with its own configuration, API keys, and access controls, while sharing the same provider backend.

This guide walks you through creating an App LLM Proxy, configuring its provider and request format, optionally attaching a transformer, and deploying it to a gateway.

## Prerequisites

Before you begin, ensure that you have:

- Access to AI Workspace.
- At least one [configured and deployed LLM Provider](../llm-providers/overview.md).

## Create a new App LLM Proxy

1. Sign in to AI Workspace and open your organization.
2. In the left navigation menu, under **LLM**, click **App LLM Proxies**.
3. Select the project in which you want to create the proxy, then click **Go to Project Level**.
4. Click **Create App LLM Proxy**.

### Enter the proxy details

Provide the following details:

| Field | Description |
|---|---|
| **Name** | Required. Enter a name for the proxy, such as `support-chat-proxy`. The placeholder may use the selected provider's name. |
| **Version** | Required. The version is prefilled as `v1.0`. You can change it if needed. |
| **Description** | Optional. Enter a brief description of the proxy's purpose. |
| **Context** | The base path for the proxy's endpoints. It initially includes the project path and updates based on the proxy name. You can edit it if needed. |

### Configure the provider

Under **Provider Configuration**:

1. Under **LLM Provider**, select the provider you want the proxy to use. The list displays the providers available in your organization.
2. Under **API Keys**, provide the API key required to access the selected provider. Enter an existing key in **Enter API Key Manually**, or click **Generate API Key** to generate a key.
3. Ensure that an API key is available before creating the proxy. The **Create Proxy** button remains disabled until a key is provided.
4. Optionally configure **Advanced Configurations** to set the **Inbound Interface** (the request format accepted from client applications) and use **Add Additional LLM Provider** to configure multiple providers. See [Route to Several Providers](./multi-provider.md) for details.
5. Click **Create Proxy** to create the proxy. 

After creation, the proxy details page displays information such as the proxy name, version, provider, context, and last updated time.


## Add Guardrails (Optional)

You can attach guardrails to your proxy to apply policies to incoming requests:

1. In the **Guardrails** tab, click **+ Add Guardrail**.
2. Browse the available guardrails and policies in the sidebar.
3. Select a guardrail and configure its settings.
4. Click **Submit** to attach the guardrail to the proxy.

:::tip[Advanced Settings]
Each guardrail includes advanced configuration options that allow you to fine-tune its behavior. Configure these settings before attaching the guardrail, as needed.
:::

:::info
For more information about available guardrails, see the [Guardrails Overview](../policies/guardrails/overview.md). For the full list of policies and their specifications, visit the [Policy Hub](https://wso2.com/api-platform/policy-hub/).
:::


## Deploy the proxy to a gateway

You must deploy the proxy to a gateway before applications or agents can invoke it.


1. On the proxy details page, click **Deploy to Gateway**.
2. Review the environment and the available gateways, including their hosts and deployment statuses.
3. Click **Build and deploy**, then click **Deploy** on the **Deploy to development** page.

After deployment, verify the deployment status before invoking the proxy.

## Invoke the App LLM Proxy

After deploying the proxy, you can obtain its invoke URL and generate an API key to authenticate requests.

1. On the proxy details page, select the deployed gateway from the **Gateways** dropdown to view the invoke URL for that gateway.
2. Click **Generate API Key** to generate a key for invoking the proxy.
3. Copy and securely save the API key. The key is displayed only once.
4. Use the invoke URL and API key to send requests to the App LLM Proxy from your application or agent.

The invoke URL follows this format:

```text
https://{gateway-host}/{proxy-name}
```

To invoke a specific resource, append its path to the URL. For example:

```text
https://{gateway-host}/{proxy-name}/chat/completions
```



## Next steps

- [Manage App LLM Proxy](./manage-proxy.md) to manage resources, providers, security, guardrails, and deletion.