---
title: "Overview"
description: "Expose an A2A agent through an Agent Proxy in AI Workspace."
---

# Agent Proxies Overview

## Why use an Agent Proxy?

An Agent Proxy places an Agent2Agent (A2A) agent behind AI Workspace. Clients call the proxy on your gateway instead of calling the agent directly. The proxy publishes the agent's skills, tasks, and messages, and applies the policies you attach.

The main benefit is a stable, governed entry point. You can keep the agent endpoint and credentials in the workspace, expose only the transports you choose, and change guardrails or the backend connection without handing each client a new agent URL.

## What you can do with an Agent Proxy

### Expose an agent through the gateway

Create a proxy from the agent's URL. The workspace fetches the Agent Card and fills the proxy name, version, description, and target. Clients then use the gateway host and the proxy context.

### Publish the transports the agent supports

Choose which interfaces to expose. A proxy can publish **JSONRPC** and **HTTP+JSON**, each with its own path. You can edit those paths after the proxy is created.

### Serve an Agent Card

The proxy can serve a public card at a discovery path and a protected card from the GetExtendedAgentCard operation. Each card can forward the upstream card, store a card you edit, or rewrite upstream URLs to gateway URLs.

### Apply policies to agent operations

Attach policies to every A2A operation, to one operation, or only to the public Agent Card path. Drag policies to set the order in which they run.

### Keep the backend connection in the workspace

Set the agent endpoint on the proxy and choose how the proxy authenticates to the agent. Clients call the gateway. They do not need the upstream endpoint or its credentials.

## Next steps

- [Configure an Agent Proxy](./configure-proxy.md) to create, deploy, and invoke a proxy.
- [Manage an Agent Proxy](./manage-proxy.md) to update transports, the Agent Card, guardrails, and the backend connection.
