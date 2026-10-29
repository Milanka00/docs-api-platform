---
title: "AI Gateways"
description: "Use a managed AI gateway or a self-hosted AI Gateway 1.2.0 runtime with AI Workspace, and edit or delete existing gateways."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

An AI gateway is the runtime that receives AI traffic, applies the policies you configure, and routes requests to LLM providers and other backends. AI Workspace is the control plane. From this console you can use a **managed gateway** or a **self-hosted gateway**.

## Managed and self-hosted gateways

**Managed gateways** run in the WSO2 cloud data plane. WSO2 provisions and operates them. The **development** environment includes a managed AI gateway by default. You can deploy to that gateway, and you can add more managed gateways in the same environment.

You can also create another environment. Each new environment comes with its own default managed AI gateway, and you can add more gateways to it.

**Self-hosted gateways** run on your own infrastructure. Use [AI Gateway 1.2.0](https://wso2.com/api-platform/docs/ai-gateway/next/quick-start-guide/), then connect that runtime to AI Workspace so you can govern it from this console.

### Create an environment

1. Sign in to AI Workspace and open your organization.
2. In the left navigation menu, click **Environments**.
3. Click **Create**.
4. Enter a **Name**. Use lowercase letters, numbers, and hyphens. The name cannot be changed later.
5. Select **Critical environment** when the environment is for production-grade deployments. Critical environments require greater care.
6. Click **Create**.

Setting up the environment can take a few minutes. When it is ready, it has its own default managed AI gateway. Open **AI Gateways** to use that gateway or to add more.

{/* Screenshot: Environments list with Create. File: static/img/cloud/ai-workspace/ai-gateway/environments.png */}

## View AI gateways

1. Sign in to AI Workspace and open your organization.
2. In the left navigation menu, click **AI Gateways**.

The **Gateways** page lists the gateways in the organization. Use **Search Gateways...** to filter the list.

| Column | Description |
|---|---|
| **Name** | The gateway name. The gateway marked **Default** is the default gateway for its environment. |
| **Description** | A short description. The gateway provided with an environment is described as a managed AI gateway. |
| **Type** | The gateway type, such as **AI Gateway**. |
| **Status** | The current status, such as **Active**. |
| **Environment** | The environment the gateway belongs to, such as **development**. |
| **Actions** | Edit, configure, and delete the gateway. |

{/* Screenshot: AI Gateways list with the default managed gateway. File: static/img/cloud/ai-workspace/ai-gateway/list.png */}

## Create a managed gateway

1. Sign in to AI Workspace and open your organization.
2. In the left navigation menu, click **AI Gateways**.
3. Click **Add Gateway**.

   When the organization has no gateways, the page displays **No available gateways** and **Add Gateway**.

4. Provide the following details:

   | Field | Description |
   |---|---|
   | **Name** | Required. The gateway handle is derived from this name and cannot be changed later. As you type, the form shows the handle. |
   | **Description** | Optional. |
   | **Environment** | Required. The environment that will run this gateway. |
   | **Default gateway for this environment** | The first AI gateway in an environment is the default, and this switch stays on. When the environment already has an AI gateway, turn the switch on to make this gateway the default. |

5. Click **Add Gateway**.

{/* Screenshot: Add Gateway form with name, environment, and the default switch. File: static/img/cloud/ai-workspace/ai-gateway/add-gateway.png */}

## Create a self-hosted gateway

Install and start **AI Gateway 1.2.0** on your own infrastructure, then connect it to AI Workspace. The [AI Gateway Quick Start Guide](https://wso2.com/api-platform/docs/ai-gateway/next/quick-start-guide/) uses version `1.2.0` and walks through a first LLM request. This section covers starting that runtime.

Use a Docker-compatible container runtime:

- Docker Desktop (Windows / macOS)
- Podman Desktop or Podman (Windows / macOS / Linux)
- Rancher Desktop (Windows / macOS)
- Colima (macOS)
- Docker Engine and the Compose plugin (Linux)

The commands below use `docker compose`. If you use another Compose-compatible runtime, use the equivalent commands. On Windows, the PowerShell examples require PowerShell 7.3 or later.

<Tabs>
<TabItem value="linux-macos" label="Linux / macOS">

```bash
curl -fL -o wso2apip-ai-gateway-1.2.0.zip https://github.com/wso2/api-platform/releases/download/ai-gateway/v1.2.0/wso2apip-ai-gateway-1.2.0.zip
unzip wso2apip-ai-gateway-1.2.0.zip
cd wso2apip-ai-gateway-1.2.0/
./scripts/setup.sh
docker compose up
```

`setup.sh` creates the AES-256 at-rest encryption key, the router HTTPS listener certificate, `api-platform.env`, and the gateway-controller admin credentials. It prints the admin password once. Copy that password.

</TabItem>
<TabItem value="windows" label="Windows (PowerShell)">

```powershell
Invoke-WebRequest -Uri https://github.com/wso2/api-platform/releases/download/ai-gateway/v1.2.0/wso2apip-ai-gateway-1.2.0.zip -OutFile wso2apip-ai-gateway-1.2.0.zip
Expand-Archive -Path wso2apip-ai-gateway-1.2.0.zip -DestinationPath .
Set-Location wso2apip-ai-gateway-1.2.0
pwsh -ExecutionPolicy Bypass -File .\scripts\setup.ps1
docker compose up
```

`setup.ps1` creates the same local configuration as `setup.sh`, including `api-platform.env`, and prints the admin password once. Copy that password.

</TabItem>
</Tabs>

If `docker compose up` fails because port `8080`, `8443`, `9090`, or `9094` is already in use, follow the port guidance in the [quick start guide](https://wso2.com/api-platform/docs/ai-gateway/next/quick-start-guide/).

To govern this runtime from AI Workspace, connect it to the control plane. [Connect the gateway to AI Workspace](https://wso2.com/api-platform/docs/ai-gateway/next/ai-workspace/connect-the-gateway/) covers the registration token and how to give that token and the AI Workspace address to the runtime.

## Edit a gateway

1. On the **Gateways** page, click the edit icon for the gateway.
2. Update the **Name** or **Description**. The **Environment** cannot be changed.
3. **Default gateway for this environment** stays on when this gateway is already the default.
4. Click **Save Changes**.

{/* Screenshot: Edit Gateway with the environment field disabled. File: static/img/cloud/ai-workspace/ai-gateway/edit-gateway.png */}

**Configure** opens **Gateway Configuration** for that gateway. You can change runtime settings such as log levels, rate limits, and replicas, then click **Save**.

## Delete a gateway

1. On the **Gateways** page, click the delete icon for the gateway.
2. In **Delete Gateway**, confirm that you want to delete the named gateway.
3. Click **Delete**. Click **Cancel** to keep the gateway.

:::warning
Deleting a gateway is permanent.
:::

## Next steps

- [Configure and consume an LLM provider](../llm-providers/configure-and-consume-provider.md)
- [Configure an App LLM proxy](../app-llm-proxies/configure-proxy.md)
