// Navigation for API Platform Cloud: API Control Plane content at the top
// level, with AI Workspace and Developer Portal as their own sections.

const doc = (id, label) => ({type: 'doc', id, label});
const group = (label, items) => ({type: 'category', label, items});
// A non-clickable section title between top-level items (styled by
// .sidebar-section-title in custom.css).
const section = (label) => ({
  type: 'html',
  value: label,
  className: 'sidebar-section-title',
  defaultStyle: true,
});
// A divider that closes a section (.sidebar-section-end in custom.css).
const sectionEnd = () => ({
  type: 'html',
  value: '<span aria-hidden="true"></span>',
  className: 'sidebar-section-end',
});

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    doc("overview", "Overview"),
    doc("key-concepts", "Key Concepts"),
    group("API Control Plane", [
      group("Getting Started", [
        doc("getting-started/api-proxy", "API Proxy"),
        doc("getting-started/mcp-server", "MCP Server"),
      ]),
      group("API Proxies", [
        group("Create", [
          doc("create-api-proxy/overview", "Overview"),
          group("Ingress APIs", [
            doc("create-api-proxy/ingress-apis/rest-apis", "REST APIs"),
            doc("create-api-proxy/ingress-apis/web-socket-apis", "Web Socket APIs"),
            doc("create-api-proxy/ingress-apis/graphql-apis", "GraphQL APIs"),
          ]),
          doc("create-api-proxy/egress-apis", "Egress APIs"),
        ]),
        group("Develop", [
          doc("develop-api-proxy/authentication-and-authorization", "Authentication and Authorization"),
          group("Policy", [
            doc("develop-api-proxy/policy/overview", "Overview"),
            doc("develop-api-proxy/policy/policies", "Policies"),
            doc("develop-api-proxy/policy/attach-and-manage-policies", "Attach and Manage Policies"),
            doc("develop-api-proxy/policy/add-custom-policies", "Add Custom Policies"),
          ]),
          doc("develop-api-proxy/make-an-api-ai-ready", "Make an API AI-Ready"),
        ]),
        group("Test", [
          doc("test-api-proxy/api-console", "API Console"),
          doc("test-api-proxy/api-chat", "API Chat"),
        ]),
        group("Publish", [
          doc("develop-api-proxy/documents", "Documents"),
          doc("develop-api-proxy/subscription-plans-and-billing", "Subscription Plans and Billing"),
          doc("develop-api-proxy/lifecycle", "Lifecycle"),
        ]),
      ]),
      group("MCP Servers", [
        doc("mcp-servers/overview", "Overview"),
        doc("mcp-servers/mcp-readiness", "MCP Readiness"),
      ]),
      doc("api-governance/overview", "API Governance"),
      doc("secret-management", "Secret Management"),
      doc("pipelines", "Pipelines"),
      {
        type: 'category',
        label: 'Workflows',
        // The group's own page (docs/workflows.md).
        link: {type: 'doc', id: 'workflows'},
        items: [
          doc("workflows/application-creation-workflow", "Application Creation Workflow"),
          doc("workflows/subscription-creation-workflow", "Subscription Creation Workflow"),
          doc("workflows/deployment-promotion-workflow", "Deployment Promotion Workflow"),
        ],
      },
    ]),
    group("AI Workspace", [
      doc("ai-workspace/overview", "Overview"),
      doc("ai-workspace/getting-started", "Getting Started"),
      group("AI Gateway", [
        doc("ai-workspace/ai-gateway/setting-up", "Setting Up"),
      ]),
      group("LLM Providers", [
        doc("ai-workspace/llm-providers/overview", "Overview"),
      ]),
      group("App LLM Proxies", [
        doc("ai-workspace/app-llm-proxies/overview", "Overview"),
      ]),
      group("MCP Proxies", [
        doc("ai-workspace/mcp-proxies/overview", "Overview"),
      ]),
      group("MCP Registry", [
        doc("ai-workspace/mcp-registry/overview", "Overview"),
      ]),
      group("Policies", [
        doc("ai-workspace/policies/overview", "Overview"),
        doc("ai-workspace/policies/policy-hub", "Policy Hub"),
      ]),
      doc("ai-workspace/secret-management", "Secret Management"),
      doc("ai-workspace/gen-ai-applications", "Gen AI Applications"),
      doc("ai-workspace/configure-inbound-auth", "Configure Inbound Auth"),
      doc("ai-workspace/invoke-via-sdk", "Invoke via SDK"),
      doc("ai-workspace/monitoring-and-analytics", "Monitoring and Analytics"),
    ]),
    group("Developer Portal", [
      doc("developer-portal/overview", "Overview"),
      doc("developer-portal/getting-started", "Getting Started"),
      doc("developer-portal/setting-up", "Setting Up"),
      group("Discover APIs", [
        doc("developer-portal/discover-apis/searching", "Searching"),
        doc("developer-portal/discover-apis/documentation", "Documentation"),
      ]),
      doc("developer-portal/discover-mcp-servers", "Discover MCP Servers"),
      doc("developer-portal/ai-agent-discovery", "AI Agent Discovery"),
      doc("developer-portal/consume-an-api", "Consume an API"),
      doc("developer-portal/manage-applications", "Manage Applications"),
      doc("developer-portal/application-sharing", "Application Sharing"),
      doc("developer-portal/manage-subscriptions", "Manage Subscriptions"),
      doc("developer-portal/sdk-generation", "SDK Generation"),
      doc("developer-portal/api-workflows", "API Workflows"),
      doc("developer-portal/theming-developer-portal", "Theming Developer Portal"),
      doc("developer-portal/admin-settings", "Admin Settings"),
    ]),
    section("Hybrid Gateways"),
    group("API Gateway", [
      group("Self-Hosted Gateway", [
        doc("hybrid-gateways/api-gateway/architecture", "Architecture"),
        doc("hybrid-gateways/api-gateway/getting-started", "Getting Started"),
        doc("hybrid-gateways/api-gateway/setting-up", "Setting Up"),
        doc("hybrid-gateways/api-gateway/manage-policies", "Adding and Managing Policies"),
        group("Custom Policies", [
          doc("hybrid-gateways/api-gateway/writing-a-custom-policy", "Writing a Custom Policy"),
          doc("hybrid-gateways/api-gateway/build-gateway-with-custom-policies", "Building the Gateway with Custom Policies"),
          doc("hybrid-gateways/api-gateway/apply-custom-policies-to-apis", "Apply Custom Policies to APIs"),
        ]),
        group("Publish APIs", [
          doc("hybrid-gateways/api-gateway/publish-apis/overview", "Overview"),
          doc("hybrid-gateways/api-gateway/publish-apis/subscription-based-apis", "Subscription Based APIs"),
          doc("hybrid-gateways/api-gateway/publish-apis/subscription-less-apis", "Subscription Less APIs"),
          doc("hybrid-gateways/api-gateway/publish-apis/lifecycle-management", "Lifecycle Management"),
        ]),
        doc("hybrid-gateways/api-gateway/high-availability", "High Availability"),
      ]),
      group("Third-Party Gateways", [
        doc("hybrid-gateways/api-gateway/third-party-gateways/overview", "Overview"),
        doc("hybrid-gateways/api-gateway/third-party-gateways/api-discovery-aws", "Discover APIs from AWS API Gateway"),
      ]),
    ]),
    group("AI Gateway", [
      doc("hybrid-gateways/ai-gateway/overview", "Overview"),
      {
        type: 'category',
        label: 'LLM',
        link: {type: 'doc', id: 'hybrid-gateways/ai-gateway/llm/index'},
        items: [
          doc("hybrid-gateways/ai-gateway/llm/quick-start-guide", "Quick Start Guide"),
          doc("hybrid-gateways/ai-gateway/llm/llm-templates", "LLM Provider Templates"),
          group("Guardrails", [
            doc("hybrid-gateways/ai-gateway/llm/guardrails/aws-bedrock-guardrail", "AWS Bedrock Guardrail"),
            doc("hybrid-gateways/ai-gateway/llm/guardrails/azure-content-safety", "Azure Content Safety"),
            doc("hybrid-gateways/ai-gateway/llm/guardrails/content-length", "Content Length Guardrail"),
            doc("hybrid-gateways/ai-gateway/llm/guardrails/json-schema", "JSON Schema Guardrail"),
            doc("hybrid-gateways/ai-gateway/llm/guardrails/pii-masking-regex", "PII Masking Regex Guardrail"),
            doc("hybrid-gateways/ai-gateway/llm/guardrails/regex", "Regex Guardrail"),
            doc("hybrid-gateways/ai-gateway/llm/guardrails/semantic-prompt-guard", "Semantic Prompt Guardrail"),
            doc("hybrid-gateways/ai-gateway/llm/guardrails/semantic-tool-filtering", "Semantic Tool Filtering"),
            doc("hybrid-gateways/ai-gateway/llm/guardrails/sentence-count", "Sentence Count Guardrail"),
            doc("hybrid-gateways/ai-gateway/llm/guardrails/url", "URL Guardrail"),
            doc("hybrid-gateways/ai-gateway/llm/guardrails/word-count", "Word Count Guardrail"),
          ]),
          group("Load Balancing", [
            doc("hybrid-gateways/ai-gateway/llm/load-balancing/model-round-robin", "Model Round Robin"),
            doc("hybrid-gateways/ai-gateway/llm/load-balancing/model-weighted-round-robin", "Model Weighted Round Robin"),
          ]),
          group("Prompt Management", [
            doc("hybrid-gateways/ai-gateway/llm/prompt-management/prompt-decorator", "Prompt Decorator"),
            doc("hybrid-gateways/ai-gateway/llm/prompt-management/prompt-template", "Prompt Template"),
          ]),
          doc("hybrid-gateways/ai-gateway/llm/semantic-caching", "Semantic Caching"),
        ],
      },
      {
        type: 'category',
        label: 'MCP',
        link: {type: 'doc', id: 'hybrid-gateways/ai-gateway/mcp/index'},
        items: [
          doc("hybrid-gateways/ai-gateway/mcp/quick-start-guide", "Quick Start Guide"),
          group("Policies", [
            doc("hybrid-gateways/ai-gateway/mcp/policies/mcp-acl-list", "MCP Access Control List"),
            doc("hybrid-gateways/ai-gateway/mcp/policies/mcp-authentication", "MCP Authentication"),
            doc("hybrid-gateways/ai-gateway/mcp/policies/mcp-authorization", "MCP Authorization"),
            doc("hybrid-gateways/ai-gateway/mcp/policies/mcp-rewrite", "MCP Rewrite"),
          ]),
        ],
      },
      {
        type: 'category',
        label: 'Observability',
        link: {type: 'doc', id: 'hybrid-gateways/ai-gateway/observability/index'},
        items: [
          doc("hybrid-gateways/ai-gateway/observability/logging", "Logging"),
          doc("hybrid-gateways/ai-gateway/observability/tracing", "Tracing"),
        ],
      },
      {
        type: 'category',
        label: 'Analytics',
        link: {type: 'doc', id: 'hybrid-gateways/ai-gateway/analytics/index'},
        items: [
          doc("hybrid-gateways/ai-gateway/analytics/moesif-analytics", "Moesif Analytics"),
          doc("hybrid-gateways/ai-gateway/analytics/analytics-header-filter", "Analytics Header Filter"),
        ],
      },
    ]),
    sectionEnd(),
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
      doc("administer/creating-application-templates", "Creating Application Templates"),
      doc("administer/managing-api-consumers", "Managing API Consumers"),
    ]),
    doc("tutorials", "Tutorials"),
  ],
};

export default sidebars;
