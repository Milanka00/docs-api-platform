---
title: "Gateways"
description: "Run your API proxies on WSO2-managed gateways or on a Self-Hosted Gateway in your own infrastructure, and discover APIs from third-party gateways."
---

A gateway is the runtime that receives API traffic, applies your policies, and routes requests to your backends. Every request that a consumer sends to your API proxy passes through a gateway, which enforces security, rate limits, and other policies before forwarding the request.

You deploy your API proxies to a gateway, and manage all your gateways centrally from the API Platform Console, regardless of where they run.

## Gateway Options

| Gateway | Use it to | Guide |
|:--------|:----------|:------|
| **WSO2-managed gateway** | Run your API proxies on gateways that WSO2 provisions and operates. No setup is required. | |
| **Self-Hosted Gateway** | Run your API proxies on your own infrastructure, such as a virtual machine, Docker, or Kubernetes, to keep API traffic within your network or close to your backends. | [Quick Start Guide](./hybrid-gateways/api-gateway/getting-started.md) |
| **Third-party gateway** | Discover APIs that already run on a gateway from another vendor, instead of moving them to an API Platform gateway. | [AWS API Gateway](./hybrid-gateways/api-gateway/third-party-gateways/api-discovery-aws.md) |

Your organization has a WSO2-managed gateway by default, so you can deploy and test API proxies without setting up any infrastructure. Add a Self-Hosted Gateway when you need to control where your API traffic runs.

## Gateways and Environments

Each gateway belongs to one environment, such as development or production, and you select the environment when you add the gateway. An environment can have more than one gateway. You can mark one of them as the default gateway for the environment.

## View Your Gateways

1. Sign in to the [API Platform Console](https://console.bijira.dev).
2. In the left navigation menu, click **Gateways**.

The **Gateways** page lists all the gateways in your organization, including the WSO2-managed gateway and any Self-Hosted Gateways you have added. Click a gateway to view its details.

To add a gateway that runs on your own infrastructure, see the [Self-Hosted Gateway Quick Start Guide](./hybrid-gateways/api-gateway/getting-started.md).
