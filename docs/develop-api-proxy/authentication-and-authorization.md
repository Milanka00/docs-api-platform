---
title: "Authentication and Authorization"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Secure API Access with Asgardeo

API security refers to the measures and practices used to protect Application Programming Interfaces (APIs) from potential threats and vulnerabilities. APIs are essential for enabling communication and data exchange between different software applications and services, making them a critical component in modern software development. However, their openness and accessibility can also make them targets for various security risks. Authentication and authorization are key aspects of API security. Authentication is ensuring that only authorized users or applications can access the API. This can involve using API keys, tokens, or more advanced authentication methods like OAuth 2.0. Authorization is controlling what authenticated users or applications are allowed to do within the API. Authorization mechanisms restrict access to specific resources and actions based on user roles or permissions. 

Organizations using Asgardeo for identity and access management (IAM) can seamlessly integrate it with API Platform as an external key manager. This guide will walk you through setting up API Platform to authenticate API invocations through Asgardeo which is configured as an external key manager.

This guide walks you through the following steps:

- Create an API in Asgardeo.
- Create an application in Asgardeo and consume the Asgardeo API.
- Create an application in API Platform and enable external key manager authentication.
- Invoke the API.

### Prerequisites

To follow this guide, you need to satisfy the following prerequisites:

- Configured Asgardeo as an external key manager 
- If you don't already have an API Proxy in API Platform, [create API Proxy](../create-api-proxy/overview.md).
- Deploy and publish your API. 

### Step 1: Create an API and an application in Asgardeo

