---
title: "Configure an MCP Proxy"
description: "Create an MCP proxy for an upstream MCP server in AI Workspace and deploy it to an AI Gateway."
---

An MCP Proxy exposes a managed endpoint that your applications use to reach an MCP Server. Once deployed, the proxy handles authentication and various other access controls.

This guide walks you through creating a proxy and deploying it to a gateway.

## Prerequisites

:::info[Before You Begin]
- Access to AI Workspace with **Admin** or **Developer** role
:::

## Create a New Proxy

1. Sign in to [AI Workspace](https://ai-workspace.bijira.dev/).
2. Select the project in which you want to create the proxy, from the top navigation.
3. In the left navigation menu, under **MCP**, click **MCP Proxies**.
4. Click **Create MCP Proxy**.

    ![MCP Proxies page showing Create your first MCP Proxy with a Create MCP Proxy button](/img/cloud/ai-gateway/ai-workspace/mcp-proxies/no-mcp-proxies.png)

5. On the **Create MCP Proxy from Endpoint** page, enter the URL of your MCP server in **MCP Proxy Endpoint URL**. To try the feature with a sample MCP server, click **Try with Sample URL**.

    If the MCP server is protected with static credentials, expand **Advanced Configurations**, and under **Configure Authentication Header**, enter the **Header** name and its **Value**. AI Workspace uses these credentials to fetch the server information.

    ![Create MCP Proxy from Endpoint page with the MCP Proxy Endpoint URL field, the Try with Sample URL link, and Advanced Configurations expanded to show the Header and Value fields of the authentication header](/img/cloud/ai-gateway/ai-workspace/mcp-proxies/mcp-proxy-endpoint.png)

    :::note
    The MCP server must be reachable from AI Workspace over the internet. A `localhost` URL doesn't work.
    :::

6. Click **Fetch Server Info**.

    AI Workspace connects to the MCP server and shows its details under **Upstream Server Info**, such as the server name, version, and supported MCP versions. Under **Capabilities**, it lists the number of **Tools**, **Resources**, and **Prompts** that the server offers. Expand a capability type to view its items.

    ![Create MCP Proxy from Endpoint page showing the upstream server info of bijira-mcp-everything v1.0.0 with the supported MCP version 2025-06-18, and capabilities with 4 tools, 10 resources, and 3 prompts](/img/cloud/ai-gateway/ai-workspace/mcp-proxies/mcp-server-info.png)

7. Click **Next**.
8. Enter the proxy details.

    - **Name** (required): A unique name for the proxy, for example, `mcp-server`.
    - **Version** (required): The version of the proxy. It is pre-filled, for example, `v1.0.0`. You can change it if needed.
    - **Description**: Optionally, a description of the proxy's purpose, for example, `Primary MCP Proxy`.
    - **Context**: The base path of the proxy. It is pre-filled from the project and proxy names, for example, `/sample-project/mcp-server`.
    - **Target** (required): The URL of the MCP server that the gateway calls. It is pre-filled with the URL you entered in step 5.

    ![Create MCP Proxy from Endpoint page with the name mcp-server, version v1.0.0, description Primary MCP Proxy, context /sample-project/mcp-server, the target URL, and the Create button](/img/cloud/ai-gateway/ai-workspace/mcp-proxies/mcp-proxy-details.png)

9. Click **Create**.

    The proxy is created, and its details page opens. A banner at the top of the page shows the next steps: **Configure Policies** and **Deploy to Gateway & Test**. The **Overview** tab lists the **Capabilities** of the proxy, that is, its tools, resources, and prompts. To add more capabilities, click **Add Capabilities**.

    ![Details page of the mcp-server proxy with a success banner showing the Configure Policies and Deploy to Gateway & Test steps, the Deploy to Gateway button, and the Overview tab listing 4 tools, 10 resources, and 3 prompts](/img/cloud/ai-gateway/ai-workspace/mcp-proxies/mcp-proxy-created.png)

## Deploy Proxy to Gateway

:::warning[Required Step]
The proxy can't be used until it is deployed to at least one gateway.
:::

On the proxy details page, click **Deploy to Gateway**, and then click **Build and Deploy** selecting the gateway you want to deploy it to.

## Test the Proxy

Once the proxy is deployed, you will see the MCP Proxy URL in the overview page.

### Connect with an MCP Client

Select a gateway from the **Gateways** dropdown to see the base URL for calling this proxy through that gateway.

The URL follows the format:

```
https://{gateway-host}/{proxy-context}/mcp
```

---

## Next Steps

- [Apply Policies to an MCP Proxy](./apply-policies.md) - Secure and govern the proxy with policies
