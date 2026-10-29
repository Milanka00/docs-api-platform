---
title: "Manage Agent Proxy"
description: "Update transports, the Agent Card, guardrails, and the backend connection for an Agent Proxy."
---

After creating an Agent Proxy, you can manage it from the proxy details page. This guide covers the **Overview**, **Agent Card**, **Guardrails & Policies**, and **Backend Connection** tabs.

:::info[On This Page]
**Proxy configuration:**

- [Access proxy details](#access-proxy-details)
- [Overview](#overview) - Transports and paths
- [Agent Card](#agent-card) - Public and protected cards
- [Guardrails and policies](#guardrails-and-policies) - Policies on A2A operations
- [Backend connection](#backend-connection) - Agent endpoint and authentication

**Lifecycle operations:**

- [Save changes](#save-changes)
- [Delete the proxy](#delete-the-proxy)
:::

## Access proxy details

1. Sign in to AI Workspace and open your organization.
2. In the left navigation menu, under **AGENTS**, click **Agent Proxies**.
3. Select the project, then click **Go to Project Level**.
4. Open the proxy by clicking its name.

The proxy list displays the following columns:

- **Name** - The proxy name.
- **Description** - A brief description of the proxy.
- **Context** - The proxy context path.
- **Version** - The proxy version.
- **Last Updated** - The time of the most recent update.
- **Actions** - Available actions for the proxy.

The header displays the proxy name, an **A2A** label, the version, the context, and the last updated time. Use **Edit Agent Proxy** to edit the proxy and **Deploy to Gateway** to deploy it.

The page contains four tabs: **Overview**, **Agent Card**, **Guardrails & Policies**, and **Backend Connection**.

{/* Screenshot: Agent proxy details with the steps banner and tabs. File: static/img/cloud/ai-workspace/agent-proxies/details.png */}

## Overview

The **Overview** tab lists the transports exposed by the proxy and the path for each transport. Edit a path, then click **Save**.

## Agent Card

The **Agent Card** tab configures the cards that clients can read.

| Card | Description |
|---|---|
| **Public Card** | Served unauthenticated at a discovery path. |
| **Protected Card** | Returned by the GetExtendedAgentCard operation. |

Each card has a **Mode**:

- **Passthrough** forwards the upstream agent's card. Changes on the agent are reflected automatically. This is the default for the public card.
- **Managed** stores a card that you edit on this page.
- **Rewrite URLs** replaces upstream URLs in the card with gateway URLs.

**Card Content** displays the card. Click **Fetch Agent Info** to reload it from the agent. Click **Save** after you change a mode.

{/* Screenshot: Agent Card tab with public and protected card modes. File: static/img/cloud/ai-workspace/agent-proxies/agent-card.png */}

## Guardrails and policies

The **Guardrails & Policies** tab has three sections:

- **Global Operation Policies** apply to all A2A operations. Drag policies to change their execution order. Click **Add Policy** to attach a policy.
- **Operation-wise Policies** run after the global policies for one operation. Select an operation, click **Add operation**, then add policies for that operation.
- **Public Agent Card Policies** apply only to the public Agent Card discovery path.

Click **Learn how to reorder policies** for the drag order. For the available policies, see the [Policy Hub](https://wso2.com/api-platform/policy-hub/).

## Backend connection

The **Backend Connection** tab configures how the proxy reaches the agent.

| Field | Description |
|---|---|
| **Agent Endpoint URL** | The target URL fetched from the Agent Card. You can change it. |
| **Authentication** | How the proxy authenticates to the agent. The options are **none**, **api-key**, and **other**. |

When you select **api-key**, provide the **Authentication Header** and **Credentials**. Click **Show credentials** to display the credential value.

Click **Save** after you change the connection.

## Save changes

After updating the proxy, click **Save** to apply your changes. Click **Cancel** to discard unsaved changes.

:::info
Saving changes does not update an existing gateway deployment. After saving, click **Deploy to Gateway** and complete the deployment steps in [Configure an Agent Proxy](./configure-proxy.md).
:::

## Delete the proxy

To remove an Agent Proxy, open its details page and click **Delete**. The button label includes the agent name.

Deleting the proxy removes it from the project. Before proceeding, ensure that clients no longer depend on the proxy.

## Next steps

- [Configure an Agent Proxy](./configure-proxy.md) - Create, deploy, and invoke an Agent Proxy.
- [Policy Hub](https://wso2.com/api-platform/policy-hub/) - Browse the available guardrails and policies.