Follow the [Asgardeo API Authorization guide](https://wso2.com/asgardeo/docs/guides/api-authorization/) to create an application and an API in Asgardeo and to enable API authorization.

:::note
- Do the following under the protocol tab:
    - Select `JWT` as the **Access Token**.
    - Select the appropriate grant types.
    - Copy the client ID and client secret of the application for future reference.
:::

### Step 2: Create an application in API Platform and enable external key manager authentication

Follow the steps below to consume the API Platform API and use an external key manager for authentication:

1. Sign in to your organization in the API Platform Developer Portal at [https://devportal.bijira.dev](https://devportal.bijira.dev).
2. Click **Applications**, and then click **+Create**.
3. Enter a name for the application. 
4. Click **Create**.
5. Click on the newly created application.
6. At the top of the application page, under **OAuth2** click **+ Add Client ID**. 
7. Enter the **Client ID** you copied in [step 1](#step-1-create-an-api-and-an-application-in-asgardeo).
8. Click **+Add**.

    :::note
    - You can only use the Client ID in one application.
    - This will be visible only to organizations where you have configured external key managers. 
    :::

9. Once successfully added, you will be shown a dialog which contains the key manager connection data.
10. You can click on the **Instructions** to view instructions to generate an access token.
11. Click **Subscribe to more APIs** button to explore the APIs and subscribe them through the application.

### Step 3: Invoke the API Platform API

1. On the API Platform Developer Portal, go to your application. 
2. On the top of the page, under **OAuth2**, click **View** to see the **Token Endpoint** URL.
3. Obtain an access token by invoking the token endpoint as follows:

    <Tabs>
    <TabItem value="format" label="Format">

    ``` sh
    curl -X POST <TOKEN_ENDPOINT> \
        -H "Content-Type: application/x-www-form-urlencoded" \
        -d "grant_type=password" \
        -d "username=<USER_NAME>" \
        -d "password=<USER_PASSWORD>" \
        -d "client_id=<ASGARDEO_APP_CLIENT_ID>" \
        -d "client_secret=<ASGARDEO_APP_CLIENT_SECRET>" \
        -d "scope=<REQUIRED_SCOPES>"
    ```

    </TabItem>
    <TabItem value="example" label="Example">

    ``` sh
    curl -X POST https://api.asgardeo.io/t/orghandle/oauth2/token \
        -H "Content-Type: application/x-www-form-urlencoded" \
        -d "grant_type=password" \
        -d "username=<USER_NAME>" \
        -d "password=<USER_PASSWORD>" \
        -d "client_id=<CLIENT_ID>" \
        -d "client_secret=<CLIENT_SECRET>" \
        -d "scope=<REQUIRED_SCOPES>"
    ```

    </TabItem>
    </Tabs>

5. Once you receive the access token, you can [test invoking the resource using cURL](../test-api-proxy/api-console.md) in API Platform.

## Secure API Access with API Platform STS

API security refers to the measures and practices used to protect Application Programming Interfaces (APIs) from potential threats and vulnerabilities. APIs are essential for enabling communication and data exchange between different software applications and services, making them a critical component in modern software development. However, their openness and accessibility can also make them targets for various security risks. Authentication and authorization are key aspects of API security. Authentication is ensuring that only authorized users or applications can access the API. This can involve using API keys, tokens, or more advanced authentication methods like OAuth 2.0. Authorization is controlling what authenticated users or applications are allowed to do within the API. Authorization mechanisms restrict access to specific resources and actions based on user roles or permissions. 

API Platform's built-in Secure Token Service (STS) can seamlessly integrate with API Platform APIs to provide authentication and authorization. This guide will walk you through setting up API Platform STS to authenticate API invocations.

This guide walks you through the following steps:

- Create an application in API Platform and generate access token.
- Invoke the API.

### Prerequisites

To follow this guide, you need to satisfy the following prerequisites:

- If you don't already have an API Proxy in API Platform, [create API Proxy](../create-api-proxy/overview.md).
- Deploy and publish your API. 

:::note
It is important to note that API Platform STS token can be only be used for client authentication. If you have a requirement for end user authentication, it is necessary to use external key manager such as Asgardeo. For more information about secure API access with Asgardeo, refer Secure API Access with Asgardeo.
:::

### Step 1: Create an application and enable API Platform STS authentication

Follow the steps below to consume the API Platform API using API Platform STS.

1. Sign in to your organization in the API Platform Developer Portal at [https://devportal.bijira.dev](https://devportal.bijira.dev).
2. Click **Applications**, and then click **+Create**.
3. Enter a name for the application. 
4. Click **Create**.
5. Click on the newly created application.
6. At the top of the application page, under **OAuth2** click **Generate**. This will generate consumer keys for the application.
7. Once successfully generated, you will be shown a dialog which contains the key manager connection data.
8. Click on the **Generate Token** button to generate an access token. Please make sure to copy the access token to use in step 2.
9. Click **Subscribe to more APIs** button to explore the APIs and subscribe them through the application.

### Step 2: Invoke the API Platform API

1. Once you receive the access token, you can [test invoking the resource using the OpenAPI console](../test-api-proxy/api-console.md) in API Platform.

## Secure API Access with Microsoft Azure Active Directory (Azure AD)

API security refers to the measures and practices used to protect Application Programming Interfaces (APIs) from potential threats and vulnerabilities. Authentication and authorization are key aspects of API security. Authentication is ensuring that only authorized users or applications can access the API. This can involve using API keys, tokens, or more advanced authentication methods like OAuth 2.0. Authorization is controlling what authenticated users or applications are allowed to do within the API. Authorization mechanisms restrict access to specific resources and actions based on user roles or permissions.

Organizations using Microsoft Azure AD for identity and access management (IAM) can seamlessly integrate it with API Platform as an external key manager. This guide will walk you through setting up API Platform to authenticate API invocations through Azure AD which is configured as an external key manager.

This guide walks you through the following steps:

- Assign scopes to an API in API Platform.
- Create an API in Azure AD.
- Create an application in Azure AD and consume the Azure API.
- Enable external key manager authentication and create an application in API Platform.
- Invoke the API with scopes.

### Prerequisites

To follow this guide, you need to satisfy the following prerequisites:

-  Configure Azure AD as an external key manager.
-  An API: If you don't already have a service in API Platform, [create an API Proxy](../create-api-proxy/overview.md).
- Deploy and publish your API.
- An Azure Active Directory account:  If you don’t already have one, set up an Azure Active Directory account at [https://azure.microsoft.com/en-gb/](https://azure.microsoft.com/en-gb/).
- Administrator rights to your API Platform organization: You need this to configure the Azure AD account in your organization.
- To create applications, the `Application Developer` role is required. [Learn more](https://learn.microsoft.com/en-us/azure/active-directory/roles/permissions-reference#application-developer)

### Step 1: Assign scopes to an API in API Platform

You can provide fine-grained access control to your API resources with Permissions (scopes) policy. Follow the steps below to assign a Permission (scope) to the resources in the API.

1. In the **Proxy Listing** pane, click on the component you want to attach scopes to.
2. In the left navigation menu, click **Develop**, then click **Policy**.
3. From the list of resources, click the Attach Policy Button for the required resource.

    ![Policy row showing document and delete action icons on the resource](/img/cloud/authentication-and-authorization/attach_policy_btn.png)

4. In the **Edit Policies** pane, click **Attach Policy** in the respective flow where you want to attach a policy.

    ![Edit Policies side pane showing Request Flow with OAuth2 policy and Attach Policy links for Response and Error flows](/img/cloud/authentication-and-authorization/policy_edit_policies.png)

5. In the Policy List pane that opens, click the **Permissions (scope)** policy. This will show the policy configurations.

    ![Configure Permissions Scopes policy panel with Permissions List input field and Add New button](/img/cloud/authentication-and-authorization/permissions_policy.png)

6. In the **Permissions List** field, add the permission value and click **Add New**.
7. To attach a permission to a resource, select permissions from the **Permissions (Scopes)** list.
8. Once the permissions are configured, click **Add** and **Save** the policies and then the API.
9. From the left navigation menu, click **Deploy** and deploy the API and promote to the production environment.
10. In the left navigation menu, click **Develop** and then **Lifecycle**.
11. Click **Publish** and continue to publish your API to the API Platform Developer Portal.

### Step 2: Create a web API on Azure AD

To enable external key manager authentication for APIs,  create an API on Azure AD that represents the API on API Platform. Follow the steps below:

1. Sign in to the Azure console.
2. Follow the [Azure guide](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#register-an-application) to create a Web API that represents your API on API Platform.
3. In the left navigation menu, under **Manage**, select **Expose an API**.
4. Add the default **Application ID URI** and click **Save and Continue**.
5. Under **Scopes defined by this API**, select **Add a scope**.
6. Enter the fully qualified name as the **scope name**.
7. Define who can consent. You can alternatively [add a scope requiring admin consent](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-configure-app-expose-web-apis#add-a-scope-requiring-admin-consent).
8. Enter appropriate values and click **Add Scope**.

For more information, refer to the Azure documentation:

- [Quickstart: Register an application with the Microsoft identity platform](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)
- [Quickstart: Configure an application to expose a web API](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-configure-app-expose-web-apis)

#### Step 2.1: Assign users to the web API

You can restrict users to the API as follows:

1. Go to your Azure AD main menu.
2. Under **Manage**,  click on **Enterprise Applications**. Alternatively, on Microsoft Entra, under **Applications**, click **Enterprise Applications**.
3. Select your API.
4. Under **Manage**, select the **Users and groups** then select **+ Add user/group**.
5. Select the users and groups and click **Select**.

For more information, refer to the Azure documentation: [Assign the app to users and groups to restrict access](Assign the app to users and groups to restrict access)

### Step 3: Create a client application on Azure AD and invoke the Azure web API

To expose the API to application developers, create an application in Azure AD. This application provides you with a client-id and client-secret that your application needs to use to invoke the API.

#### Step 3.1: Create a client application

Follow the steps below to create the application:

1. Follow the steps in [Register an application](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#register-an-application) on Azure to create an application.
2. [Configure the platform settings](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#configure-platform-settings). Enter your client application's redirect URI in the process.

    :::note
    OAuth2 Authorization Grant flow applies to Web Applications.
    :::

#### Step 3.2: Consume the Azure AD web API from the Azure AD application

Once you create the application, select the API and the scopes you want the application to consume. Follow the steps below:

1. Go to **Azure Active Directory** and then click **App registrations**.
2. Select your client application (not your web API).
3. In the left navigation menu, click **API permissions**.
4. Click  **+ Add a permission**  and select **My APIs**.
5. Select the API and the required scopes and click **Add Permissions**.
6. Once you add the scope, click on the scope and copy the scope name and keep it for future reference. Use this as the scope when you invoke the authorize and token endpoint in.

For more information, refer to the Azure documentation: [Add permissions to access your web API](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-configure-app-access-web-apis)

#### Step 3.3: Create secrets for the Azure web application

To invoke the application, provide client secrets to the consuming application. Follow the steps below to generate the credentials:

1. In the left navigation menu, click **Certificates & Secrets**.
2. Click **+ New client secret**.
2. Provide a meaningful description and the required expiration.
3. Click **Add**.
4. Copy the created `Secret ID` and `Value` for future reference.
5. In the left navigation menu, click **Overview** and open the overview page of the API.
6. Copy the `Application (client) ID` and save it for future reference.

For more information, refer to the Azure documentation: [Add a Client Secret](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#add-a-client-secret)

### Step 4: Enable external key manager authentication
1. Select Azure Active Directory (Azure AD) as an external key manager

### Step 5: Create an application in API Platform Devportal
Follow the steps below to consume the API Platform API through external key manager for authentication:

1. Sign in to the [API Platform Developer Portal](https://devportal.bijira.dev/).
2. Click **Applications** tab and then click **+Create**.
3. Enter a name for the application.
4. Click **Create** and **Subscribe** to the API you assigned scopes.

### Step 6: Invoke the API with scopes

You can now invoke the API Platform API using the authorization code grant. API Platform will authenticate the user with Azure AD and provide access to the resource.

1. On the API Platform Developer Portal, go to your application.
2. In the overview, under **OAuth2 Credentials**, click **View**.
3. Copy the **Authorize Endpoint** URL.
4. Invoke the authorization endpoint as follows:

    <Tabs>
    <TabItem value="format" label="Format">

    ``` curl
    {authorize_url}?client_id={client_id}&redirect_uri={redirect_url}&scope={scopes}&response_mode=query&response_type=code
    ```

    </TabItem>
    <TabItem value="example" label="Example">

    ```
    https://login.microsoftonline.com/dd912d48-b0be-401f-b18c-8ca89e9c0b6c/oauth2/authorize?client_id=5eb1de74-e449-4973-a620-52c4dc9157a9&redirect_uri=https://localhost:9000&scope=api://580b40b7-5513-4714-a4e0-8d4e784f7dc6/urn:taylordean:books:books_addt&response_mode=query&response_type=code
    ```

    </TabItem>
    </Tabs>
7. Review the consent in the login screens that prompt and continue.
8. After you log in, you will receive an authorization code in the URL. Copy the authorization code and use it to get an access token from Azure AD by following the next steps.
9. On the API Platform Developer Portal, go to your application.
10. In the overview, under **OAuth2 Credentials**, click **View**.
11. Copy the **Token Endpoint** URL.
12. Invoke the token endpoint as follows:

    <Tabs>
    <TabItem value="format" label="Format">

    ``` curl
    curl -X POST -H 'Content-Type: application/x-www-form-urlencoded' \
    {token_endpoint} \
    -d 'client_id={client_id}' \
    -d 'scope={scopes}' \
    -d 'code={authorization_code}' \
    -d 'redirect_uri={redirect_url}' \
    -d 'client_secret={The client_secret value you copied from the Azure Application}'
    -d 'grant_type=authorization_code' \
    ```

    </TabItem>
    <TabItem value="example" label="Example">

    ``` curl
    curl -X POST -H 'Content-Type: application/x-www-form-urlencoded' \
    https://login.microsoftonline.com/dd912d48-b0be-401f-b18c-8ca89e9c0b6c/oauth2/v2.0/token \
    -d 'client_id=5eb1de74-e449-4973-a620-52c4dc9157a9' \
    -d 'scope=api://580b40b7-5513-4714-a4e0-8d4e784f7dc6/urn:taylordean:books:books_add' \
    -d 'code=0.AXAASC…zZUzKYm18yM_5-SXz1uvRbbGYF7F32hE9zIQFRQY35haD' \
    -d 'redirect_uri=https://localhost:9000' \
    -d 'grant_type=authorization_code' \
    -d 'state=111' \
    -d 'client_secret=l4Q8Q~4WKiRXYSQZly5E6Ess.fKf__U1yJR3IaMd'
    ```

    </TabItem>
    </Tabs>

14. Once you receive the access token, you can invoke the API by specifying the scope.

## Secure API Access with an External Key Manager

API security refers to the measures and practices used to protect Application Programming Interfaces (APIs) from potential threats and vulnerabilities. APIs are essential for enabling communication and data exchange between different software applications and services, making them a critical component in modern software development. However, their openness and accessibility can also make them targets for various security risks. Authentication and authorization are key aspects of API security. Authentication is ensuring that only authorized users or applications can access the API. This can involve using API keys, tokens, or more advanced authentication methods like OAuth 2.0. Authorization is controlling what authenticated users or applications are allowed to do within the API. Authorization mechanisms restrict access to specific resources and actions based on user roles or permissions. 

This guide will walk you through setting up API Platform to authenticate API invocations through an external key manager.

This guide walks you through the following steps:

- Create an application in API Platform and enable external key manager authentication.
- Invoke the API.

### Prerequisites

To follow this guide, you need to satisfy the following prerequisites:

- Configure Custom External Key Manager.
- If you don't already have an API Proxy in API Platform, [create API Proxy](../create-api-proxy/overview.md).
- Deploy and publish your API. 
- Create an OAuth2 application in your external key manager.

### Step 1: Create an application in API Platform and enable external key manager authentication

Follow the steps below to consume the API Platform API and use an external key manager for authentication:

1. Sign in to your organization in the API Platform Developer Portal at [https://devportal.bijira.dev](https://devportal.bijira.dev).
2. Click **Applications**, and then click **+Create**.
3. Enter a name for the application. 
4. Click **Create**.
5. Click on the newly created application.
6. At the top of the application page, under **OAuth2** click **+ Add Client ID**. 
7. Enter the **Client ID** from the OAuth2 application you created in your external key manager.
8. Click **+Add**.

    :::note
    - You can only use the Client ID in one application.
    - This will be visible only to organizations where you have configured external key managers. 
    :::

9. Once successfully added, you will be shown a dialog which contains the key manager connection data.
10. You can click on the **Instructions** to view instructions to generate an access token.
11. Click **Subscribe to more APIs** button to explore the APIs and subscribe them through the application.

### Step 2: Invoke the API Platform API

1. On the API Platform Developer Portal, go to your application. 
2. On the top of the page, under **OAuth2**, click **View** to see the **Token Endpoint** URL.
3. Obtain an access token by invoking the token endpoint as follows:

    <Tabs>
    <TabItem value="format" label="Format">

    ``` sh
    curl -X POST <TOKEN_ENDPOINT> \
        -H "Content-Type: application/x-www-form-urlencoded" \
        -d "grant_type=password" \
        -d "username=<USER_NAME>" \
        -d "password=<USER_PASSWORD>" \
        -d "client_id=<OAUTH2_APP_CLIENT_ID>" \
        -d "client_secret=<OAUTH2_APP_CLIENT_SECRET>" \
        -d "scope=<REQUIRED_SCOPES>"
    ```

    </TabItem>
    </Tabs>

5. Once you receive the access token, you can [test invoking the resource using cURL](../test-api-proxy/api-console.md) in API Platform.

## Secure Communication Between the API Platform Gateway and Your Backend with OAuth2

OAuth2 is an industry-standard authorization framework that enables secure, delegated access to protected resources without exposing user credentials. By issuing scoped access tokens, OAuth2 ensures that clients can authenticate to backend services in a controlled, auditable manner.

### Configure OAuth2 to establish secure connectivity

When you need the API Platform Gateway to call your backend over OAuth2, use the Outbound OAuth2 mediation policy. This policy obtains an access token from your key manager and injects it into the outbound request..

#### Prerequisites

- **Protected Backend**: The target endpoint must enforce OAuth2 (e.g., bearer-token validation).
- **Token Endpoint**: The URL of the Key manager's token endpoint that protects your backend.
- **OAuth2 Application Credentials**: A client ID and secret for an OAuth2 application dedicated to the API Platform Gateway's outbound calls.

:::note
Only the client-credentials grant type is currently supported.
:::

#### Step 1: Configure the OAuth2 policy

To configure the OAuth2 policy, follow the steps given below:

1. Sign in to the [API Platform Console](https://console.bijira.dev/).
2. In the **Proxies** pane, click on the API proxy for which you want to configure OAuth2. For instructions on how to create an API proxy component, see [Develop an API Proxy: Step 1](../create-api-proxy/ingress-apis/rest-apis.md).
3. In the left navigation menu, click **Develop** and then click **Policies**.
4. Choose the resource you want to secure, then click **Attach Mediation Policy**.
5. In the policy picker, select **OAuth2 (1.0.0)**.
6. Enter the **Token URL**, **Client ID**, and **Client Secret**.
7. Check **Apply to all resources** to apply the same settings across every resource, then click **Add**.

:::tip
Use `${parameterName}` syntax to reference environment-specific values for the Token URL, client ID, or secret.
:::

:::note
By default, the token is set to the Authorization header. However, it is possible to set the token to any preferred header through the given input field.
:::

#### Step 2: Deploy the API

Once your OAuth2 policy is in place, deploy your API proxy so the changes take effect.

To deploy the API, follow the steps given below:

1. In the left navigation menu, click **Deploy**.
2. In the **Build Area** card, click **Configure & Deploy**.
3. Once the mediation application generation phase is complete, verify the endpoint URL populated for the environment and then click **Save & Deploy**.

Once the deployment is complete, you can [test the API](../test-api-proxy/api-console.md) to confirm that the Gateway successfully obtains and forwards OAuth2 tokens.

#### Step 3: Promote to higher environments

To promote the proxy to higher environments, use the **Promote** button.

:::note
If you used environment-specific parameters in your policy, you'll be prompted to supply each parameter during deploy and promotion steps.
:::

## Secure Communication Between the API Platform Gateway and Your Backend with Mutual TLS

To establish secure communication between the API Platform Gateway and your backend, you can configure mutual TLS.

Mutual TLS authentication involves both the client and server validating each other’s certificates before establishing a connection. The following diagram depicts this scenario:

![Six-step mutual TLS sequence diagram between Choreo Gateway and Backend Server](/img/cloud/authentication-and-authorization/mutual-ssl-authentication.png)

### Configure mutual TLS to establish secure connectivity

To establish secure connectivity between the API Platform Gateway and your backend using mutual TLS, you must add the certificate of the backend (server certificate) to API Platform and add the certificate of API Platform (client certificate) as a trusted certificate in the backend.

#### Step 1: Configure the backend certificate 

##### Prerequisites

- The endpoint must be protected with TLS. 
- The public certificate of the backend server should be extracted in PEM format and saved on the disk with the `.pem` extension.

To configure the backend certificate, follow the steps given below:

1. Sign in to the [API Platform Console](https://console.bijira.dev/).
2. In the **Proxy Listing** pane, click on the API proxy for which you want to configure TLS. For instructions on how to create an API proxy component, see [Develop an API Proxy: Step 1](../create-api-proxy/ingress-apis/rest-apis.md).
3. In the left navigation menu, click **Develop** -> **Policy** and then click **Endpoint Configuration** in Service Contract Endpoint section
4. On the **Endpoint Configuration** section, click **Configure** corresponding to the endpoint.
5. Click **Upload Endpoint Certificate**, and select the certificate file that you extracted in the prerequisites section to add it. This adds the certificate to all the environments as the default certificate for the endpoint. You can override this certificate if necessary when you deploy or promote the API.

#### Step 2: Configure mutual TLS with the backend service

There are two approaches you can take to configure mutual TLS.

 - Generate a key pair with a self-signed certificate from API Platform, download the public certificate, and subsequently add and configure it in the backend.
 - Upload your own public or private certificate pair to API Platform. Subsequently, add and configure the public certificate of this key pair in your backend.

Follow the step-by-step instructions below depending on how you want to establish mutual TLS with the backend service:

<Tabs>
<TabItem value="generate-a-key-pair-through-api-platform" label="Generate a key pair through API Platform">

When you follow these steps, API Platform generates a key pair with a self-signed certificate. You can attach this key pair to any API proxy created within the same project.

1. Sign in to the [API Platform Console](https://console.bijira.dev/).
2. In the **Proxy Listing** pane, click on the API proxy for which you want to generate a key pair. For instructions on how to create an API proxy component, see [Develop an API Proxy: Step 1](../create-api-proxy/ingress-apis/rest-apis.md).
3. In the left navigation menu, click **Develop** and then click **Endpoints**.
4. On the **Endpoints** page, click **Configure** corresponding to the endpoint.    
5. If your backend does not use a CA-signed certificate and you have not already added the backend certificate, click **Upload Endpoint Certificate** and add the backend certificate.
6. To enable mutual SSL, turn on the **Mutual SSL** toggle.
7. Click **Add Client Certificate**.
8. In the **Add Client Certificate Pair** dialog, select **Generate new key pair** and specify a value as the common name for the certificate pair. This value will be used to identify the certificate.

    ![Add Client Certificate Pair dialog with Generate new key pair selected and Common Name field](/img/cloud/authentication-and-authorization/generate-new-key-pair.png)

9. Optionally, click **Show advanced options** to expand the section and specify appropriate values for each of the fields.
10. Click **Generate**. This generates the certificate and lists it under **Existing Certificates**.
11. Click the more options icon corresponding to the certificate and then click **View and Download**.

     ![Endpoint Configuration panel showing Existing Certificates list with View and Download option in context menu](/img/cloud/authentication-and-authorization/view-and-download.png)

    This opens the certificate for you to view and download.

     ![Certificate details panel showing issuer, validity period, fingerprints, and Download button](/img/cloud/authentication-and-authorization/certificate-details.png)

12. To download the certificate in PEM format, click **Download**. You can add this certificate as a trusted certificate in the API backend server.

Now you can associate the certificate with the API and deploy the API.

</TabItem>
<TabItem value="use-your-own-certificate-pair" label="Use your own certificate pair">

Here, you can use your own public certificate and private certificate as client certificates.

1. Sign in to the [API Platform Console](https://console.bijira.dev/).
2. In the **Proxy Listing** pane, click on the API proxy for which you want to generate a key pair. For instructions on how to create an API proxy component, see [Develop an API Proxy: Step 1](../create-api-proxy/ingress-apis/rest-apis.md).
3. In the left navigation menu, click **Develop** and then click **Endpoints**.
4. On the **Endpoints** page, click **Configure** corresponding to the endpoint.  
5. If your backend does not use a CA-signed certificate and you have not already added the backend certificate, click **Upload Endpoint Certificate** and add the backend certificate.
6. To enable mutual SSL, turn on the **Mutual SSL** toggle.
7. Click **Add Client Certificate**.
8. In the **Add Client Certificate Pair** dialog, select **Use my own key pair**.

    ![Add Client Certificate Pair dialog with Use my own key pair selected, showing Private Key and Public Certificate upload fields](/img/cloud/authentication-and-authorization/use-own-key-pair.png)

9. Upload the private key and public certificate in PEM format or copy and paste the content of the private key and public certificate.
10. Click **Add**. This generates the certificate and lists it under **Existing Certificates**.
11. Click the more options icon corresponding to the certificate and then click **View and Download**.

     ![Endpoint Configuration panel showing Existing Certificates list with View and Download option in context menu](/img/cloud/authentication-and-authorization/view-and-download.png)

    This opens the certificate for you to view and download.

     ![Certificate details panel showing issuer, validity period, fingerprints, and Download button](/img/cloud/authentication-and-authorization/certificate-details.png)

12. To download the certificate in PEM format, click **Download**. You can add this certificate as a trusted certificate in the API backend server.

Now you can associate the certificate with the API and deploy the API.

</TabItem>
</Tabs>

#### Step 3: Associate the certificate with the API

To associate a certificate with the API, follow the steps given below:

1. On the **Endpoints** page, go to the **Existing Certificates** section.
2. Select the certificate you want to associate with the API.

    ![Endpoint Configuration panel showing Existing Certificates with a certificate selected and Mutual TLS toggle enabled](/img/cloud/authentication-and-authorization/associate-certificate.png)

3. Click **Save**.
   
#### Step 4: Deploy the API 

To deploy the API, follow the steps given below:

1. In the left navigation menu, click **Deploy**.
2. In the **Build Area** card, click **Configure & Deploy**.
3. Once the mediation application generation phase is complete, verify the endpoint URL populated for the environment and then click **Save & Deploy**.

Once the deployment is complete, you can [test the API](../test-api-proxy/api-console.md). 

### Change the certificate for the production environment

If the API backend changes depending on the environment, the respective certificate must be updated for each environment. 

Here, let's take a look at the steps to update the certificate for the production environment:

1. On the **Deploy** page, go to the **Development** card and click **Promote**.
2. In the **Configurations** pane that opens, click **Endpoint Configuration**. You will see all applicable certificates listed in the **Mutual TLS** list. 
3. Select the certificate applicable to the production environment and click **Promote**. This promotes the component to the production environment with the selected certificate.
