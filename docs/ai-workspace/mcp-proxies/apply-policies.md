---
title: "Apply Policies to an MCP Proxy"
description: "Secure and govern an MCP proxy with access control and other policies from the Policy Hub."
---

After you create an MCP proxy, you can apply policies to it to govern the MCP traffic that flows through the gateway, for example, to authenticate clients, control access to capabilities, and limit requests.

Policies apply to the whole proxy. Some MCP policies let you define rules for individual tools, resources, and prompts, so that you can control access at the capability level.

## Add Policies to a Proxy

1. Sign in to [AI Workspace](https://ai-workspace.bijira.dev/), and select the project of the proxy from the top navigation.
2. In the left navigation menu, under **MCP**, click **MCP Proxies**, and then click the proxy.
3. Click the **Policies** tab, and then click **Add Policies**.

    ![Policies tab of the mcp-server proxy showing No policies added yet with an Add Policies button](/img/cloud/ai-gateway/ai-workspace/mcp-proxies/no-policies.png)

4. In the **Policies** panel, click the policy you want to add. Each policy shows its publisher and version. Configure the advanced options of the policy, if any, and add it.

    ![Policies panel listing policies such as CORS, Log Message, MCP Access Control, MCP Authentication, MCP Authorization, MCP Rate Limit, and MCP Rewrite, each with its publisher and version](/img/cloud/ai-gateway/ai-workspace/mcp-proxies/select-policy.png)

    The policy appears in the **Policies** section.

    ![Policies tab with the Log Message policy added, and the You have unsaved changes message with Cancel and Save buttons](/img/cloud/ai-gateway/ai-workspace/mcp-proxies/policy-added.png)

5. To add more policies, click **Add Policies** and repeat the previous step.
6. Drag the policies to set the order in which they run. To remove a policy, click **×** next to it.
7. Click **Save**. To discard your changes, click **Cancel**.

To apply the policies to the gateways that the proxy is deployed to, deploy the proxy again. See [Deploy Proxy to Gateway](./configure-proxy.md#deploy-proxy-to-gateway).

## Access Control Policies

There are several policies that enforce security for MCP Proxies.

| Policy | Description |
|-----------|-------------|
| [MCP Authentication](https://wso2.com/api-platform/policy-hub/policies/mcp-auth) | Apply authentication as defined in the MCP Specification. |
| [MCP Authorization](https://wso2.com/api-platform/policy-hub/policies/mcp-authz) | Apply fine-grained authorization for MCP capabilities and JSON RPC methods. |
| [MCP Access Control](https://wso2.com/api-platform/policy-hub/policies/mcp-acl-list) | Allow or deny access to MCP capabilities. |

## Other Policies

| Policy | Description |
|-----------|-------------|
| [MCP Rewrite](https://wso2.com/api-platform/policy-hub/policies/mcp-rewrite) | Rewrite MCP capabilities returned through the proxy. This will only return the modified ones if used. |

You can apply other standard policies as well to MCP Proxies. Some policies might not be compatible with MCP. Hence the behavior will vary based on the policy.

## Policy Hub

All policies in the AI Workspace are powered by the [Policy Hub](https://wso2.com/api-platform/policy-hub/). The Policy Hub is a central registry of all available policies and their latest versions.

Visit the [Policy Hub](https://wso2.com/api-platform/policy-hub/) to explore all available guardrails, their documentation, and configuration schemas.
