---
title: "API Console"
---

## Test REST Endpoints via the OpenAPI Console

API Platform offers an integrated OpenAPI Console to test REST endpoints for the API proxies you create and deploy. Since API Platform secures REST APIs with OAuth 2.0 authentication, the OpenAPI Console generates test keys to help you test your APIs.

Follow these steps to test a REST endpoint using the OpenAPI Console:

1. Go to the [API Platform Console](https://console.bijira.dev/) and log in.
2. Select the project and API which you want to test.
3. Click **Test** in the left navigation menu, then select **Console**. This will open the **OpenAPI Console** pane.
4. In the **OpenAPI Console** pane, select the desired environment from the drop-down menu.

    ![OpenAPI Console pane with environment selector and expandable REST API resources for testing](/img/cloud/test-api-proxy/openapi-console.png)

5. Expand the resource you want to test.
6. Click the **Try it out** button to enable testing.
7. Provide values for any parameters, if applicable.
8. Click **Execute**. The response will be displayed under the **Responses** section.

    ![OpenAPI Console showing HTTP response body and status code after executing a test request](/img/cloud/test-api-proxy/openapi-console-response.png)

## Test WebSocket Endpoints via the WebSocket Console

API Platform offers an integrated WebSocket Console to test WebSocket endpoints for the API proxies you create and deploy. Since API Platform secures WebSocket APIs with OAuth 2.0 authentication, the WebSocket Console generates test keys to help you test your APIs.

Follow these steps to test a WebSocket endpoint using the WebSocket Console:

1. Go to the [API Platform Console](https://console.bijira.dev/) and log in.
2. Select the project and API which you want to test.
3. Click **Test** in the left navigation menu, then select **Console**. This will open the **WebSocket Console** pane.
4. In the **Console** pane, select the desired environment from the drop-down menu.

    ![WebSocket Console pane with environment selector and expandable topics for testing WebSocket endpoints](/img/cloud/test-api-proxy/websocket-console.png)

5. Expand the topic you want to test.
6. Provide values for any parameters, if applicable.
7. Click **Execute** or **Connect**. The output will be displayed under the **Output** section.
