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
      doc("getting-started/api-proxy", "Quick Start Guide"),
      group("Create", [
        doc("create-api-proxy/overview", "Overview"),
        group("REST APIs", [
          doc("create-api-proxy/rest-apis/start-from-scratch", "Start from Scratch"),
          doc("create-api-proxy/rest-apis/start-with-a-contract", "Start with a Contract"),
        ]),
        group("GraphQL APIs", [
          doc("create-api-proxy/graphql-apis/start-from-scratch", "Start from Scratch"),
          doc("create-api-proxy/graphql-apis/start-with-a-schema", "Start with a Schema"),
        ]),
      ]),
      group("Develop", [
        group("Security", [
          group("Secure API Access", [
            doc("develop-api-proxy/security/secure-api-access/overview", "Overview"),
            doc("develop-api-proxy/security/secure-api-access/api-platform-sts", "API Platform STS"),
            doc("develop-api-proxy/security/secure-api-access/asgardeo", "Asgardeo"),
            doc("develop-api-proxy/security/secure-api-access/azure-ad", "Microsoft Entra ID (Azure AD)"),
            doc("develop-api-proxy/security/secure-api-access/external-key-manager", "External Key Manager"),
          ]),
          group("Secure Backend Communication", [
            doc("develop-api-proxy/security/secure-backend-communication/oauth2", "OAuth2"),
            doc("develop-api-proxy/security/secure-backend-communication/mutual-tls", "Mutual TLS"),
          ]),
        ]),
        group("Policies", [
          doc("develop-api-proxy/policy/overview", "Overview"),
          doc("develop-api-proxy/policy/attach-and-manage-policies", "Attach and Manage Policies"),
        ]),
        doc("develop-api-proxy/documents", "Documents"),
      ]),
      group("Test", [
        doc("test-api-proxy/api-console", "API Console"),
        doc("test-api-proxy/graphql-console", "GraphQL Console"),
        doc("test-api-proxy/curl", "cURL"),
      ]),
      group("Publish", [
        doc("publish-api-proxy/make-an-api-ai-ready", "Make an API AI-Ready"),
        doc("publish-api-proxy/lifecycle", "Lifecycle"),
        doc("publish-api-proxy/subscription-plans-and-billing", "Subscription Plans"),
      ]),
      group("Observability and Insights", [
        group("Logs", [
          doc("observability-and-insights/runtime-logs", "Runtime Logs"),
          doc("monitoring-and-analytics/audit-logs", "Audit Logs"),
        ]),
        doc("observability-and-insights/insights", "Insights"),
      ]),
      doc("gateways", "Gateways"),
      doc("portals", "Portals"),
    ]),
    group("AI Workspace", [
      doc("ai-workspace/getting-started", "Quick Start Guide"),
      group("LLM Providers", [
        doc("ai-workspace/llm-providers/overview", "Overview"),
        doc("ai-workspace/llm-providers/configure-and-consume-provider", "Configure and Consume Provider"),
        doc("ai-workspace/llm-providers/manage-provider", "Manage Provider"),
      ]),
      doc("ai-workspace/app-llm-proxies/overview", "App LLM Proxies"),
      group("MCP Proxies", [
        doc("ai-workspace/mcp-proxies/overview", "Overview"),
        doc("ai-workspace/mcp-proxies/configure-proxy", "Configure Proxy"),
        doc("ai-workspace/mcp-proxies/apply-policies", "Apply Policies"),
      ]),
      doc("ai-workspace/agent-proxies", "Agent Proxies"),
      doc("ai-workspace/gen-ai-applications", "Gen AI Applications"),
      doc("ai-workspace/ai-gateway/setting-up", "AI Gateways"),
      doc("ai-workspace/monitoring-and-analytics", "Insights"),
    ]),
    group("Developer Portal", [
      doc("developer-portal/getting-started", "Quick Start Guide"),
      group("Discover APIs", [
        doc("developer-portal/discover-apis/searching", "Searching"),
        doc("developer-portal/discover-apis/documentation", "Documentation"),
      ]),
      doc("developer-portal/discover-mcp-servers", "Discover MCP Proxies"),
      doc("developer-portal/ai-agent-discovery", "Discover AI Agents"),
      doc("developer-portal/consume-an-api", "Consume an API"),
      doc("developer-portal/manage-applications", "Manage Applications"),
      doc("developer-portal/manage-subscriptions", "Manage Subscriptions"),
      doc("developer-portal/theming-developer-portal", "Theming"),
    ]),
    section("Hybrid Gateways"),
    group("API Gateway", [
      group("Self-Hosted Gateway", [
        doc("hybrid-gateways/api-gateway/getting-started", "Quick Start Guide"),
        group("Policies", [
          doc("hybrid-gateways/api-gateway/manage-policies", "Adding and Managing Policies"),
          group("Custom Policies", [
            doc("hybrid-gateways/api-gateway/writing-a-custom-policy", "Writing a Custom Policy"),
            doc("hybrid-gateways/api-gateway/build-gateway-with-custom-policies", "Building the Gateway with Custom Policies"),
            doc("hybrid-gateways/api-gateway/apply-custom-policies-to-apis", "Apply Custom Policies to APIs"),
          ]),
        ]),
        doc("hybrid-gateways/api-gateway/publish-apis/overview", "Publishing APIs"),
      ]),
      group("Third Party Gateways", [
        doc("hybrid-gateways/api-gateway/third-party-gateways/api-discovery-aws", "AWS API Gateway"),
      ]),
    ]),
    group("AI Gateway", [
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
    ]),
    sectionEnd(),
    {
      type: 'category',
      label: 'Monitoring and Analytics',
      // The group's own page (docs/monitoring-and-analytics.md).
      link: {type: 'doc', id: 'monitoring-and-analytics'},
      items: [
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
