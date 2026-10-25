---
title: "Deployment Promotion Workflow"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Submit Workflow Approval Requests

In API Platform, if an administrator configures a workflow to require approval, you must submit a request to obtain approval to perform the task.

When you submit a workflow approval request, API Platform notifies all authorized reviewers via email. Once an authorized reviewer approves or rejects the request, you will receive an email with the decision details. See Review Workflow Approval Requests for more information on workflow approval request reviews.

The approach to request approval can vary depending on the workflow. Click the relevant tab:

<Tabs>
<TabItem value="environment-promotion" label="Environment promotion">

## Request approval for environment promotion

**Prerequisites**:

- Ensure you have an api proxy created, built, and deployed to the first environment of your CD pipeline.
- Ensure that an approval workflow is configured for environment promotion.
- Ensure you are promoting the api proxy to a critical environment, such as production.

To request approval to promote an api proxy from the development environment to production, follow these steps:

1. Sign in to the [API Platform Console](https://console.Bijira.dev/).
2. In the **api proxy Listing** pane, click on the api proxy you want to deploy. This takes you to the **Overview** page of the api proxy.
3. In the left navigation menu, click **Deploy**.
4. Go to the **Development** card and click **Request to Promote**.
![Deploy page showing Request to Promote button on the Development card for the API proxy](/img/cloud/workflows/request-to-promote.png)
5. In the **Request Approval** pane, enter your request details and click **Submit**. This creates a request and notifies all authorized assignees via email about the request.

:::note
When an environment promotion request for a specific api proxy is pending review, API Platform restricts other developers from making the same request until the pending request is either approved or rejected.
:::

When an authorized assignee approves the request, you will receive a confirmation email and can proceed to promote the api proxy to production.

**Cancel a pending request:**

If you want to cancel a workflow approval request that is already submitted, you can do so before the request is approved or rejected. 

When you submit a workflow approval request, the **Request to Promote** button changes to **Cancel Request**. To cancel an approval request, click **Cancel Request**. Upon confirming the cancellation, all configured approvers are notified immediately, and the request will no longer be pending.

![Deploy page showing Cancel Request button replacing Request to Promote for a pending approval](/img/cloud/workflows/cancel-request.png)

</TabItem>
<TabItem value="url-customization" label="URL customization">

## Request approval for URL customization

**Prerequisites**:

- Ensure you have an api proxy created, built, and deployed.
- Ensure that an approval workflow is configured for URL customization.
- Prepare the desired custom URL for your api proxy, and ensure an administrator has configured your organization to use it.

To request approval to configure a custom URL for an api proxy, follow these steps:

1. Sign in to the [API Platform Console](https://console.Bijira.dev/).
2. In the **api proxy Listing** pane, click on the api proxy you want to configure. This takes you to the **Overview** page of the api proxy.
3. In the left navigation, click the **Admin** drop-down and then click **Settings**.
4. Click the **URL Settings** tab. This displays the active deployments of the component across different environments and indicates whether a custom URL is configured.
5. To configure a custom URL for a component in a specific environment, click the **Edit URL Mapping icon** under the Action column corresponding to the respective environment. This opens the URL Settings dialog, where you can specify values to add to a custom URL.
6. After specifying the required details, click **Configure** to submit your approval request.

![URL Settings dialog for configuring a custom URL mapping for a component environment](/img/cloud/workflows/url-settings-configure.png)

If your approval request is successful, you will see a **Pending** status in the approval status column for the environment you configured.

![URL Settings table showing Pending approval status for the custom URL mapping request](/img/cloud/workflows/pending-url-customization.png)

:::note
While a custom URL request for an api proxy is pending, you cannot submit another request for the same api proxy until the pending request is approved or rejected.
:::
Once the request is approved, the custom URL will be applied to the relevant proxy component.

</TabItem>
</Tabs>

## Review Workflow Approval Requests

In API Platform, administrators can configure approvals for workflows and assign specific users as approvers.

If you are assigned as an authorized reviewer for a particular workflow approval request, you will receive an email notification when a request is submitted for approval. The email includes a summary of the request.

:::note
- Workflow approvals are managed at the project level. If a role with the necessary permissions is assigned in a project context, only members of the user group bound to that role within the specific project will receive notifications for requests made in that project. For example, if you are assigned the Project Admin role (which includes the necessary permissions) for project A, you will only be notified of workflow requests within project A.
- Users with organization-level permissions will receive notifications for all workflow requests across any project in the organization.
:::

Other approvers within your organization will also receive notifications for workflow requests and may review a request before you. If a request has already been reviewed, it will appear under the **Past** tab on the **Approvals** page.

Approval requests are submitted on behalf of the team. Once approved, any authorized team member can execute the task. For certain tasks, execution may occur automatically upon approval.

### View workflow approval requests

To view workflow approval requests assigned to you, follow these steps:

1. Sign in to the [API Platform Console](https://console.bijira.dev/).
2. In the API Platform Console header, go to the **Organization** list and select your organization.
3. In the left navigation menu, click the **Admin** drop-down and then click **Approvals**. This opens the **Approvals** page where you can see all approval requests assigned to you. The **Pending** tab lists requests that are yet to be reviewed. The **Past** tab displays requests already reviewed by you or other approvers, as well as requests canceled by the requester.
![Approvals page showing pending workflow requests list with Review button for each request](/img/cloud/workflows/pending-requests.png)
4. To view details of a specific request, click **Review** corresponding to it.

### Approve or reject an approval request

To approve or reject a request, follow these steps:

1. Follow the instructions in the [View workflow approval requests](#view-workflow-approval-requests) section above to see details of the workflow you want to review.
2. Review the request and click **Approve** or **Reject** based on your decision.
