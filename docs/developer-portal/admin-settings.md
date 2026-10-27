---
title: "Admin Settings"
---

## LLM Instructions

LLM Instructions allow portal admins to provide AI agents with high level context about the developer portal, what APIs are available, how the portal is organized, and any conventions or constraints agents should follow when interacting with it.

These instructions are published as part of the portal's `llms.txt` file, which is the primary entry point for AI agents discovering the portal's capabilities.

### What Are LLM Instructions?

LLM Instructions are free form natural language text written by the portal admin. They appear at the top of `llms.txt` and are read by agents before they navigate the rest of the portal's content.

Use this space to tell agents:

- What the portal covers and what kind of APIs it exposes
- How APIs are organized (by product area, team, lifecycle stage, etc.)
- Any authentication conventions agents should be aware of
- Which workflows are the recommended starting points for common tasks
- Any limitations or usage policies agents should respect

Well written LLM instructions reduce agent errors and improve the quality of AI-assisted integrations by giving agents the orientation they need upfront, rather than leaving them to infer context from individual API specs.

### Configuring LLM Instructions

LLM Instructions are configured at the portal (view) level in the admin settings.

1. Log in to the Developer Portal as an admin and navigate to **Admin Settings**.
2. Select **LLM Instructions** tab.
3. Enter your instructions in the text editor.
4. Click **Publish**.

![LLM Instructions page with Portal Identity fields, text editor, and Publish button](/img/cloud/devportal/llm-instructions.png)

Changes take effect immediately, the updated instructions are reflected in `llms.txt` as soon as you save.

### Previewing the Output

To verify how your instructions appear to agents, fetch the portal's `llms.txt` directly:

```text
GET /{orgName}/views/{viewName}/llms.txt
```

Your LLM Instructions will appear at the top of the file, followed by the portal's API and workflow index.

![llms.txt file showing API Workflows section with workflow names, descriptions, and spec links](/img/cloud/devportal/llms-txt.png)

## Managing API Workflows

As a portal admin, you can create, edit, publish, and control the visibility of API Workflows. This page covers the full workflow lifecycle from an admin perspective.

### Creating a Workflow

1. In the Developer Portal, navigate to **Admin - Settings** and select the portal.
2. Open the **API Workflows** section.
3. Click **Create**.
4. Fill in the workflow details:

| Field | Description |
|---|---|
| **Name** | A short, task-oriented name (e.g., "Place an Order", "Register a Webhook") |
| **Description** | One to two sentences explaining the goal of the workflow and when to use it |
| **Arazzo Specification** | The machine readable workflow definition in Arazzo format |
| **Agent Prompt** | Natural language guidance for AI agents on when and how to invoke the workflow |
| **Agent Visibility** | Controls whether the workflow is surfaced to AI agents. Set to **Visible** to include it in `llms.txt` and `api-workflows.md`, or **Hidden** to exclude it from agent facing surfaces while keeping it accessible to human users in the portal |

![API workflow creation form showing Basic info step with Name, Description, Portal visibility, and Agent visibility fields](/img/cloud/devportal/api-workflow-creation.png)

5. Click **Save as Draft** to save without publishing, or **Publish** to make the workflow live immediately.

### Editing a Workflow

1. Navigate to **API Workflows** in the admin settings.
2. Select the workflow you want to edit.
3. Make your changes in the editor.
4. Click **Save** to update a published workflow, or **Save as Draft** to unpublish it while editing.

### Publishing and Unpublishing

Workflows must be explicitly published to become visible to consumers. Draft workflows are only visible within the admin console.

To publish a workflow:

1. Open the workflow in the admin settings console.
2. Click **Publish**.

To unpublish:

1. Open the workflow.
2. Click **Unpublish** (or **Save as Draft**). The workflow is removed from the portal and from `llms.txt` / `api-workflows.md` immediately.

### Controlling Visibility

Visibility is controlled independently for human users and AI agents.

#### Portal UI Visibility

Determines whether the workflow appears in the developer portal for human users.

- **Visible** — appears in the portal's API Workflows section and in search results
- **Hidden** — not shown in the portal UI; still accessible via direct URL if the consumer has the handle

#### Agent Visibility

Determines whether the workflow is exposed to AI agents via machine readable surfaces.

- **Visible** — included in `llms.txt` and `api-workflows.md`
- **Hidden** — excluded from agent-facing surfaces; human users can still see it in the portal UI
