---
title: "Key Concepts"
---

Key concepts are the core building blocks of API Platform that define how users, resources, and runtime infrastructure are organized and managed.

- [Organizations](#organizations)
- [Projects](#projects)
- [Control Plane and Data Planes](#control-plane-and-data-planes)

## Organizations

An **organization** is a logical container for users and their resources. Every user must belong to an organization to use API Platform, and organizations isolate resources, manage access, and enable collaboration within a defined boundary.

- **Resource isolation:** Users and resources in one organization cannot access those in another.
- **One organization per user:** A user can create only one organization, but can be invited to join others.
- **Membership by invitation:** An organization administrator invites users, and they join once they accept the invitation.

### Users, Groups, and Roles

API Platform manages permissions through groups and roles. A **role** defines the actions a user can perform. A **group** is a collection of users with one or more roles assigned, and its members inherit the permissions of those roles.

| Role | Responsibilities |
|:-----|:-----------------|
| **Admin** | Full access to API Platform, including user management, application development, and billing. |
| **API Publisher** | Creates, documents, and publishes APIs to the Developer Portal. |
| **API Subscriber** | Discovers APIs in the Developer Portal, subscribes to them, and invokes them. |
| **Choreo DevOps** | Manages deployments. |
| **Choreo Platform Engineer** | Manages infrastructure, governance, service mesh, and monitoring. |

For details, see [Role Based Access Control](./administer/role-based-access-control.md).

## Projects

A **project** is a logical grouping of API proxies and MCP servers that work together to deliver a business capability. Components in a project are managed and deployed together, and each project is deployed into its own isolated namespace in a Kubernetes cluster.

A project is represented as a **cell** in the [Cell-based architecture](https://github.com/wso2/reference-architecture/blob/master/reference-architecture-cell-based.md). Its components can be exposed to the public internet, internally to the organization, or only within the project.

![Cell-based project boundary showing components exposed to internet, organization, and project namespace](/img/cloud/concepts/project.png)

## Control Plane and Data Planes

API Platform's architecture is built around two core components: the control plane and the data plane.

The **control plane** manages organizations, users, and projects, and orchestrates the API proxy lifecycle, from creation and deployment to governance, observability, and publishing to the Developer Portal.

The **data plane** is where deployed API proxies run, based on the configuration defined in the control plane. All API traffic stays within the data plane, so user data remains securely contained. API Platform supports two types of data planes:

- **Cloud Data Planes (CDP):** Multi-tenant infrastructure that offers a shared yet secure runtime environment.
- **Private Data Planes (PDP):** Dedicated infrastructure for a single organization, for enhanced privacy and control to meet compliance or security requirements.

![API Platform high-level architecture with control plane, cloud data plane, and private data plane](/img/cloud/concepts/high-level-view.png)

To run gateways on your own infrastructure, see [Self-Hosted Gateway](./hybrid-gateways/api-gateway/architecture.md).
