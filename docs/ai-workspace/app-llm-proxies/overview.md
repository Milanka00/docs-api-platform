---
title: "Overview"
description: "Create a project-level App LLM Proxy that routes application traffic to an LLM provider."
---

# App LLM Proxies Overview

## Why Use a Proxy on Top of a Provider?

An LLM Provider connects API Platform to an upstream LLM service and can be invoked directly. An App LLM Proxy provides an optional, application-facing endpoint when you need controls tailored to a specific Gen AI application or agent.

The main benefit is **specialization and isolation**. You can invoke a provider directly or use it as the backend for multiple App LLM Proxies. For example, you might create one proxy for a customer-facing chatbot with strict guardrails, another for an internal agent with different settings, and a third for a workflow-specific Gen AI assistant.

Each proxy is configured independently, allowing you to tailor its authentication, guardrails, exposed resources, and traffic controls to the needs of the application. You can also change the underlying provider without requiring changes to the applications or agents that call the proxy.

## What You Can Do with an App LLM Proxy

### Expose a controlled API endpoint

Provide a stable URL for your Gen AI application or agent to invoke. You can control which resources (API paths) the proxy exposes and enable or disable them without changing the upstream provider.

### Add application-specific controls when needed

If provider-level controls meet your requirements, you can invoke the provider directly. Use an App LLM Proxy when a specific application or agent requires its own authentication, guardrails, exposed resources, or traffic controls.

### Enforce authentication

Require applications or agents to provide an API key before their requests are forwarded to the LLM. API keys are generated for each proxy and expire after 90 days.

### Apply guardrails

Apply content safety, PII masking, and semantic caching policies across all endpoints or target specific resources.

### Create specialized endpoints for applications and agents

Create separate proxies for different Gen AI applications, agents, teams, or environments, such as development, staging, and production. Each proxy can have its own rate limits, guardrails, access keys, and exposed resources while sharing the same provider backend.

### Switch providers without changing clients

Applications and agents invoke the proxy URL rather than the provider directly. This allows you to switch the underlying LLM Provider, for example, from OpenAI to Azure OpenAI, without changing the client applications, provided the proxy preserves the expected request and response contract.

### Route requests to multiple providers through one endpoint

Configure a proxy to use multiple LLM Providers. Applications can send requests to a single URL and select a provider for each request. The proxy translates between the request format it accepts and the format required by the selected provider.

## Next steps

- [Configure an App LLM Proxy](./configure-proxy.md) to create and deploy a proxy.
- [Manage an App LLM Proxy](./manage-proxy.md) to manage resources, providers, security, guardrails, and deletion.