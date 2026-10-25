---
title: "REST APIs"
---

## Create API with Generative AI

An API proxy acts as an intermediary between an existing API and API Platform, intercepting all requests made to the API.It also functions as a managed API, allowing you to apply essential API management features such as security policies and rate limiting.

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
4. Click **Create an E-Learning Platform API**.
5. Click **Next**.
6. Add the Description as `Sample proxy for E-Learning Platform`
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

An API proxy acts as an intermediary between an existing API and API Platform, intercepting all requests made to the API.It also functions as a managed API, allowing you to apply essential API management features such as security policies and rate limiting.

In this guide, you will:

- Create an API proxy.
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

In this guide, you will specify a URL to an OpenAPI definition of a sample API to create an API proxy.

1. Go to [API Platform Console](https://console.bijira.dev/) and sign in. This opens the project home page.
2. If you already have one or more components in your project, click + Create. Otherwise, proceed to the next step.
3. Select **Import API Contract**.
4. Select **URL** option and provide the following URL to import the API contract from the GitHub repository:

   ```text
   https://raw.githubusercontent.com/wso2/bijira-samples/refs/heads/main/reading-list-api/openapi.yaml   
   ```

5. Click **Next** and edit pre-defined values as needed. You can keep the default values for this sample.
6. Click **Create** to create the API Proxy. Wait for the setup to complete.

### Configure and Deploy the API Proxy

1. Navigate to the **Deploy** page of the API Proxy.
2. Select **Configure and Deploy** option from the **Deploy** dropdown and click it.
3. Select **External** as API Access Mode.
4. Click **Deploy**.

### Test the API Proxy

1. Navigate to the **Test --> OpenAPI Console** page of the API Proxy.
2. Use the OpenAPI Console to test the API Proxy.

### Promote the API Proxy to Production and Publish the API Proxy

1. Navigate to the **Deploy** page of the API Proxy.
2. Click **Promote**. This promotes the API proxy from the Development environment to the Production environment.
3. In the left navigation menu, click **Lifecycle** under **Develop**. This takes you to the **Lifecycle** page.
4. Click **Publish**.
5. In the **Publish API** dialog, click **Confirm** to proceed with publishing the API. If you want to change the display name, make the necessary changes and then click **Confirm**. This sets the API lifecycle state to **Published**.

### API Proxy Behavior

The Reading List API Proxy provides the following functionality:

- **GET /books**: Returns a list of pre-defined books with a warning that changes are not persisted.
- **POST /books**: Adds a new book to the reading list (without including `id` in the request body). Returns the created book along with a warning that changes are not persisted.
- **PUT /books/\{id\}**: Updates the status of an existing book. The request body only includes the `status` to update, and the `id` is passed in the URL. Returns the updated book with a warning.
- **GET /books/\{id\}**: Retrieves a book by its `id`. If the `id` does not exist, a 404 error is returned.
- **DELETE /books/\{id\}**: Deletes a book by its `id`.

## Create an API Proxy from a GitHub Repository Source

An API proxy acts as an intermediary between an existing API and API Platform, intercepting all requests made to the API. It also functions as a managed API, allowing you to apply essential API management features such as security policies and rate limiting.

### Prerequisites

1. If you're signing in to the API Platform Console for the first time, create an organization:
    1. Go to [API Platform Console](https://console.bijira.dev/) and sign in using your preferred method.
    2. Enter a unique organization name. For example, `Stark Industries`.
    3. Read and accept the privacy policy and terms of use.
    4. Click **Create**.

    This creates the organization and opens the **Project Home** page of the default project created for you.

2. Fork the [API Platform samples repository](https://github.com/wso2/bijira-samples), which contains the [sample proxy source](https://github.com/wso2/bijira-samples/tree/main/reading-list-api).

### Configure component.yaml

When creating an API proxy from a GitHub repository, you must include a `component.yaml` configuration file in your repository. This file must be located at `.choreo/component.yaml` within your API directory.

#### Required Configuration

The `component.yaml` file for API proxies must include the following structure:

```yaml
proxy:
  type: REST
  schemaFilePath: openapi.yaml
```

#### Configuration Fields

| **Field** | **Required** | **Description** |
|-----------|--------------|-----------------|
| `proxy.type` | Required | The type of API proxy. Supported values are: <br/>- `REST` - For REST APIs (uses OpenAPI specification) <br/>- `WS` - For WebSocket APIs (uses AsyncAPI specification) |
| `proxy.schemaFilePath` | Required | The path to your API specification file relative to the API directory. For REST APIs, this should point to your OpenAPI specification file (e.g., `openapi.yaml`). For WebSocket APIs, this should point to your AsyncAPI specification file (e.g., `asyncapi.yaml`). |

:::note
The `component.yaml` file must be present in the `.choreo` directory within your API directory for API Platform to successfully build and deploy your API proxy from GitHub.
:::

### Step 1: Create an API proxy

You can create an API proxy either by selecting the source from a GitHub repository, uploading an OpenAPI specification file, or providing an OpenAPI specification URL. This guide demonstrates how to create an API proxy using a GitHub repository as the source.

1. Go to the [API Platform Console](https://console.bijira.dev/) and sign in. This opens the project home page.
2. If you already have one or more components in your project, click **+ Create**. Otherwise, proceed to the next step.
3. Select Import API Contract and click on GitHub tab.
4. Click on **Authorize With GitHub** card under **Connect a Git Repository** section to connect your GitHub account.
    - If you haven’t connected your GitHub repository to API Platform, enter your GitHub credentials and select the repository you forked in the prerequisites section to install the [API Platform GitHub App](https://github.com/marketplace/choreo-apps).

    :::note
    The **API Platform GitHub App** requires the following permissions:
     - Read and write access to code and pull requests.
     - Read access to issues and metadata.

    You can [revoke access](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations#reviewing-your-authorized-github-apps) if needed. Write access is only used for sending pull requests; API Platform will not push changes directly to your repository.
    :::

    :::note
    If you are the owner of the GitHub organization and need to authorize the API Platform GitHub App on behalf of your collaborators, you can install the API Platform GitHub App directly in your organization via [install App](https://github.com/marketplace/choreo-apps).
    :::

5. Enter the following repository details:

    | **Field**              | **Value**          |
    |------------------------|--------------------|
    | **Organization**       | Your GitHub account|
    | **Repository**         | bijira-samples     |
    | **Branch**             | **`main`**         |
    | **API Directory**      | /reading-list-api |

    ![Create API Proxy from Contract form with GitHub tab showing organization, repository, branch, and API directory fields](/img/cloud/create-api-proxy/import-from-github/api_from_github_select_repo.png)

    :::note
    To select the relevant directory, click on the **Edit** action next to the **API Directory** input field. Then, enter `reading-list-api` as the directory name to quickly search and locate the correct directory.
    :::

6. Specify the following values as Proxy Metadata:

    | **Field**       | **Value**                                  |
    |-----------------|--------------------------------------------|
    | **Name**     | `Reading List API`                                   |
    | **Version**     | `1.0`                                      |
    | **Target**      | `https://apis.bijira.dev/samples/reading-list-api-service/v1.0`|

7. Click **Create**. This creates the API proxy component and takes you to the **Overview** page.

:::note
The API contract cannot be modified after proxy creation. Therefore, any changes to the API contract in the GitHub repository will not apply to the created proxy.
:::

### Step 2: Build and Deploy the API proxy

:::info
A build starts automatically when you create the API proxy, and you will be redirected to the **Overview** page.
:::

1. In the left navigation menu, click **Deploy**.
2. If the build is in progress, you can view the Build information.

![API proxy builds list showing build IDs, commit references, success status, and Auto update on Commit toggle](/img/cloud/create-api-proxy/import-from-github/api_from_github_build_page.png)

:::note
You can enable **Auto Build on Commit** using the toggle switch available on the API proxy. When enabled, any commit pushed to the connected GitHub branch automatically triggers a new build, keeping your proxy up to date without manual intervention.
:::

 
3. Once the build is completed, in the deploy navigation menu, in the **Build Area** card, click **Configure & Deploy**. 
   This opens the **Configure & Deploy** pane. <br/><br/>
4. Select **External** as the **API Access Mode** and click **Deploy**. The **Development** card indicates the **Deployment Status** as **Active** when the API proxy is successfully deployed.

![Deploy page showing Build Area, Development environment with Active status, Sandbox, and Production cards](/img/cloud/create-api-proxy/import-from-github/api_from_github_deploy_page.png)

:::note
You can enable **Auto Deploy** using the toggle switch available on the API proxy. When enabled, the proxy is automatically deployed to a lower, non-critical environment once the proxy build completes successfully, without requiring manual intervention.
:::

Now, you are ready to test the API proxy. You can test the API via the [OpenAPI Console](../../test-api-proxy/api-console.md) provided in API Platform

## Create API proxy from Start with Endpoint

An API proxy acts as an intermediary between an existing API and API Platform, intercepting all requests made to the API.It also functions as a managed API, allowing you to apply essential API management features such as security policies and rate limiting.

### Prerequisites

- If you're signing in to the API Platform Console for the first time, create an organization:
    1. Go to [API Platform Console](https://console.bijira.dev/) and sign in using your preferred method.
    2. Enter a unique organization name. For example, `Stark Industries`.
    3. Read and accept the privacy policy and terms of use.
    4. Click **Create**.

  This creates the organization and opens the **Project Home** page of the default project created for you.

### Create an API Proxy

In this guide, you will create an API proxy using an endpoint.

1. Go to [API Platform Console](https://console.bijira.dev/) and sign in. This opens the project home page.
2. If you already have one or more components in your project, click + Create. Otherwise, proceed to the next step.
3. Select **Start with Endpoint**.
4. Provide the following URL as the **Endpoint URL**.

   ```
   https://raw.githubusercontent.com/wso2/bijira-samples/refs/heads/main/reading-list-api/openapi.yaml   
   ```

5. Click **Next**.
6. Specify the following values as API proxy details:

    | **Field**       | **Value**                                  |
    |-----------------|--------------------------------------------|
    | **Name**     | `Reading List API`                            |
    | **Identifier**     | `reading-list-api-uy`                   |
    | **Version**     | `1.0`                                      |
    | **Base Path**     | `/default/reading-list-api-uy/v1.0`      |
    | **Description**      | `This is a sample proxy that manages a list of reading items.` |
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

An API proxy acts as an intermediary between an existing API and API Platform, intercepting all requests made to the API.It also functions as a managed API, allowing you to apply essential API management features such as security policies and rate limiting.

### Prerequisites

- If you're signing in to the API Platform Console for the first time, create an organization:
    1. Go to [API Platform Console](https://console.bijira.dev/) and sign in using your preferred method.
    2. Enter a unique organization name. For example, `Stark Industries`.
    3. Read and accept the privacy policy and terms of use.
    4. Click **Create**.

  This creates the organization and opens the **Project Home** page of the default project created for you.

### Create an API Proxy

In this guide, you will create an API proxy from the Scratch.

1. Go to [API Platform Console](https://console.bijira.dev/) and sign in. This opens the project home page.
2. If you already have one or more components in your project, click + Create. Otherwise, proceed to the next step.
3. Select **Start from Scratch**.
4. Specify the following values as API proxy details:

    | **Field**       | **Value**                                  |
    |-----------------|--------------------------------------------|
    | **Name**     | `Department Service`                          |
    | **Identifier**     | `department-service`                    |
    | **Version**     | `1.0`                                      |
    | **Base Path**     | `/default/department-service/v1.0`       |
    | **Description**      | `Sample proxy for department service` |
    | **Target**      | `https://samples.choreoapps.dev/company/hr` |
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
