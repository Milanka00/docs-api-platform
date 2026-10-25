---
title: "Tutorials"
---

## Expose a Service as a Managed API

API Platform simplifies securely exposing existing services as managed APIs. It also allows you to manage all aspects of an API's lifecycle, security, throttling, and governance, so you can focus on service development.

In this tutorial, you will use API Platform to expose a service as an API proxy and publish it to the API Platform Developer Portal for application developers to consume.

### Prerequisites

- If you're signing in to the API Platform Console for the first time, create an organization:
    1. Go to [API Platform Console](https://console.bijira.dev/) and sign in using your preferred method.
    2. Enter a unique organization name. For example, `Stark Industries`.
    3. Read and accept the privacy policy and terms of use.
    4. Click **Create**.

  This creates the organization and opens the **Project Home** page of the default project created for you.

### Step 1: Create an API proxy

You can create an API proxy by following several methods. In this guide, you will create an API proxy by providing a sample URL.

1. Go to [API Platform Console](https://console.bijira.dev/) and sign in. This opens the project home page.
2. If you already have one or more API Proxies in your project, click **+ Create**. Otherwise, proceed to the next step.
3. Click the **Import API Proxy** card.
4. In the **Create API Proxy from Contract** pane, click **Try with sample URL**.
5. Click **Next**.
6. Update the populated API proxy details with the following values:

    :::info
    The **Identifier** field must be unique and cannot be changed after creation.

    | **Field**      | **Value**                                   |
       |----------------|---------------------------------------------|
    | **Name**| `Reading List API`                          |
    | **Identifier**      | `reading-list-api-qs`                          |
    | **Base Path**    | `/apim-p/reading-list-api-qs/v1.0`                                    |
    | **Version**    | `1.0`                                       |
    | **Target**     | `https://apis.bijira.dev/samples/reading-list-api-service/v1.0`       |
    | **Access Mode** | **External**: API is publicly accessible    |
    :::

7. Click **Create**. This creates the component and takes you to the **Overview** page of the component.

To see the resources of the API proxy, go to the left navigation menu, click **Develop**, and then click **Resources**.

### Step 2: Deploy the API proxy

By default, the API will be automatically deployed to the development environment. But you can manually deploy it to the development as well with required changes. To do So, follow these steps:

1. In the left navigation menu, click **Deploy**.
2. In the **Build Area** card, click **Deploy**.

Additionally, you can click the down arrow next to **Deploy** and select **Configure and Deploy** to make any necessary changes before deploying the API proxy.

Once the deployment is complete, the **Development** card indicates the **Deployment Status** as **Active**.

Now you are ready to test the API proxy.

### Step 3: Test the API proxy

You can test the API proxy in the development environment before promoting it to production. API Platform provides the following options to test your API proxy:

- Console
- cURL
- API Chat

In this guide, you will use the OpenAPI Console.

1. In the left navigation menu, click **Test** and then click **Console**.

    :::tip
    Since the API proxy is secured when deployed, you will need a key to invoke it. API Platform automatically generates a key when you navigate to the **Console** pane.
    :::

2. In the **Console** pane, select **Development** from the environment drop-down list.
3. Expand the `GET /books` method and click **Try it Out** to test it.
4. Click **Execute**. You will see a response similar to the following:

   ![OpenAPI Console showing HTTP 200 response for the GET /books test request](/img/cloud/tutorials/api-proxy-response.png)

   This indicates that your API proxy is working as expected.

### Step 4: Promote the API proxy to production

Once you verify that the API proxy is working as expected in the development environment, you can promote it to production.

1. In the left navigation menu, click **Deploy**.
2. In the **Development** card, click **Promote**.
3. In the **Configure & Deploy** pane, click **Next**.

    :::tip
    If you want to specify a different endpoint for your production environment, you can make the change in the **Configure & Deploy** pane.

    The **Production** card indicates the **Deployment Status** as **Active** when the API proxy is successfully deployed to production.

    If you want to verify that the API proxy is working as expected in production, you can test the API in the production environment.
    :::

Now that your API is deployed in both development and production environments and can be invoked, the next step is to publish it so that consumers can discover and subscribe to it.

### Step 5: Publish the API proxy

1. In the left navigation menu, click **Develop** and then click **Lifecycle**. This opens the **Lifecycle** page, where you can see the different lifecycle stages of the API. The current lifecycle stage is **Created**.
2. Click **Publish**.
3. In the **Publish API** dialog, click **Confirm** to proceed with publishing the API with the specified display name. If you want to change the display name, make the necessary changes and then click **Confirm**. This changes the API lifecycle state to **Published**.

You can observe that the API lifecycle stage has changed to **Published**. Now the API is available for consumption. API consumers can consume the API via the API Platform Developer Portal.

### Step 6: Invoke the API

To generate credentials for the published API and invoke it via the Developer Portal, follow these steps:

1. In the **Lifecycle Management** pane, click **Go to DevPortal**. This takes you to the Petstore API published to the API Platform Developer Portal.
2. Generate credentials:
    1. In the Developer Portal left navigation menu, click **Production** under **Credentials**.
    2. Click **Generate Credentials**. API Platform generates new tokens and populates the **Consumer Key** and **Consumer Secret** fields.
3. Invoke the API:
    1. In the Developer Portal left navigation menu, click **Try Out**.
    2. In the **Endpoint** list, select **Development** as the environment to try out the API.
    3. Click **Get Test Key**. This generates an access token.
    4. Expand the `GET /pet/findByStatus` operation and click **Try it out**.
    5. Select **available** as the status and click **Execute**.

Now you have successfully created, deployed, tested, and published an API proxy using API Platform.

## Secure an API with Role-Based Access Control

Role-based access control (RBAC) is a flexible and scalable approach to manage access to API resources. In this approach, each user or group is assigned a specific role that determines the permissions granted to perform operations on an API resource.

This tutorial explains how to implement RBAC using API Platform. It includes a real-world scenario with instructions to create and publish an API proxy component in API Platform and apply role-based access control.

### Scenario

An organization needs to implement a user management service to keep track of users. The service needs to perform the following operations:

- List existing users
- List a specific user
- Create new users
- Delete a user

There are two types of users in the organization:

- **Human resource manager (HR manager)**: Can perform all operations (list users, list a user, create users, and delete a user).
- **Human resource officer (HR officer)**: Can only list existing users and list a specific user.

### Implement role-based access control with API Platform

Let’s take a look at the steps to implement the scenario described above using Choreo and Asgardeo.

#### Prerequisites

- If you're signing in to the API Platform Console for the first time, create an organization:
    1. Go to [API Platform Console](https://console.bijira.dev/) and sign in using your preferred method.
    2. Enter a unique organization name. For example, `Stark Industries`.
    3. Read and accept the privacy policy and terms of use.
    4. Click **Create**.

  This creates the organization and opens the **Project Home** page of the default project created for you.

#### Step 1: Create an API proxy component and deploy it

1. Go to [API Platform Console](https://console.bijira.dev/) and sign in. This opens the project home page.
2. To create an API proxy component, follow the instructions in [Start with Endpoint](./create-api-proxy/ingress-apis/rest-apis.md).
3. In the left navigation menu, click **Policy**.
4. Click the **+** in the **API Proxy Contract** and replace the resources with following.
    - **GET** `/users`
    - **GET** `/users/{userID}`
    - **POST** `/users`
    - **DELETE** `/users/{userID}`
5. In the left navigation menu, click **Deploy**.
6. Go to the **Build Area** card and click **Configure & Deploy**.
7. In the **Configure API Access Mode** pane, select **External** to make the API publicly accessible.
8. Click **Deploy**.

#### Step 2: Apply permissions to resources and publish the API

1. On the **Deploy** page, go to the **Build Area** card and click **Security Settings**.
2. In the **Security Settings** pane, go to the **Permissions List** section and click **+ Add Permission(Scope)**.
3. Add the following permission values:
    - `get_user_list`
    - `get_user`
    - `create_user`
    - `delete_user`
4. In the **Permissions** section, assign permissions to resources as follows:

    | **Resource**             | **Permission** |
    |--------------------------|----------------|
    | **GET /users**           | `get_user_list`|
    | **GET /users/\{userID\}**  | `get_user`     |
    | **POST /users**          | `create_user`  |
    | **DELETE /users/\{userID\}**| `delete_user`  |

5. Click **Apply**.
6. Redeploy the API to apply the latest permissions:
    1. Go to the **Build Area** card and click **Configure & Deploy**.
    2. Select **External** as the access mode and click **Deploy**.
7. Promote the API to production:
    1. In the left navigation menu, click **Deploy**.
    2. Go to the **Development** card and click **Promote**.
    3. In the **Configure & Deploy** pane, click **Next** to promote the API to production.
8. Publish the API:
    1. In the left navigation menu, click **Lifecycle**.
    2. In the **Lifecycle Management** pane, click **Publish**. This changes the API status to **Published**.

Now, application developers can discover the API, subscribe to it, and invoke it.

#### Step 3: Subscribe to the published API

1. Go to the [API Developer Portal](https://devportal.choreo.dev/) and click **Applications** on the top menu.
2. Click **+Create**.
3. Enter `User Management App` as the **Application Name** and click **Create**.
4. In the Developer Portal left navigation menu, click **Production** under **Credentials**.
5. Expand **Advanced Configurations** and:
    1. Select **Code** as the grant type.
    2. Enter the hosted URL of the application as the **Callback URL**.
    3. Click **Generate Credentials**.
6. Subscribe to the API:
    1. In the Developer Portal left navigation menu, click **Subscriptions**.
    2. In the **Subscription Management** pane, click **Add APIs**.
    3. In the **Add APIs** list, go to the API you created and click **Add**.

#### Step 4: Define roles and assign them to groups

1. In the Developer Portal left navigation menu, click **Production** under **Credentials**.
2. In the **Permissions** section, click **Manage Permissions**. This takes you to the **Roles** tab of the `User Management App` application in Asgardeo.
3. Add the following roles:
    - **admin**: Assign permissions `get_user_list`, `get_user`, `create_user`, and `delete_user`.
    - **user**: Assign permissions `get_user_list` and `get_user`.
4. Create groups and assign roles:
    - **HR-Manager**: Assign the **admin** role.
    - **HR-Officer**: Assign the **user** role.

#### Step 5: Define users and assign them to groups

1. Define two users: `Cameron` and `Alex`. For instructions, see [Manage Users](https://wso2.com/asgardeo/docs/guides/users/manage-customers/#onboard-a-user) in the Asgardeo documentation.
2. Assign `Cameron` to the **HR-Manager** group and `Alex` to the **HR-Officer** group. For instructions, see [Assign Groups](https://wso2.com/asgardeo/docs/guides/users/manage-customers/#assign-groups).

#### Step 6: Obtain an access token and try out the API

1. Construct the authorization URL as follows:

    ```
    <authorize_URL>?response_type=code&client_id=<clientID>&redirect_uri=<redirect_URL>&scope=<scopes>
    ```

    - Replace `<authorize_URL>` with the **Authorize Endpoint** URL.
    - Replace `<redirect_URL>` with the **Callback URL**.
    - Replace `<scopes>` with the applicable permissions (e.g., `get_user_list get_user` for `Alex`).
    - Replace `<clientID>` with the **Consumer Key**.

2. Open the constructed URL in a web browser and sign in with `Alex`'s credentials. Click **Allow** to approve the consent.
3. Copy the code from the callback URL and use it to replace `<code>` in the following cURL command:

    ```
    curl <token_url> -d "grant_type=authorization_code&code=<code>&redirect_uri=<redirect_uri>" -H "Authorization: Basic <base64(clientId:clientSecret)>"
    ```

    - Replace `<token_url>` with the **Token Endpoint** URL.
    - Replace `<redirect_uri>` with the **Callback URL**.
    - Replace `<base64(clientId:clientSecret)>` with the Base64-encoded value of `clientId:clientSecret`.

4. Extract the access token from the response.
5. Go to the [API Developer Portal](https://devportal.choreo.dev/) and try out the API using the access token. Observe that `Alex` can only access the following resources:
    - **GET /users**
    - **GET /users/\{userID\}**

    Attempting to access other resources will result in a scope validation error.

    Similarly, if you use `Cameron`'s credentials, you can access all four resources because the token includes all required permissions.

Now you have gained hands-on experience in implementing role-based access control with Choreo and Asgardeo.
