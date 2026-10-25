---
title: "Overview"
---

## API Platform API Management Governance

API Management Governance consists of a set of processes, practices, roles, and responsibilities designed to ensure the effective and efficient management of APIs throughout their lifecycle. Establishing a governance strategy is essential for maintaining consistency, security, and compliance in API development, management, and consumption.

Implementing API governance provides the following benefits:

- **Security and Compliance** – Enforces authentication, authorization, and regulatory compliance requirements.
- **Consistency** – Standardizes API design, documentation, and versioning to maintain uniformity.
- **Performance and Reliability** – Enables monitoring, rate limiting, and policy enforcement to ensure optimal API performance.
- **Lifecycle Management** – Supports structured API development, deployment, deprecation, and retirement processes.
- **Collaboration** – Defines clear roles and responsibilities for API stakeholders, improving coordination.
- **Discoverability and Reusability** – Facilitates API cataloging and reuse to minimize redundant development efforts.
- **Business Agility** – Accelerates API delivery, helping organizations meet customer and partner needs efficiently.

API Platform API Management provides a comprehensive governance capabilities that powered by AI to evaluate API compliance with governance standards given in a form of natural language specification, and also spectral based compliance validation for rules defined in OpenAPI and AsyncAPI specifications.

This section outlines the governance concepts available in API Platform.

### Governance Concepts

API Management Governance build on the following concepts

#### Ruleset

A ruleset is a collection of rules that define governance policies to be enforced on APIs. These rules cover various aspects of API management, including security, compliance, performance, and operational guidelines. Rulesets can be defined at the organization level and later applied through policies to ensure governance enforcement.

Each ruleset must have a unique name and may include a description to provide additional context. Rulesets are used to validate specific aspects of an API, including:

- **API Definition** – The OpenAPI or AsyncAPI definition that establishes the API contract.
- **API Metadata** – Information about the API, such as name, version, context, and other details.
- **API Documentation** – Documentation that provides usage guidelines and other relevant information about the API.

When defining a ruleset, the API type must be specified. Supported API types include:

- **REST API**
- **Async API**

#### Documents

Documents are PDF files containing governance standards written in natural language. They are uploaded at the organization level and used as guidelines by the AI Compliance Analysis feature to evaluate APIs against your governance standards.

#### Policy

A **policy** is a set of rulesets that define governance policies to be enforced on APIs. Policies can be created at the organization level and later applied to APIs to enforce security, compliance, performance, and other governance requirements. Policies act as high-level groupings of rules and can be used to categorize APIs, such as external APIs, internal APIs, and partner APIs.

Each policy must have a **unique name** and may include a **description** to provide additional context.

##### Policy Attachment and Labeling

Policies can be attached to one or more **labels** to categorize them effectively. Labels serve as a link between policies and APIs when a policy is assigned to a label, it is automatically applied to all APIs associated with that label.

##### Policy Enforcement

Policy enforcement is an integral part of policy definition and can be categorized into three types:

##### 1. Policy Enforcement on APIs

All the policies will be enforced on the API proxies when the proxies are updated.

##### 2. Rule Violation Level

Policies can be enforced based on the severity of rule violations. The supported levels include:

- **Error** – Indicates a critical violation.
- **Warn** – Indicates a warning that requires attention.
- **Info** – Provides informational messages about compliance.

##### 3. Rule Violation Action

Policies define actions to be taken when a rule violation is detected. The supported actions include:

- **Notify** – Alerts users about the violation. Notifications appear in compliance dashboards, allowing users to review and take necessary actions.

## Govern API Proxies

API governance lets you enforce compliance standards on API proxies across your organization. You can define rulesets, attach them to policies, and monitor adherence through a compliance dashboard. You can also upload governance documents to run AI-powered compliance analysis against your APIs.

The Governance page is organized into two main sections, toggled at the top:

- **Policies** - Manage governance policies and the rulesets that back them.
- **Documents** - Manage PDF documents used as guidelines for AI compliance analysis.

### Rulesets

Rulesets are Spectral YAML-based rule definitions used to validate API artifacts. They are listed under the **Policies** tab in the **Rulesets** section. Once created, rulesets are attached to policies to enforce them on your API proxies.

