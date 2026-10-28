---
title: "Overview"
description: "Control who can invoke your API proxies in WSO2 API Platform with the built-in STS or an external key manager."
---

API security refers to the measures and practices used to protect Application Programming Interfaces (APIs) from potential threats and vulnerabilities. APIs are essential for enabling communication and data exchange between different software applications and services, making them a critical component in modern software development. However, their openness and accessibility can also make them targets for various security risks.

Authentication and authorization are key aspects of API security:

- **Authentication:** Ensures that only authorized users or applications can access the API. This can involve using API keys, tokens, or more advanced authentication methods like OAuth 2.0.
- **Authorization:** Controls what authenticated users or applications are allowed to do within the API. Authorization mechanisms restrict access to specific resources and actions based on user roles or permissions.

## Which Option to Use

API Platform issues access tokens through its built-in Secure Token Service (STS), or through an identity provider that you configure as an external key manager.

| Option | Use it when |
|:-------|:------------|
| [API Platform STS](./api-platform-sts.md) | You only need to authenticate client applications. No identity provider setup is required. |
| [Asgardeo](./asgardeo.md) | Your organization uses Asgardeo for identity and access management, or you need end-user authentication. |
| [Microsoft Entra ID (Azure AD)](./azure-ad.md) | Your organization uses Microsoft Entra ID (Azure AD), including scope-based access to API resources. |
| [External Key Manager](./external-key-manager.md) | You use another OAuth2 identity provider as your key manager. |

:::note
API Platform STS tokens can only be used for client authentication. For end-user authentication, use an external key manager such as Asgardeo.
:::
