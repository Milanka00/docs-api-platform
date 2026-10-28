---
title: "Overview"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

LLM Providers are integrations with AI service platforms that offer language models. By configuring providers in the AI Workspace, you can

- **Centralize credential management**: Store API keys and authentication details securely
- **Connect multiple providers**: Integrate with leading LLM services
- **Monitor provider status**: Track availability and health of connected services
- **Simplify configuration**: Use providers across multiple proxies without duplicating credentials

## Supported Providers

API Platform AI Workspace supports the following LLM providers:

| Provider | Description | Learn More |
|:---------|:------------|:----------|
| <img src={require('@site/static/img/cloud/ai-gateway/llm-providers/openai.png').default} alt="OpenAI" style={{width: '32px', verticalAlign: 'middle'}} /> **OpenAI** | Access GPT-4, GPT-3.5, and other OpenAI models | [Documentation](https://developers.openai.com/api/docs) |
| <img src={require('@site/static/img/cloud/ai-gateway/llm-providers/anthropic.png').default} alt="Anthropic" style={{width: '32px', verticalAlign: 'middle'}} /> **Anthropic** | Integrate Claude models for advanced AI capabilities | [Documentation](https://docs.anthropic.com/) |
| <img src={require('@site/static/img/cloud/ai-gateway/llm-providers/azure-openai.png').default} alt="Azure OpenAI" style={{width: '32px', verticalAlign: 'middle'}} /> **Azure OpenAI** | Use OpenAI models hosted on Microsoft Azure | [Documentation](https://azure.microsoft.com/products/ai-services/openai-service) |
| <img src={require('@site/static/img/cloud/ai-gateway/llm-providers/azure-ai-foundry.png').default} alt="Azure AI Foundry" style={{width: '32px', verticalAlign: 'middle'}} /> **Azure AI Foundry** | Access models through Azure AI Foundry platform | [Documentation](https://azure.microsoft.com/products/ai-studio) |
| <img src={useBaseUrl('/img/cloud/ai-gateway/llm-providers/gemini.svg')} alt="Gemini" style={{width: '32px', verticalAlign: 'middle'}} /> **Gemini** | Integrate Google's Gemini language models | [Documentation](https://ai.google.dev/gemini-api) |
| <img src={require('@site/static/img/cloud/ai-gateway/llm-providers/mistral.png').default} alt="Mistral AI" style={{width: '32px', verticalAlign: 'middle'}} /> **Mistral AI** | Access Mistral's open and commercial models | [Documentation](https://mistral.ai/) |
| <img src={require('@site/static/img/cloud/ai-gateway/llm-providers/aws-bedrock.png').default} alt="AWS Bedrock" style={{width: '32px', verticalAlign: 'middle'}} /> **AWS Bedrock** | Connect to Amazon Bedrock's managed AI service | [Documentation](https://aws.amazon.com/bedrock/) |

[//]: # (## Quick Start)

[//]: # ()
[//]: # (To start using LLM Providers:)

[//]: # ()
[//]: # (1. Navigate to AI Workspace in your API Platform dashboard)

[//]: # (2. Select "LLM Providers" from the menu)

[//]: # (3. Click "+ Add New Provider" and choose your provider type)

[//]: # (4. Enter your credentials and configure settings)

[//]: # (5. Save and test the connection)

## Next Steps

- [Configure and Consume an LLM Provider](./configure-and-consume-provider.md) - Add a provider, configure its credentials and guardrails, deploy it to an AI Gateway, and consume it
- [Manage an LLM Provider](./manage-provider.md) - Update the connection, access control, security, rate limiting, guardrails, and models of a deployed provider
