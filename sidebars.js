// Navigation for API Control Plane (API Platform Cloud).

const doc = (id, label) => ({type: 'doc', id, label});
const group = (label, items) => ({type: 'category', label, items});

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    doc("overview", "Overview"),
    group("Getting Started", [
      doc("getting-started/api-proxy", "API Proxy"),
      doc("getting-started/mcp-server", "MCP Server"),
    ]),
    doc("key-concepts", "Key Concepts"),
    group("Create API Proxy", [
      doc("create-api-proxy/overview", "Overview"),
      group("Ingress APIs", [
        doc("create-api-proxy/ingress-apis/rest-apis", "REST APIs"),
        doc("create-api-proxy/ingress-apis/web-socket-apis", "Web Socket APIs"),
        doc("create-api-proxy/ingress-apis/graphql-apis", "GraphQL APIs"),
      ]),
      doc("create-api-proxy/egress-apis", "Egress APIs"),
    ]),
    group("Develop API Proxy", [
      doc("develop-api-proxy/authentication-and-authorization", "Authentication and Authorization"),
      group("Policy", [
        doc("develop-api-proxy/policy/overview", "Overview"),
        doc("develop-api-proxy/policy/policies", "Policies"),
        doc("develop-api-proxy/policy/attach-and-manage-policies", "Attach and Manage Policies"),
        doc("develop-api-proxy/policy/add-custom-policies", "Add Custom Policies"),
      ]),
      doc("develop-api-proxy/documents", "Documents"),
      doc("develop-api-proxy/lifecycle", "Lifecycle"),
      doc("develop-api-proxy/subscription-plans", "Subscription Plans"),
      doc("develop-api-proxy/make-an-api-ai-ready", "Make an API AI-Ready"),
    ]),
    group("Test API Proxy", [
      doc("test-api-proxy/api-console", "API Console"),
      doc("test-api-proxy/api-chat", "API Chat"),
    ]),
    group("MCP Servers", [
      doc("mcp-servers/overview", "Overview"),
      doc("mcp-servers/mcp-readiness", "MCP Readiness"),
    ]),
    group("API Governance", [
      doc("api-governance/overview", "Overview"),
    ]),
    group("Gateways", [
      doc("gateways/overview", "Overview"),
      group("API Gateway", [
        doc("gateways/api-gateway/setting-up", "Setting Up"),
      ]),
      group("AI Gateway", [
        doc("gateways/ai-gateway/setting-up", "Setting Up"),
      ]),
      group("Policy Hub", [
        doc("gateways/policy-hub/overview", "Overview"),
      ]),
    ]),
    doc("secret-management", "Secret Management"),
    group("Developer Portal", [
      doc("developer-portal/setting-up", "Setting Up"),
    ]),
    group("Monetization", [
      doc("monetization/overview", "Overview"),
    ]),
    {
      type: 'category',
      label: 'Monitoring and Analytics',
      // The group's own page (docs/monitoring-and-analytics.md).
      link: {type: 'doc', id: 'monitoring-and-analytics'},
      items: [
        doc("monitoring-and-analytics/audit-logs", "Audit Logs"),
        doc("monitoring-and-analytics/alerts", "Alerts"),
        doc("monitoring-and-analytics/gateway-metrics", "Gateway Metrics"),
      ],
    },
    group("Administer", [
      doc("administer/overview", "Overview"),
      doc("administer/managing-users", "Managing Users"),
      doc("administer/role-based-access-control", "Role Based Access Control"),
      doc("administer/managing-environments", "Managing Environments"),
      doc("administer/creating-subscription-plans", "Creating Subscription Plans"),
    ]),
    doc("pipelines", "Pipelines"),
    doc("workflows", "Workflows"),
    doc("tutorials", "Tutorials"),
    doc("tools", "Tools"),
  ],
};

export default sidebars;
