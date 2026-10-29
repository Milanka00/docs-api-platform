---
title: "Overview"
description: "View runtime and audit logs in API Platform Cloud to troubleshoot API proxies and review user actions."
---

The unified log view in API Platform Cloud lets you view runtime and audit logs to gain API proxy and user insights while keeping data private. API Platform provides real-time insights through live logs and lets you view historical logs for insights into the past.

You can define a time range and scroll through the log entries in that range. The log view also provides filtering so you can find the relevant logs when troubleshooting in distributed environments.

:::note
All personally identifiable information (PII) is resolved at the frontend service level. Logs store only the relevant UUIDs.
:::

You can access these log types:

- [Runtime logs](./runtime-logs.md) are organization-level gateway logs. They show gateway traffic and gateway activity for every workload in the organization.
- [Audit logs](./audit-logs.md) record user actions and system changes, so you can trace activity for compliance and security.
