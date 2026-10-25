---
title: "Web Socket APIs"
---

## Create a WebSocket API with Generative AI

A WebSocket API proxy operates based on the WebSocket protocol specification (RFC 6455). This protocol is designed to overcome the limitations of the traditional HTTP request-response model by establishing a single, persistent TCP connection between the client and the server.

The WebSocket connection begins with an initial handshake that leverages the HTTP Upgrade mechanism. Once established, this connection supports full-duplex communication, enabling continuous, low-latency, and simultaneous two-way data exchange. This feature makes it ideal for real-time applications such as live data feeds, gaming, and chat services.

### Prerequisites

- If you're signing in to the API Platform Console for the first time, create an organization:
    1. Go to [API Platform Console](https://console.bijira.dev/) and sign in using your preferred method.
    2. Enter a unique organization name. For example, `Stark Industries`.
    3. Read and accept the privacy policy and terms of use.
    4. Click **Create**.

  This creates the organization and opens the **Project Home** page of the default project created for you.

### Create an API Proxy

In this guide, you will create an API proxy with AI.

1. Go to [API Platform Console](https://console.bijira.dev/) and sign in. This opens the project home page.
2. If you already have one or more components in your project, click + Create. Otherwise, proceed to the next step.
3. Select **Create with GenAI**.
4. Click **Create an Chat Bot API**.
5. Click **Next**.
6. Add the Description as `Sample proxy for Chat Application`
7. Click **Create** to create the API Proxy. Wait for the setup to complete.

### Configure and Deploy the API Proxy

1. Navigate to the **Deploy** page of the API Proxy.
2. Select **Configure and Deploy** option from the **Deploy** dropdown and click **Configure and Deploy** button.
3. Select **External** as API Access Mode.
4. Click **Deploy**.

### Test the API Proxy

1. Navigate to the **Test --> Console** page of the API Proxy.
2. Use the OpenAPI Console to test the API Proxy.

### Promote the API Proxy to Production and Publish the API Proxy

1. Navigate to the **Deploy** page of the API Proxy.
2. Click **Promote**. This promotes the API proxy from the Development environment to the Production environment.
3. In the left navigation menu, click **Lifecycle** under **Develop**. This takes you to the **Lifecycle** page.
4. Click **Publish**.
5. In the **Publish API** dialog, click **Confirm** to proceed with publishing the API. If you want to change the display name, make the necessary changes and then click **Confirm**. This sets the API lifecycle state to **Published**.

## Import API Contract

A WebSocket API proxy operates based on the WebSocket protocol specification (RFC 6455). This protocol is designed to overcome the limitations of the traditional HTTP request-response model by establishing a single, persistent TCP connection between the client and the server.

The WebSocket connection begins with an initial handshake that leverages the HTTP Upgrade mechanism. Once established, this connection supports full-duplex communication, enabling continuous, low-latency, and simultaneous two-way data exchange. This feature makes it ideal for real-time applications such as live data feeds, gaming, and chat services.

In this guide, you will:

- Create a WebSocket API proxy.
- Configure and Deploy the API proxy.
- Test the API proxy to verify its functionality.

### Prerequisites

- If you're signing in to the API Platform Console for the first time, create an organization:
    1. Go to [API Platform Console](https://console.bijira.dev/) and sign in using your preferred method.
    2. Enter a unique organization name. For example, `Stark Industries`.
    3. Read and accept the privacy policy and terms of use.
    4. Click **Create**.

  This creates the organization and opens the **Project Home** page of the default project created for you.

### Create an API Proxy

In this guide, you will specify a URL to an AsyncAPI definition of a sample API to create a WebSocket API proxy.

1. Go to [API Platform Console](https://console.bijira.dev/) and sign in. This opens the project home page.
2. If you already have one or more components in your project, click + Create. Otherwise, proceed to the next step.
3. Select **Import API Contract**.
4. Select the API Type as **WebSocket**.
5. Select **URL** option and provide the following URL to import the API contract from the GitHub repository:

   ```text
   https://raw.githubusercontent.com/wso2/bijira-samples/refs/heads/main/chat-service-api/asyncapi.yaml   
   ```

5. Click **Next** and edit pre-defined values as needed. You can keep the default values for this sample.
6. Click **Create** to create the API Proxy. Wait for the setup to complete.

### Configure and Deploy the API Proxy

1. Navigate to the **Deploy** page of the API Proxy.
2. Select **Configure and Deploy** option from the **Deploy** dropdown and click it.
3. Select **External** as API Access Mode.
4. Click **Deploy**.

### Test the API Proxy

1. Navigate to the **Test --> Console** page of the API Proxy.
2. Use the Console to test the API Proxy.

### Promote the API Proxy to Production and Publish the API Proxy

1. Navigate to the **Deploy** page of the API Proxy.
2. Click **Promote**. This promotes the API proxy from the Development environment to the Production environment.
3. In the left navigation menu, click **Lifecycle** under **Develop**. This takes you to the **Lifecycle** page.
4. Click **Publish**.
5. In the **Publish API** dialog, click **Confirm** to proceed with publishing the API. If you want to change the display name, make the necessary changes and then click **Confirm**. This sets the API lifecycle state to **Published**.

### API Proxy Behavior

This Chat Service API Proxy enables clients to establish persistent connections with the server, allowing multiple users to connect simultaneously and exchange real-time messages. It also supports broadcasting messages to all users participating in the chat.

## Create API proxy from Start with Endpoint

A WebSocket API proxy operates based on the WebSocket protocol specification (RFC 6455). This protocol is designed to overcome the limitations of the traditional HTTP request-response model by establishing a single, persistent TCP connection between the client and the server.

The WebSocket connection begins with an initial handshake that leverages the HTTP Upgrade mechanism. Once established, this connection supports full-duplex communication, enabling continuous, low-latency, and simultaneous two-way data exchange. This feature makes it ideal for real-time applications such as live data feeds, gaming, and chat services.

### Prerequisites

- If you're signing in to the API Platform Console for the first time, create an organization:
    1. Go to [API Platform Console](https://console.bijira.dev/) and sign in using your preferred method.
    2. Enter a unique organization name. For example, `Stark Industries`.
    3. Read and accept the privacy policy and terms of use.
    4. Click **Create**.

  This creates the organization and opens the **Project Home** page of the default project created for you.

### Create an API Proxy

In this guide, you will create a WebSocket API proxy using an endpoint.

1. Go to [API Platform Console](https://console.bijira.dev/) and sign in. This opens the project home page.
2. If you already have one or more components in your project, click + Create. Otherwise, proceed to the next step.
3. Select **Start with Endpoint**.
4. Select the API Type as **WebSocket**.
5. Provide the following URL as the **Endpoint URL**.

   ```text
   https://samples.choreoapps.dev/company/chat-app 
   ```

5. Click **Next**.
6. Specify the following values as API proxy details:

    | **Field**       | **Value**                                  |
    |-----------------|--------------------------------------------|
    | **Name**     | `Chat App API`                            |
    | **Identifier**     | `chat-app-api`                   |
    | **Version**     | `1.0`                                      |
    | **Base Path**     | `/default/chat-app-api/v1.0`      |
    | **Description**      | `This is a sample proxy that manages a chat app.` |
    | **Access Mode**      | `External` |

7. Click **Create** to create the API Proxy. Wait for the setup to complete.

### Configure and Deploy the API Proxy

1. Navigate to the **Deploy** page of the API Proxy.
2. Select **Configure and Deploy** option from the **Deploy** dropdown and click **Configure and Deploy** button.
3. Select **External** as API Access Mode.
4. Click **Deploy**.

### Test the API Proxy

1. Navigate to the **Test --> Console** page of the API Proxy.
2. Use the OpenAPI Console to test the API Proxy.

### Promote the API Proxy to Production and Publish the API Proxy

1. Navigate to the **Deploy** page of the API Proxy.
2. Click **Promote**. This promotes the API proxy from the Development environment to the Production environment.
3. In the left navigation menu, click **Lifecycle** under **Develop**. This takes you to the **Lifecycle** page.
4. Click **Publish**.
5. In the **Publish API** dialog, click **Confirm** to proceed with publishing the API. If you want to change the display name, make the necessary changes and then click **Confirm**. This sets the API lifecycle state to **Published**.

## Create API Proxy from Scratch

A WebSocket API proxy operates based on the WebSocket protocol specification (RFC 6455). This protocol is designed to overcome the limitations of the traditional HTTP request-response model by establishing a single, persistent TCP connection between the client and the server.

The WebSocket connection begins with an initial handshake that leverages the HTTP Upgrade mechanism. Once established, this connection supports full-duplex communication, enabling continuous, low-latency, and simultaneous two-way data exchange. This feature makes it ideal for real-time applications such as live data feeds, gaming, and chat services.

### Prerequisites

- If you're signing in to the API Platform Console for the first time, create an organization:
    1. Go to [API Platform Console](https://console.bijira.dev/) and sign in using your preferred method.
    2. Enter a unique organization name. For example, `Stark Industries`.
    3. Read and accept the privacy policy and terms of use.
    4. Click **Create**.

  This creates the organization and opens the **Project Home** page of the default project created for you.

### Create an API Proxy

  In this guide, you will create a WebSocket API proxy from the Scratch.

1. Go to [API Platform Console](https://console.bijira.dev/) and sign in. This opens the project home page.
2. If you already have one or more components in your project, click + Create. Otherwise, proceed to the next step.
3. Select **Start from Scratch**.
4. Specify the following values as API proxy details:

    | **Field**       | **Value**                                  |
    |-----------------|--------------------------------------------|
    | **Name**     | `Chat App API`                          |
    | **Identifier**     | `chat-app-api`                    |
    | **Version**     | `1.0`                                      |
    | **Base Path**     | `/default/chat-app-api/v1.0`       |
    | **Description**      | `Sample proxy for chat app api` |
    | **Target**      | `https://samples.choreoapps.dev/company/chat-app` |
    | **API Type**      | `WebSocket` |
    | **Access Mode**      | `External` |

5. Click **Create** to create the API Proxy. Wait for the setup to complete.

### Configure and Deploy the API Proxy

1. Navigate to the **Deploy** page of the API Proxy.
2. Select **Configure and Deploy** option from the **Deploy** dropdown and click **Configure and Deploy** button.
3. Select **External** as API Access Mode.
4. Click **Deploy**.

### Test the API Proxy

1. Navigate to the **Test --> Console** page of the API Proxy.
2. Use the OpenAPI Console to test the API Proxy.

### Promote the API Proxy to Production and Publish the API Proxy

1. Navigate to the **Deploy** page of the API Proxy.
2. Click **Promote**. This promotes the API proxy from the Development environment to the Production environment.
3. In the left navigation menu, click **Lifecycle** under **Develop**. This takes you to the **Lifecycle** page.
4. Click **Publish**.
5. In the **Publish API** dialog, click **Confirm** to proceed with publishing the API. If you want to change the display name, make the necessary changes and then click **Confirm**. This sets the API lifecycle state to **Published**.

## WebSocket API Proxy Limitations and Quotas

### Limitations for WebSocket API Proxies

Explore key limitations in API Platform WebSocket API proxies, covering areas like maximum number of connections, maximum connection duration, and more. You can gain insights into the limitations to enhance your understanding and optimize your use of WebSocket API proxies effectively.

WebSocket API proxies have the following limitations.

| **Limitation** | **Description** | **Limit** |
|-----------------|-------------|-----------|
| **Max Connections** | The maximum number of concurrent connections allowed to the API. | <ul><li>Free Tier Users: 2-8 connections</li><li>Paid Users: 50-100 connections</li></ul>     |
| **Max Connection Duration** | The maximum duration of a connection allowed to the API. | 15 Minutes |
| **Connection idle timeout** | The maximum duration a connection can be idle before it is closed. | 4 Minutes |

:::note
If you need to increase the limits, we recommend you to set up a Private Data Plane (PDP) for your Organization.
:::
