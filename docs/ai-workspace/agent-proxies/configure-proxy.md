---
title: "Configure Agent Proxy"
description: "Create an Agent Proxy from an A2A agent, deploy it to a gateway, and invoke it."
---

An Agent Proxy exposes an Agent2Agent (A2A) agent through AI Workspace. After you deploy the proxy, clients reach the agent's skills, tasks, and messages through your AI gateway.

This guide walks you through creating an Agent Proxy, deploying it to a gateway, and invoking it.

## Prerequisites

Before you begin, ensure that you have:

- Access to AI Workspace.
- The URL of an A2A agent. You can also use **Try with Sample Agent** to fill a sample agent.

## Create an Agent Proxy

1. Sign in to AI Workspace and open your organization.
2. In the left navigation menu, click **Agent Proxies**.
3. Select the project in which you want to create the proxy, then click **Go to Project Level**.
4. Click **Create Agent Proxy**.

When the project has no proxies, the page displays **Create your first agent proxy**.

{/* Screenshot: Agent Proxies list with Create Agent Proxy. File: static/img/cloud/ai-workspace/agent-proxies/list.png */}

### Connect to the agent

1. In **Agent URL**, enter the URL of your A2A agent.
2. Click **Fetch Agent Info**. This button remains disabled until you enter a URL.

   To use the built-in sample instead, click **Try with Sample Agent**. The workspace fills a sample trip-planning agent and fetches its Agent Card.

3. Review the fetched agent name, version, description, and Agent Card.
4. Click **Next**.

{/* Screenshot: Create Agent Proxy with the agent URL and the fetched agent card. File: static/img/cloud/ai-workspace/agent-proxies/connect.png */}

### Configure the proxy

Click **Back to Connect** to return to the agent URL step. The configure step is filled from the Agent Card.

Provide the following details:

| Field | Description |
|---|---|
| **Name** | Required. The agent name from the Agent Card. |
| **Version** | Required. Prefilled as `v1.0`. You can change it if needed. |
| **Description** | The agent description from the Agent Card. |
| **Context** | The base path for the proxy. It includes the project path and the agent name, for example `/sample-project/trip-planning-agent`. |
| **Target** | Required. The agent endpoint. The placeholder is `http://host.docker.internal:9000`. |

Under **Transports to Expose**, select the interfaces to publish. Each transport shows its path, and you can edit the path. The sample agent exposes both of the following, and both are selected:

- **JSONRPC** at `/rpc`
- **HTTP+JSON** at `/rest`

:::note
The Agent Card is served in Passthrough mode, and URLs inside it are rewritten to the gateway. You can change this after the proxy is created.
:::

Click **Create**.

{/* Screenshot: Configure step with name, context, target, and transports. File: static/img/cloud/ai-workspace/agent-proxies/configure.png */}

## Deploy the proxy to a gateway

Deploy the proxy before clients can invoke it.

1. On the proxy details page, click **Deploy to Gateway**. You can also click **Deploy to Gateway & Test** on the setup banner.
2. Review the environment and the available gateways, including their hosts and deployment statuses. Before the first deployment, **Build Area** displays "No builds yet. Deploying prepares one."
3. Click **Build and deploy**.
4. On the **Deploy to development** page, review the gateway and click **Deploy**.

{/* Screenshot: Agent proxy deploy page with Build and deploy and the gateway list. File: static/img/cloud/ai-workspace/agent-proxies/deploy.png */}

Save policy or backend changes before you deploy again so the build includes them. For those settings, see [Manage an Agent Proxy](./manage-proxy.md).

## Invoke the Agent Proxy

After deployment, the deploy page lists each gateway and its host. Send requests to that host using the proxy context and the transport path you exposed.

```text
https://{gateway-host}{context}/rpc
https://{gateway-host}{context}/rest
```

`{context}` is the context from the proxy, such as `/sample-project/trip-planning-agent`. Use `/rpc` for JSONRPC and `/rest` for HTTP+JSON.

The public Agent Card is served on the gateway at its discovery path. When **Rewrite URLs** is enabled, URLs inside the card point at the gateway.

## Next steps

- [Manage an Agent Proxy](./manage-proxy.md) to update transports, the Agent Card, guardrails, and the backend connection.
