---
title: "Key Concepts"
---

## Organizations in API Platform

Organizations are the foundational building blocks in API Platform, providing a secure and logical grouping of users, resources, and projects. This covers everything you need to know about organizations in API Platform, including their structure, management, permissions, and unique identifiers.

---

### What is an Organization?

An **organization** in API Platform is a logical container for users and their resources. Every user must belong to an organization to use API Platform. Organizations help isolate resources, manage access, and enable collaboration within a defined boundary.

- **First-time user onboarding:** First-time users must create an organization and become its member upon signing up.
- **Resource isolation**: Users and resources in one organization cannot access those in another, unless explicitly invited.
- **Single organization per user**: A user can only create one organization, but may be invited to join others.

---

### Switching between Organizations

If you are a member of multiple organizations, you can easily switch between them by following steps below.

1. In the API Platform Console header, click the **Organization** list.
2. Select the desired organization from the dropdown.

---

### Inviting Members to Your Organization

To collaborate, you can invite new members to your organization. (See the Inviting Members guide for step-by-step instructions.)

---

### Managing User Permissions

API Platform uses a combination of **groups** and **roles** to manage user permissions efficiently.

#### Groups

A **group** is a collection of users with one or more roles assigned. Users inherit all permissions associated with the group's roles. For example, adding a user to the `API Publisher` group automatically grants them the `API Publisher` role.

##### Predefined Groups

API Platform provides several predefined groups, each mapped to specific roles.

- **Admin**: Users who have full access to the API Platform (user management, application development, billing and subscription, etc.).
- **API Publisher**: Users who understand the technical aspects of the API (interfaces, documentation, versions, etc.) and create and publish APIs into the Developer Portal.
- **API Subscriber**: Users or Application Developers who search the Developer Portal to discover APIs and use them. They read the documentation and forums, rates/comments on the APIs, subscribes to APIs, obtain access tokens, and invokes the APIs.
- **Choreo Platform Engineer**: Users who perform tasks focusing on infrastructure, governance, service mesh, and monitoring.
- **Choreo DevOps**: Users who are involved in deployment management.

> **Tip:** When creating a new group, always assign at least one role to ensure members have the required permissions.

#### Roles

Roles define what actions a user can perform within an organization. The main roles in API Platform are:

- **API Publisher**: Users who understand the technical aspects of the API (interfaces, documentation, versions, etc.) and create and publish APIs into the Developer Portal.
- **API Subscriber**: Users or Application Developers who search the Developer Portal to discover APIs and use them. They read the documentation and forums, rates/comments on the APIs, subscribes to APIs, obtain access tokens, and invokes the APIs.
- **Admin**: Users who have full access to the API Platform (user management, application development, billing and subscription, etc.)
- **Choreo DevOps**: Users who are involved in deployment management.
- **Choreo Platform Engineer**: Users who perform tasks focusing on infrastructure, governance, service mesh, and monitoring.

---

### Organization Identifiers

API Platform uses two unique identifiers for organizations, the **Organization ID** and the **Organization Handle**.

#### Organization ID

A unique, system-generated identifier for each organization. To find your Organization ID:

