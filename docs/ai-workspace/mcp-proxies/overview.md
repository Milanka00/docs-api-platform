---
title: "Overview"
---

## MCP Proxies Overview

### What is Model Context Protocol?

MCP is a JSON-RPC–based protocol designed to standardize how applications interact with large language models (LLMs). It enables sharing of contextual information—such as local files, databases, or APIs—with LLMs, while also allowing applications to expose tools and capabilities for AI-driven workflows and integrations.

MCP follows a host–client–server architecture and supports two primary transport mechanisms: stdio and streamable HTTP. While stdio is commonly used for local communication between clients and servers on the same machine, in most cases, these servers should be deployed in remote environments with proper authorization controls, ensuring that LLM applications can securely access the data.

For more information, refer to the official [specification](https://modelcontextprotocol.io/introduction).

### What is an MCP Proxy?

An MCP Proxy lets you connect the gateway to an upstream MCP Server. The MCP Clients can connect to the dedicated endpoint provided by the gateway to connect to your upstream MCP Server.
The proxy allows you to apply various policies which allow you to control the MCP traffic through the gateway.

### What does an MCP Proxy offer?

While MCP defines an RPC-based communication model between agents and tools, it does not fully address the complexities of real-world enterprise environments.

- **Enforce Security**: Managing authentication, authorization
- **Apply Policies**: Enforcing various policies to control MCP traffic
- **Observability**: Gaining visibility into what tools, servers are being called, what's causing errors and much more.

MCP Proxy will address these challenges providing built-in security, governance, and observability for all MCP communication.

### Next Steps

- Configure MCP Proxy — Step-by-step guide to create and deploy your first proxy
- Apply Policies — Apply policies after deployment

## Configure an MCP Proxy

An MCP Proxy exposes a managed endpoint that your applications use to reach an MCP Server. Once deployed, the proxy handles authentication and various other access controls.

This guide walks you through creating a proxy and deploying it to a gateway.

### Prerequisites

:::info[Before You Begin]
- Access to AI Workspace with **Admin** or **Developer** role
:::

---

### Create a New Proxy

1. Navigate to **MCP** > **MCP Proxies** in the left navigation menu.

2. Click **+ Create MCP Proxy** button.

3. Provide the **MCP Server URL**. Workspace will fetch the server information by connecting with this URL.

    :::warning[Protected Servers]
    If the MCP Server is protected with a set of static credentials, you can provide them under the **Advanced Configurations** section.
    Workspace will use these credentials when fetching the server information.
    :::

4. Click **Next** to proceed to the next step.

5. Fill in the required proxy details:

    1. **Name** (Required): Enter a unique name for the proxy (e.g., `mcp-tools-proxy`, `context-server-proxy`). The Proxy ID is auto-generated from the name (lowercase, hyphen-separated).

    2. **Version** (Required): The version is pre-filled (e.g., `v1.0`). You can edit this if needed.

    3. **Description** (Optional): Add a brief description to identify the proxy's purpose.

    4. **Context** (Optional): Enter the context path (default: `/`). This is the base path for proxy endpoints (normalized with "/" prefix).

    5. **Target** (Required): The MCP Server URL the gateway should call. This will be auto populated based on the URL you provided in the previous step.

6. Click **Create** to create and save the proxy.

---

### Deploy Proxy to Gateway

After creating your proxy, you must deploy it to a gateway before it can be used.

:::warning[Required Step]
Your proxy will not be functional until it is deployed to at least one gateway.
:::

1. Click the **Deploy to Gateway** button in the top-right corner of the proxy details page.

2. The **Deploy to Gateway** page opens, showing all available gateways. Use the search bar to find a specific gateway.

3. Each gateway card displays:
    - **Gateway name** and **status** (Active or Not Active)
    - **Current Deployment** identifier (if previously deployed)

4. Click **Deploy** next to the gateway you want to deploy to.

5. Once deployed, expand the gateway card to view deployment details:

    | Field | Description |
    |-------|-------------|
    | **Deployment Status** | Active or Inactive |
    | **Deployment ID** | Unique identifier for the deployment |
    | **Deployed** | Time since deployment |
    | **Stop** | Button to stop an active deployment |

6. The **API Deployment History** panel on the right shows the deployment timeline:
    - Deployment identifier and timestamp
    - Status tags (**Latest**, **Deployed**)

**To stop a deployment:**

Click the **Stop** button next to an active deployment to undeploy the proxy from that gateway.

Click **Back to MCP Proxy** to return to the proxy details page.

:::info[Deployment Status]
Monitor deployment progress on this page. Changes take effect within seconds of successful deployment.
:::

---

### Get Started

Once the proxy is deployed, you will see the MCP Proxy URL in the overview page.

#### Connect with an MCP Client

Select a gateway from the **Gateways** dropdown to see the base URL for calling this proxy through that gateway.

The URL follows the format:

```
https://{gateway-host}/{proxy-context}/mcp
```

---

### Next Steps

- Apply Policies - Apply policies for MCP Proxies.

## Apply Policies for MCP Proxy

Once you create an MCP proxy, you can apply various policies through the Policies page.

The AI Workspace provides a set of built-in policies that let you govern how traffic flows through your MCP Proxies. These policies are applied at the policy level.
However, you have the option to define rules per tools, prompts, etc. inside MCP specific policies if required. This will essentially apply the policies at each capability level.

### Access Control Policies

There are several policies that enforce security for MCP Proxies.

| Policy | Description |
|-----------|-------------|
| [MCP Authentication](https://wso2.com/api-platform/policy-hub/policies/mcp-auth) | Apply authentication as defined in the MCP Specification. |
| [MCP Authorization](https://wso2.com/api-platform/policy-hub/policies/mcp-authz) | Apply fine-grained authorization for MCP capabilities and JSON RPC methods. |
| [MCP Access Control](https://wso2.com/api-platform/policy-hub/policies/mcp-acl-list) | Allow or deny access to MCP capabilities. |

### Other Policies

| Policy | Description |
|-----------|-------------|
| [MCP Rewrite](https://wso2.com/api-platform/policy-hub/policies/mcp-rewrite) | Rewrite MCP capabilities returned through the proxy. This will only return the modified ones if used. |

You can apply other standard policies as well to MCP Proxies. Some policies might not be compatible with MCP. Hence the behavior will vary based on the policy.

### Policy Hub

All policies in the AI Workspace are powered by the [Policy Hub](https://wso2.com/api-platform/policy-hub/). The Policy Hub is a central registry of all available policies and their latest versions.

Visit the [Policy Hub](https://wso2.com/api-platform/policy-hub/) to explore all available guardrails, their documentation, and configuration schemas.
