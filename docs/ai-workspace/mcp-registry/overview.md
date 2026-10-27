---
title: "Overview"
---

## What is an MCP Registry?

An [MCP registry](https://modelcontextprotocol.io/registry/about) is a discovery catalog for MCP servers. It lets AI clients, IDE plugins, and other tooling find available MCP servers by name and version.

A registry stores metadata about each server: its name, version, description, capabilities, and the endpoint URL. Consumers query the registry to discover what servers are available and how to connect to them.

### The API Platform MCP Registry

API Platform includes a built-in MCP registry scoped to each organization. When you publish an MCP proxy from the **AI Workspace**, it is registered in your organization's registry.

The MCP registry is surfaced in two ways:

 - **MCP Registry API**: A REST API for discovery, intended for AI clients, IDE plugins, and automation tooling. It is built on the [MCP Registry API specification](https://modelcontextprotocol.io/registry/about).
 - **MCP Hub**: A visual catalog for browsing and discovering MCP servers registered in your organization. The MCP Hub is powered by the MCP registry.

### Related Topics

- Publish MCP Proxies from the AI Workspace
- Browse the MCP Hub
- Use the MCP Registry API

## Publish MCP Proxies

Once you have [configured and deployed an MCP proxy](../mcp-proxies/overview.md) in the AI Workspace, you can publish it to the MCP Hub. Publishing registers the proxy in your organization's MCP registry, making it discoverable through the MCP Hub and the MCP Registry API.

### Publish to MCP Hub

1. In the AI Workspace, open the MCP proxy you want to publish.
2. Click **Publish to MCP Hub**.

    ![MCP Everything Server proxy overview with Deploy to Gateway and Publish to MCP Hub buttons in the top right](/img/cloud/ai-gateway/ai-workspace/mcp-proxies/publish.png)

The proxy is registered in your organization's MCP registry and becomes immediately discoverable through the MCP Hub and the MCP Registry API.

### Related Topics

- What is an MCP Registry?
- Browse the MCP Hub
- Use the MCP Registry API

## Browse the MCP Hub

The MCP Hub is the visual catalog for your organization's MCP registry. Use it to explore available MCP servers, review their capabilities, and get the connection details needed to wire them into an AI client or agent.

### Prerequisites

- You have access to your organization's MCP Hub.

### Step 1: Open the MCP Hub

1. Navigate to the [MCP Hub](https://devportal.bijira.dev).
2. In the left navigation, select **MCP Servers**.

![MCP Hub Developer Portal page with a banner promoting MCP-powered tools and an Everything MCP server card showing version 1.0 and MCP tag](/img/cloud/ai-gateway/ai-workspace/mcp-proxies/mcphub.png)

The Hub displays the list of all MCP servers registered in your organization's registry. Each card shows the server name, version, description, and any tags.

### Step 2: View a Server

Click a server card to open its detail page. You can view the MCP server details, including its tools, resources, prompts, and connection configuration.

![Everything MCP Server detail page showing MCP Server URL, expandable tools list with echo, add, viewPizzaMenu, and orderPizza, and MCP Server Configuration JSON snippet](/img/cloud/ai-gateway/ai-workspace/mcp-proxies/mcphub-mcp-overview.png)

### Step 3: Explore Capabilities

Scroll down to the capabilities section. The server's tools, resources, and prompts are listed in expandable panels.

- **Tools**: Each tool panel shows the tool name, description, and its input schema with the parameters the tool accepts. Expand a tool to see the full schema before connecting.
- **Resources**: Each resource panel shows the resource name, description, URI, and MIME type.
- **Prompts**: Each prompt panel shows the prompt name, description, and the arguments it accepts.

### Related Topics

- What is an MCP Registry?
- Publish MCP Proxies
- Use the MCP Registry API

## Use the MCP Registry API

The MCP Registry API gives AI clients, IDE plugins, and automation tooling programmatic access to your organization's MCP server catalog. Use it to discover available servers, retrieve connection details, and query specific versions.

The discovery endpoints are **public** and require no authentication.

### Base URL

```
https://mcphub.bijira.dev/<org_handle>/registry/v0.1
```

Replace `<org_handle>` with your organization's handle.

### Endpoints

#### List all MCP servers

Returns all registered MCP servers for the organization.

```
GET /v0.1/servers
```

**Query parameters**

| Parameter | Type | Description |
|---|---|---|
| `search` | string | Filter servers by name (substring match). |
| `version` | string | Return only servers matching this version. Use `latest` for the latest version of each server. |
| `limit` | integer | Maximum number of results to return (default: 30, max: 100). |
| `cursor` | string | Pagination cursor from a previous response's `metadata.nextCursor`. |
| `updated_since` | string (RFC3339) | Return only servers updated after this timestamp. |

**Example — list all MCP servers for an organization**

```bash
curl https://mcphub.bijira.dev/<org_handle>/registry/v0.1/servers
```

---

#### List versions of a server

Returns all registered versions of a specific server, newest first.

```
GET /v0.1/servers/{serverName}/versions
```

The `serverName` path parameter must be URL-encoded (e.g., `myorg%2Fweather-tools`).

---

#### Get a specific server version

Returns full metadata for one version of a server, including its capabilities, URLs, and schema.

```
GET /v0.1/servers/{serverName}/versions/{version}
```

Use the special version value `latest` to resolve the most recently published version.

### Response Shape

The response from `GET /v0.1/servers` and the version endpoints follows this structure:

```json
{
  "servers": [
    {
      "name": "weather-tools",
      "version": "1.0.0",
      "description": "Provides weather forecast and historical data tools.",
      "publishedAt": "2026-04-01T10:00:00Z",
      "updatedAt": "2026-04-01T10:00:00Z",
      "versionDetail": {
        "remotes": [
          {
            "type": "streamable-http",
            "url": "https://mcphub.bijira.dev/t/<org_handle>/weather-tools/1.0.0"
          }
        ]
      }
    }
  ],
  "metadata": {
    "count": 1
  }
}
```

`versionDetail.remotes` contains the MCP server URL.

### Pagination

Results are returned in pages of up to 30 (default) or up to 100 (maximum, using the `limit` parameter). `metadata.nextCursor` is only present in the response when there are more results beyond the current page. If all servers fit within the page size, `nextCursor` will not appear in the response.

```bash
curl "https://mcphub.bijira.dev/<org_handle>/registry/v0.1/servers?cursor=<nextCursor>"
```

Continue until `metadata.nextCursor` is absent or empty, which indicates the last page.

### Related Topics

- What is an MCP Registry?
- Publish MCP Proxies from the AI Workspace
- Browse the MCP Hub