1. Go to the [API Platform Console](https://console.bijira.dev/) and sign in.
2. Click the **Organization** list in the header and select your organization.
3. In the left navigation, click **Settings**.
4. In the header, click the **Organization** list to open organization-level settings.
5. Under **Organization**, click **Copy ID**.

#### Organization Handle

A unique, human-readable string that corresponds to your organization's name. To find your Organization Handle:

1. Go to the [API Platform Console](https://console.bijira.dev/) and sign in.
2. Click the **Organization** list in the header and select your organization.
3. In the left navigation, click **Settings**.
4. Under **Organization**, click **Copy Handle**.

---

### Best Practices for Organization Management

- **Assign roles carefully**: Only grant users the permissions they need.
- **Use groups for easier management**: Assign roles to groups and add users to groups for scalable permission management.
- **Regularly review membership**: Periodically audit group memberships and roles to ensure security and compliance.
- **Leverage organization identifiers**: Use the Organization ID and Handle for integrations, support, and automation.

## Projects in API Platform

Projects are a core organizational unit in API Platform, designed to group related components and resources that together represent a cloud-native application or solution. This document provides a comprehensive overview of projects in API Platform, including their structure and the deployment.

---

### What is a Project?

A **project** in API Platform is a logical grouping of API Proxies that typically work together to deliver a business capability. Projects help organize development, deployment, and management workflows for cloud-native applications. Each project is isolated from others, ensuring clear boundaries for resources, permissions, and deployments.

---

### Project Structure and Components

A project may include:

- **API Proxies**: Managed APIs that expose services securely.
- **MCP Servers**: Managed MCP servers to be consumed by AI agents.

All components within a project can be managed together, versioned, and deployed as a unit.

---

### Deployment Model

At deployment time, all components in a project are deployed into a single namespace within a Kubernetes cluster. This provides:

- **Resource isolation**: Each project runs in its own namespace, preventing interference between projects.
- **Flexible exposure**: Components can be exposed to the public internet, internally to the organization, or privately within the project only.
- **Unified management**: API Platform provides tools to manage deployments, scaling, and monitoring for all project components.

A project in API Platform is represented as a **cell** in the [Cell-based architecture](https://github.com/wso2/reference-architecture/blob/master/reference-architecture-cell-based.md), which enables modular, scalable, and secure application design.

![Cell-based project boundary showing components exposed to internet, organization, and project namespace](/img/cloud/concepts/project.png)

## Data Planes

API Platform’s architecture is built around two core components, i.e. the control plane and the data plane.

#### Control Plane
The control plane manages key administrative tasks, including the configuration of organizations, users, and projects. It also orchestrates the entire API Proxy development lifecycle, from creation and deployment to governance enforcement, observability enablement, and publishing to the Developer Portal for application developers to consume APIs.

As a SaaS platform, the API Platform control plane oversees both cloud data planes and private data planes. It supports a wide range of user roles, including CIOs, architects, and developers.

#### Data Plane
The data plane is where user-deployed API Proxies run, based on configurations defined in the control plane. All traffic related to these API Proxies is confined within the data plane, ensuring that user data remains securely contained.

API Platform supports two types of data planes.

- **Cloud Data Planes (CDP):** Use a multi-tenant infrastructure to deploy API Proxies, offering a shared yet secure runtime environment.
- **Private Data Planes (PDP):** Offer dedicated infrastructure for a single organization, providing enhanced privacy and control to meet specific compliance or security requirements.

![API Platform high-level architecture with control plane, cloud data plane, and private data plane](/img/cloud/concepts/high-level-view.png)

### Private Data Planes

#### Infrastructure Compatibility
API Platform private data planes can be deployed on most major cloud providers such as Azure, AWS, GCP, as well as on-premises environments.

Minimum infrastructure requirements include:

- Kubernetes clusters compatible with upstream distributions
- Container registry
- Key vault (secret store)
- Logging service or log storage

![API Platform private data plane architecture showing firewall, load balancer, system components, project, and infrastructure](/img/cloud/concepts/private-data-plane-architecture.png)

#### System components

Setting up an API Platform PDP involves deploying components via Helm on the Kubernetes infrastructure. The installation includes:

- Cilium CNI
- API Gateways and related components
- PDP Agent
- Observability and logging APIs, including observability agents
- Flux Controller

All components are automatically updated, including security patches and bug fixes via the Flux Controller, which is connected to the Update Management System.

#### Control Plane Connectivity
Private data planes communicate with the control plane for ongoing operations. All communication is outbound only from the private data plane. If your organization’s network restricts outbound traffic, allow access to the control plane's public IP range.

The following table details the required inbound and outbound connections for private data planes.

| Data plane component      | Endpoint                                | Direction                 | Protocol |
|:---------------------------|:---------------------------------------|:---------------------------|:---------|
| API Platform PDP agent           | API Platform control plane (CP) (mizzen server) | Outbound                  | WSS      |
|                            | Kubernetes API server                  | Outbound (cluster internal) | HTTPS, WS |
| APIM/local adaptor         | Global adaptor                         | Outbound                  | HTTPS    |
|                            | Azure Service Bus (CP)                 | Outbound                  | AMQP     |
| APIM/Enforcer              | Event hub (CP)                         | Outbound                  | AMQP     |
| API Platform secret resolver     | Cloud secret store                     | Outbound (VPC internal)    | HTTPS    |
| Container registry         | Container registry (public)            | Inbound                   | HTTPS    |
|                            | Container registry                     | Outbound (VPC internal)    | HTTPS    |
| Certificate manager        | Azure DNS service                      | Outbound                  | HTTPS    |
|                            | LetsEncrypt                            | Outbound                  | HTTPS    |
| Flux source controller     | GitHub                                 | Outbound                  | HTTPS    |
| Flux Helm controller       | API Platform container registry              | Outbound                  | HTTPS    |

All communications between the control plane and the private data plane are secured using TLS encryption.

#### Observability Architecture

The following diagram illustrates the log and observability architecture of an API Platform Azure PDP deployment.

![Browser connecting directly to logging and observability APIs in API Platform cloud and private data planes](/img/cloud/concepts/observability-architecture.png)

---

This architecture emphasizes data privacy and regulatory compliance by retaining logs and observability data within the data plane itself. Key design principles include:

- **Data storage at source:** Logs and observability data are stored locally within the data plane, improving security and simplifying access, and ensuring compliance.
- **Direct browser-to-data-plane interaction:** The API Platform Console in the user’s browser interacts directly with APIs in the data plane, reducing potential data routing complexities and ensuring a more secure, direct flow of information.
- **Minimized exposure points:** Retrieving data directly from in-plane APIs minimizes the number of data transfer points, effectively decreasing the chances of data exposure or interception.
- **Regulatory compliance:** By supporting data locality, the architecture aligns with GDPR, CCPA, and other regulatory frameworks.
- **Real-time insights and improved performance:** Direct communication between the browser and the data plane enables faster data access and near real-time visibility.
- **Transparency and control:** Users have clear insight into where their data resides and how it is accessed, with fine-grained control.

#### Security

The API Platform private data plane is built with production-grade security in mind, covering infrastructure, architecture, and zero-trust network security. All inbound traffic passes through a firewall and is authenticated and authorized via the API Gateway.

End-to-end encryption is enforced using Cilium transparent encryption, ensuring secure and efficient network traffic flow.

#### Private Data Plane Management Models

API Platform supports flexible management models for private data planes, facilitating collaboration between WSO2 and customers across diverse scenarios.

- **WSO2 Fully Managed – WSO2 Subscription:** Infrastructure and PDP are hosted under WSO2’s subscription.
- **WSO2 Fully Managed – Customer Subscription:** Infrastructure is hosted under the customer’s subscription, but WSO2 manages the PDP.
- **Customer Self-Managed:** WSO2 provides installation scripts and updates, while the customer maintains full control of the infrastructure and operations.
