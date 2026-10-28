---
title: "Publishing APIs"
description: "Compare subscription-based and subscription-less approaches for publishing APIs deployed on the API Platform Self-Hosted Gateway."
---

After you create and deploy an API proxy to a **Self-Hosted Gateway**, you can make consumers aware of it by moving the API through the lifecycle and publishing it. Publishing updates the API lifecycle to **Published** so it can appear in the API Platform Developer Portal and be invoked according to how access is configured.

This page describes two ways to expose published APIs:

| Approach | Summary |
|----------|---------|
| [**Subscription-less APIs**](#subscription-less-apis) | Published APIs for which consumers are **not** required to subscribe to a subscription plan in the Developer Portal. |
| [**Subscription-based APIs**](#subscription-based-apis) | Published APIs that have **subscription plans** assigned; consumers choose a plan and subscribe to generate Subscription Token. |

Both approaches use the same high-level flow in the console: deploy the API to your gateway, then use **Manage** → **Lifecycle** to **Publish** the API when it is ready.

:::note
Self-hosted gateway support for creating and routing traffic to APIs follows the same REST proxy constraints described in [Getting Started with Self-Hosted Gateway](../getting-started.md). Publishing and subscription behavior on the gateway is aligned with organization-level subscription plans configuration.

:::

## Subscription-less APIs

A **subscription-less** API is a published API proxy that is **not** tied to subscription plans in the Developer Portal. API consumers do not need to select a subscription plan or subscribe through the standard subscription flow to consume the API, though you may still secure the API using other mechanisms (for example, API keys or OAuth configured on the API).

Use subscription-less publishing when you want the API to be discoverable in the Developer Portal without enforcing plan-based quotas and rules that come from Subscription plans.

### Before you begin

- The API proxy is deployed to your **Self-Hosted Gateway** and works as expected in your environments. See [Getting Started with Self-Hosted Gateway](../getting-started.md).
- You have permission to change the API lifecycle (typically **API publisher** or equivalent).

### Do not assign subscription plans

Subscription-less behavior applies when no subscription plans are active for the API:

1. Sign in to the [API Platform Console](https://console.bijira.dev/).
2. Open the project and select the API proxy.
3. In the left navigation menu, click **Manage** and then **Monetize**.
4. Ensure **Subscription Plan Status** is **disabled** (off) for all plans. For background on plans, see [Assign Subscription Plans to APIs](../../../publish-api-proxy/subscription-plans-and-billing.md).

    ![Subscription Plans page listing 3PerMin, Bronze, Gold, Silver, and Unlimited plans with all Enabled toggles turned off](/img/cloud/api-platform-gateway/subscriptions/subscription-plan-disabled.png)

If any plan is enabled for the API, consumers may be guided through subscription and plan selection for that API; that pattern is described in [Subscription-based APIs](#subscription-based-apis).

### Publish the API

1. In the left navigation menu, click **Manage** and then **Lifecycle**.

    ![Lifecycle Management page showing API in Created state with Pre-release and Publish action buttons and state transition diagram](/img/cloud/api-platform-gateway/subscriptions/lifecycle-created.png)

2. When the API is ready for external consumers, click **Publish**.
3. In the publish dialog, confirm the display name and click **Confirm**. The lifecycle state becomes **Published**.

    ![Lifecycle Management page showing API in Published state with Pre-release, Demote to Created, and Deprecate action buttons](/img/cloud/api-platform-gateway/subscriptions/lifecycle-published.png)

### Invoke the API

1. Navigate to Developer Portal by clicking **Developer Portal**.

    ![API Platform Console header showing AI Workspace and Developer Portal navigation buttons](/img/cloud/api-platform-gateway/subscriptions/navigate-devportal.png)

2. Consumers can find the API in the Developer Portal by going to **APIs**.

    ![Developer Portal API card for ReadingSelfRC NoSub v1.0 REST API with no subscription plans or Subscribe button](/img/cloud/api-platform-gateway/subscriptions/api-no-sub.png)

3. Receive the **cURL** to invoke the API by navigating to the **Documentation**.

    ![API documentation page for GET /books endpoint showing cURL sample without Subscription-Key header](/img/cloud/api-platform-gateway/subscriptions/doc-api-sub-less.png)

4. Invoke API.

    ```bash
    curl --request GET \
    --url <api-invocation-url> \
    --header 'Accept: application/json' -k
    ```

## Subscription-based APIs

A **subscription-based** API is a published API proxy that has one or more **subscription plans** assigned. Subscription plans define quotas, rate limits, and related controls at the organization level. When consumers use the API Platform Developer Portal, they choose an API, subscribe to the API with a plan, and generate Subscription Token according to your plan rules.

This model fits APIs where you need tiered access, usage limits, or clear commercial separation between consumer applications.

### Before you begin

- Organization administrators have created subscription plans. See [Create API Subscription Plans](../../../administer/creating-subscription-plans.md).
- The API proxy is deployed to your **Self-Hosted Gateway** and behaves correctly. See [Getting Started with Self-Hosted Gateway](../getting-started.md).

### Assign subscription plans to the API

1. Sign in to the [API Platform Console](https://console.bijira.dev/).
2. Select the project and the API proxy.
3. Go to **Manage** → **Monetize**.
4. Enable the **Subscription Plan Status** toggle for each plan you want to offer for this API by toggling **Enabled** field.

    ![Subscription Plans page listing 3PerMin, Bronze, Gold, Silver, and Unlimited plans with all Enabled toggles turned on](/img/cloud/api-platform-gateway/subscriptions/subscription-plan-enable.png)

For detailed steps and field behavior, see [Assign Subscription Plans to APIs](../../../publish-api-proxy/subscription-plans-and-billing.md).

### Assign Subscription Validation Policy to the API

1. Go to **Develop** → **Policies**.

    ![Policies page showing Global Policies API Level section with available policy list including API Key Auth, Basic Auth, CORS, and JWT Auth](/img/cloud/api-platform-gateway/subscriptions/policies-overview.png)

2. Select **Subscription Validation** policy.

    ![Configure Policy dialog showing Subscription Validation policy with description and Advanced Settings section](/img/cloud/api-platform-gateway/subscriptions/select-sub-val-policy.png)

3. (Optional) Configure Subscription Header/Cookie value in the policy Advanced Section.

    ![Subscription Validation Configure Policy dialog with Advanced Settings expanded showing subscriptionKeyHeader and subscriptionKeyCookie input fields](/img/cloud/api-platform-gateway/subscriptions/select-sub-val-policy-advanced.png)

4. Click **Add** to attach the policy to API level policy.

5. Click **Save** to save the API.

    ![Policies page showing Subscription Validation added to Global Policies API Level section with unsaved changes warning and Save button](/img/cloud/api-platform-gateway/subscriptions/policy-save.png)

### Deploy the API

1. Go to **Deploy** and click **Deploy**.

    ![Deploy page showing Self Local Dev GW GA gateway with Active deployment status and Deploy button](/img/cloud/api-platform-gateway/subscriptions/deploy-api.png)

### Publish the API

1. Go to **Manage** → **Lifecycle**.

    ![Lifecycle Management page showing API in Created state with Pre-release and Publish action buttons and state transition diagram](/img/cloud/api-platform-gateway/subscriptions/lifecycle-created.png)

2. Click **Publish**.
3. In the publish dialog, confirm the display name and production endpoint and click **Confirm**. The lifecycle state becomes **Published**.

    ![Lifecycle Management page showing API in Published state with Pre-release, Demote to Created, and Deprecate action buttons](/img/cloud/api-platform-gateway/subscriptions/lifecycle-published.png)

### Subscribe to the API

1. Navigate to Developer Portal by clicking **Developer Portal**.

    ![API Platform Console header showing AI Workspace and Developer Portal navigation buttons](/img/cloud/api-platform-gateway/subscriptions/navigate-devportal.png)

2. Consumers can find the API in the Developer Portal by going to **APIs**.
3. Select the API and click **Subscribe**.

    ![Developer Portal API card for Reading List v1.0 REST API showing Plans count and Subscribe button](/img/cloud/api-platform-gateway/subscriptions/select-api-to-subscribe.png)

4. Pick a Subscription plan and click **Subscribe**.

    ![Choose Your Subscription Plan dialog showing Bronze, Gold, Silver, Unlimited, and 3PerMin plans with pricing and rate limits](/img/cloud/api-platform-gateway/subscriptions/select-plan-to-subscribe.png)

5. You will receive a Subscription Token.

    ![Subscription Created dialog showing generated subscription token value and Subscription-Key usage instruction](/img/cloud/api-platform-gateway/subscriptions/recieve-sub-token.png)

### Invoke the API

1. Receive the **cURL** to invoke the API using the Subscription Token by navigating to the **Documentation**.

    ![API documentation page for GET /books endpoint showing Subscription-Key header field and cURL sample request with Subscription-Key](/img/cloud/api-platform-gateway/subscriptions/document-api.png)

2. Invoke the API.

    #### Sample Request

    ```bash
    curl --request GET \
    --url <api-invocation-url> \
    --header 'Accept: application/json' \
    --header 'Subscription-Key: <subscription-token>' -k
    ```

    #### Sample Response

    ![Terminal output of curl command returning JSON array of book objects from the reading list API](/img/cloud/api-platform-gateway/subscriptions/invoke-api.png)

## Lifecycle Management

API lifecycle management is an important aspect of API management. The API lifecycle consists of various states that an API passes through, from creation to retirement. In API Platform, there are five distinct lifecycle states: created, pre-released, published, deprecated, and retired.

By leveraging the various lifecycle states, API managers can optimize the development process and ensure that subscribers have access to the latest and most reliable APIs.

### API Lifecycle States

The following lifecycle states are applicable to APIs in API Platform:

| **API lifecycle state** | **Use case** | **Corresponding action** |
|-----------------------|------------|-----------|
| **CREATED** | The API is created but is not ready for consumption.| The API is not visible to subscribers in the Developer Portal.|
| **PRE-RELEASED** | A prototype is created for early promotion and consumer testing. You can deploy a new API or a new version of an existing API as a prototype to provide subscribers with an early implementation of the API.|The API is published to the Developer Portal as a pre-release.|
| **PUBLISHED** | The API is ready for subscribers to view and subscribe to via the Developer Portal| The API is visible in the Developer Portal and is available for subscription.|
| **DEPRECATED** | The old version of an API is moved to this state when a newer version of the API is PUBLISHED.| The API is deployed and is available to existing subscribers. New subscriptions are disabled. Existing subscribers can continue to use it as usual until the API is retired.|
| **RETIRED** | The API is no longer in use when it is in this state.| The API is unpublished and deleted from the Developer Portal.|

### Manage the Lifecycle of an API

To change the lifecycle state of an API via the API Platform Console, follow the instructions given below:

:::tip
 You must have publishing privileges to manage the lifecycle states of a component.

:::

1. Sign in to the [API Platform Console](https://console.bijira.dev/).
2. Select the project and the API that you want to change lifecycle.
3. In the left navigation menu, click **Manage**, and then click **Lifecycle**.
4. In the **Lifecycle Management** pane, you will see the lifecycle state transition diagram indicating the current lifecycle state of the component. Just above the lifecycle state transition diagram, The possible lifecycle states you can apply to the component are displayed just above the lifecycle state transition diagram. Click on a required lifecycle state to apply it to the component. For example, if a component is in the **Created** state, you can click either **Pre-release** or **Publish**.

    ![Lifecycle Management page showing API in Published state with Pre-release, Demote to Created, and Deprecate action buttons and state transition diagram](/img/cloud/develop-api-proxy/lifecycle-management.png)

## Related documentation

- [Getting Started with Self-Hosted Gateway](../getting-started.md): Create the gateway, add an API proxy, and deploy
- [Assign Subscription Plans to APIs](../../../publish-api-proxy/subscription-plans-and-billing.md): Enable subscription plans on an API
- [Create API Subscription Plans](../../../administer/creating-subscription-plans.md): Define plans at organization level
