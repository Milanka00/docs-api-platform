---
title: "Configure and Consume an LLM Provider"
description: "Add an LLM provider in AI Workspace, configure authentication and guardrails, deploy it to an AI Gateway, and consume it."
---

LLM Providers allow you to connect AI service platforms like OpenAI, Anthropic, and others to the AI Workspace. Once configured, providers can be deployed and used directly through the managed gateway.

## Prerequisites

- Access to [AI Workspace](https://ai-workspace.bijira.dev/) with the **Admin** role.
- At least one [AI Gateway created and set up](../ai-gateway/setting-up.md) in AI Workspace.
- API credentials for your LLM provider, such as an API key or access token.

## Add and Deploy a Provider

1. Sign in to [AI Workspace](https://ai-workspace.bijira.dev/).
2. In the left navigation menu, under **LLM**, click **LLM Providers**.
3. Click **Create Provider**.

    ![LLM Providers page showing Create your first LLM Provider with a Create Provider button](/img/cloud/ai-gateway/ai-workspace/llm-provider/no-llm-providers.png)

4. On the **Add LLM Provider** page, select your provider. The available providers are Anthropic, AWS Bedrock, Azure AI Foundry, Azure OpenAI, Gemini, Mistral, and OpenAI.

    ![Add LLM Provider page with tiles for Anthropic, AWS Bedrock, Azure AI Foundry, Azure OpenAI, Gemini, Mistral, and OpenAI](/img/cloud/ai-gateway/ai-workspace/llm-provider/select-llm-provider-type.png)

    The provider configuration form appears below the provider list on the same page. The selected provider is highlighted, along with its template version.

    ![Provider form for OpenAI v1.0 showing Name, Version, Description, Context, and API Key fields, and a Guardrails & Policies section with the llm-cost policy added](/img/cloud/ai-gateway/ai-workspace/llm-provider/llm-provider-details.png)

5. Enter the basic information of the provider.

    - **Name** (required): Enter a unique name for the provider, for example, `WSO2 OpenAI Provider`.
    - **Version** (required): The version is pre-filled, for example, `v1.0`. You can change it if needed.
    - **Description**: Optionally, enter a description of the provider's purpose, for example, `Primary OpenAI provider`.
    - **Context**: Enter the base context path for the provider. The default is `/`.

6. Enter the authentication details. The fields depend on the provider you selected.

    - **Upstream URL:** The endpoint of the provider. For some providers, it is pre-configured. For others, you must enter it.
    - **API Key** (optional): The API key or token that AI Workspace uses to call the provider. Click the eye icon in the field to show or hide the value.

    | Provider | Upstream URL | API Key |
    |:---------|:-------------|:--------|
    | Anthropic | Pre-configured | Your Anthropic API key, which starts with `sk-ant-` |
    | AWS Bedrock | **Required.** The Amazon Bedrock Runtime endpoint for your AWS Region, for example, `https://bedrock-runtime.us-east-1.amazonaws.com` | Your Amazon Bedrock API key |
    | Azure AI Foundry | **Required.** Your Azure AI Foundry endpoint URL | Your Azure AI Foundry API key |
    | Azure OpenAI | **Required.** Your Azure OpenAI resource endpoint, for example, `https://your-resource.openai.azure.com/` | Your Azure OpenAI API key |
    | Gemini | Pre-configured | Your Google AI API key |
    | Mistral | Pre-configured | Your Mistral AI API key |
    | OpenAI | Pre-configured | Your OpenAI API key, which starts with `sk-proj-` or `sk-` |

7. Optionally, add guardrails and policies that apply to all requests to the provider. The `llm-cost` policy is added by default and can't be removed.

    1. In the **Guardrails & Policies** section, click **Add**. The **Guardrails** panel opens.
    2. Find the guardrail or policy you want to add. You can select one or more categories from the **Categories** list, or type a name in **Search guardrails**. Each guardrail shows its publisher and version.

        ![Guardrails panel listing guardrails such as API Key Auth, AWS Authentication, and AWS Bedrock Guardrail with their publisher and version, filtered by the AI category, and the Guardrails & Policies section showing the llm-cost and api-key-auth policies](/img/cloud/ai-gateway/ai-workspace/llm-provider/add-guardrails.png)

    3. Click the guardrail, configure its advanced options, and add it. The guardrail appears in the **Guardrails & Policies** section, for example, `api-key-auth (1.2)`.
    4. To add more guardrails or policies, repeat these steps.
    5. Drag the guardrails and policies in the section to set the order in which they run.

    To remove a guardrail or policy that you added, click **×** next to it in the **Guardrails & Policies** section.

    :::tip
    To view the details and configuration of each guardrail, click **Policy Hub** in the **Guardrails** panel, or see the [Policy Hub](https://wso2.com/api-platform/policy-hub/).
    :::

8. Click **Add Provider**.

    The provider is created, and its details page opens. A banner at the top of the page shows the next steps to configure and expose the provider: **Add Guardrails**, **Deploy to Gateway**, and **Consume LLM Provider**. The provider also appears in the **LLM Providers** list.

    ![Details page of the WSO2 OpenAI Provider with a success banner showing the Add Guardrails, Deploy to Gateway, and Consume LLM Provider steps, the Deploy to Gateway and Create App LLM Proxy buttons, and the Overview, Connection, Access Control, Security, Rate Limiting, Guardrails & Policies, and Models tabs](/img/cloud/ai-gateway/ai-workspace/llm-provider/llm-provider-created.png)

9. Deploy the provider to a gateway.

    :::warning[Required Step]
    The provider can't be used until it is deployed to at least one gateway.
    :::

    1. Click **Deploy to Gateway** in the top right corner.
    2. Click **Deploy** on one or more gateways from the available list.
    3. Wait for the deployment to complete. The status changes to **Deployed**.

## Consume the Provider

Once the provider is deployed, the provider details page shows the invoke URL on the left and a **Get Started** panel on the right.

1. Get the invoke URL. Select a gateway from the **Gateways** dropdown to see the base URL for accessing this provider through that gateway.
2. Generate an API key to authenticate requests to the deployed gateway.

    1. Click **Generate API Key** in the **Get Started** panel.
    2. Copy and save your API key immediately.

    :::danger[Important]
    API keys are only displayed once. Store it in a secure location immediately. You will not be able to retrieve it again.
    :::

3. Check where the provider is deployed. The **Deployed Gateways** section lists all gateways this provider is deployed to, along with the host address and deployment status.

## Next Steps

- [Configure App LLM Proxy](../app-llm-proxies/overview.md) - Configure and deploy a specialized proxy endpoint for a Gen AI application or agent using your provider
- [Manage an LLM Provider](./manage-provider.md) - Configure access control, security, rate limiting, and more