#### Create a Ruleset

1. Sign in to the [API Platform Console](https://console.bijira.dev/).
2. In the API Platform Console header, go to the **Organization** list and select your organization.
3. In the left navigation menu, click **Admin** and then click **Governance**. This opens the Governance page.
4. Ensure the **Policies** tab is selected.
5. Scroll to the **Rulesets** section and click **Add Ruleset**.
6. Provide the following details:

    | Field Name | Description | Mandatory |
    |---|---|---|
    | Name | The name of the ruleset. | Yes |
    | Description | A brief description of the ruleset. | No |
    | Applies To | The scope to which the ruleset applies (fixed to API Definitions). | - |
    | Artifact Type | The type of API artifact (fixed to HTTP API). | - |
    | Spectral Ruleset | Upload a pre-written ruleset file in `.yaml`, `.yml`, or `.json` format. | Yes |
    | Documentation Link | A link to the documentation for the ruleset. | No |
    | Provider Name | The name of the provider who created the ruleset. | Yes |

7. Click **Create**.

![Create Spectral Ruleset form showing name, Applies To API Definitions, Artifact Type HTTP API, description, uploaded YAML file, document link, and provider name fields with Cancel and Create buttons](/img/cloud/governance/add-rulesets.png)

:::note
The **Applies To** and **Artifact Type** fields are fixed and cannot be changed.
:::

### Policies

Policies attach one or more rulesets to your organization's API proxies and define when and how they are enforced. You can use the default rulesets available in the catalog or create your own. Once created, a policy is automatically applied globally to all existing and newly created API proxies in the organization.

#### Create a Policy

1. On the Governance page, ensure the **Policies** tab is selected.
2. Click **Add Policy**.
3. Provide the following details:

    | Field Name | Description | Mandatory |
    |---|---|---|
    | Name | The name of the policy. | Yes |
    | Description | A brief description of the policy. | No |
    | Applicability | The scope of the policy. Currently fixed to **Global** (applies to all API proxies in the organization). | - |
    | Enforcement Detail | Defines when the policy is evaluated and what happens on a violation. | Yes |
    | Rulesets | The rulesets to attach to this policy. | Yes |

4. Click **Create**.

![Create Policy form showing name, description, Global applicability, Enforcement Details table with Update state and Notify buttons for On Error, On Warning, and On Info, plus selectable ruleset cards including Sample Ruleset, WSO2 API Design Guidelines, WSO2 Style Guidelines, and OWASP Top 10](/img/cloud/governance/add-policy.png)

#### Enforcement Detail

| Field Name | Description | Mandatory | Options/Values |
|---|---|---|---|
| Governed State | The state of the API to which the policy is applied. (Currently only supports Update) | Yes | Update |
| Severity Levels | The severity level of the policy violation. | Yes | Error, Warn, Info |
| Actions | The action to be taken when a policy violation is detected. (Currently only supports Notify) | Yes | Notify |

![Enforcement Details table showing Update state with red Notify button under On Error, orange Notify button under On Warning, and blue Notify button under On Info](/img/cloud/governance/enforcement-detail.png)

### Documents

Documents are PDF files containing governance standards written in natural language. They are used as guidelines by the AI Compliance Analysis feature when evaluating your APIs.

#### Add a Document

1. On the Governance page, select the **Documents** tab.
2. Click **Add Document** and provide the following details:

    | Field Name | Description | Mandatory |
    |---|---|---|
    | Name | The name of the document. | Yes |
    | Description | A brief description of the document. | No |
    | Document | Upload a PDF file containing your governance standards. | Yes |

3. Click **Create**.

![Create Document form with name field showing Sample Document, selected PDF file for Best Practices Guidelines for REST API Design in the Banking Sector, and description field with Cancel and Create buttons](/img/cloud/governance/add-document.png)

### Monitoring Compliance

Once policies are applied, compliance results are available through the Compliance Dashboard under **Insights > Compliance** at the organization, project, and component levels. For details on viewing compliance results and running AI compliance analysis, see Compliance Dashboard.
