---
title: "Gen AI Applications"
description: "Group API keys under a named GenAI application for application-level usage visibility, analytics, and governance."
---

GenAI Applications let you represent a real AI application inside the AI Workspace and associate existing API keys with it. This gives you application-level visibility and control instead of tracking usage only at the individual key level.

Without GenAI Applications, usage is tied only to the API keys generated for LLM Providers or App LLM Proxies. That makes it difficult to understand which application is consuming models, tokens, and cost, especially when multiple developers generate keys for the same project.

With GenAI Applications, you can

- group API keys under a named application
- view usage and analytics at the application level
- improve governance and accountability for shared GenAI workloads
- prepare for application-level limits and controls

## When to Use GenAI Applications

Use a GenAI Application when

- multiple developers work on the same AI application
- the application uses more than one API key
- you want analytics grouped by application instead of by key only
- platform teams need clearer visibility into which applications are driving usage

Examples include customer support copilots, internal knowledge assistants, document analysis apps, or workflow-specific AI agents.

## How It Works

The typical flow is,

1. Create a GenAI Application in AI Workspace.
2. Associate the LLM Providers and App LLM Proxies that the application uses.
3. Associate the API keys that the application uses with those providers and proxies.
4. Invoke the gateway using those keys.
5. View analytics and usage for that application in Insights.

The same application can have multiple API keys associated with it. This is useful when different developers, environments, or services within the same project need separate keys while still rolling up usage to one application.

## Prerequisites

- At least one configured [LLM Provider](./llm-providers/overview.md) or [App LLM Proxy](./app-llm-proxies/overview.md)
- At least one API key generated for the provider or proxy
- Access to the AI Workspace project in which you want to create the GenAI Application

## Create a GenAI Application

1. Sign in to [AI Workspace](https://ai-workspace.bijira.dev/), and select the project from the top navigation.
2. In the left navigation menu, click **GenAI Applications**.
3. Click **Create Application**.

    ![GenAI Applications page showing Create your first GenAI Application with a Create Application button](/img/cloud/ai-gateway/ai-workspace/gen-ai-applications/no-applications.png)

4. On the **Create GenAI Application** page, enter the following details.

    - **Name**: A name for the application, for example, `Documentation Assistant`.
    - **Description**: Optionally, a description of the application's purpose.

    ![Create GenAI Application page with the name Documentation Assistant, a description, and the Create button](/img/cloud/ai-gateway/ai-workspace/gen-ai-applications/create-application.png)

5. Click **Create**.

The application is created in the current project, and its details page opens. The **Associated GenAI Resources** section is empty until you associate LLM Providers or App LLM Proxies with the application.

![Details page of the Documentation Assistant application showing No Associations under Associated GenAI Resources, with Add LLM Provider and Add LLM Proxy buttons](/img/cloud/ai-gateway/ai-workspace/gen-ai-applications/no-associations.png)

## Associate GenAI Resources

In the **Associated GenAI Resources** section, you manage the LLM Providers, App LLM Proxies, and API keys that the application uses.

1. On the application details page, click **Add LLM Provider** or **Add LLM Proxy**.
2. Select the provider or proxy that the application uses, and add it.

    The provider or proxy appears in the list with its **Name**, **Version**, and **Type**, for example, **WSO2 OpenAI Provider**, `v1.0`, **LLM Provider**.

    ![Associated GenAI Resources list showing the WSO2 OpenAI Provider v1.0 of type LLM Provider, with add and delete icons under Actions, and the Add LLM Provider and Add LLM Proxy buttons](/img/cloud/ai-gateway/ai-workspace/gen-ai-applications/associated-resources.png)

3. To associate the API keys that the application uses with a provider or proxy, click the add (**+**) icon under **Actions** in its row, and select the keys.

Only existing keys are associated. This doesn't create new keys. It links previously generated keys to the application so that usage is attributed correctly.

## View and Manage Associations

- To view the API keys associated with a provider or proxy, click the arrow next to its name to expand the row.
- To find a provider or proxy, type its name in **Search associations**.
- To remove a provider or proxy from the application, click the delete (trash) icon in its row.
- To edit the name or description of the application, click the edit (pencil) icon next to its name.

Removing an association only detaches the provider, proxy, or key from the GenAI Application. It doesn't delete the provider, proxy, or key.

## Insights for GenAI Applications

Once an associated key is used to invoke the gateway, the gateway can identify the owning GenAI Application and publish analytics accordingly.

This lets you analyze usage by application, including

- request volume
- token consumption
- latency trends
- error patterns
- cost and resource usage by application

This is especially useful for teams that need to understand which GenAI applications are driving traffic and spend.

See [Insights](./monitoring-and-analytics.md) for more on the analytics experience.

## Best Practices

- Create one GenAI Application per real application or agent workload, not per developer.
- Associate all keys used by the same application so analytics stay complete.
- Use clear names such as `Docs Assistant`, `Support Copilot`, or `Invoice Analyzer`.
- Review associations periodically and remove keys that are no longer in use.
- Combine GenAI Applications with App LLM Proxies when an application also needs its own authentication, guardrails, or routing behavior.

## Related

- [App LLM Proxies](./app-llm-proxies/overview.md) - Create application-specific endpoints and controls
- [Insights](./monitoring-and-analytics.md) - Analyze usage by application
