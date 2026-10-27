# API Platform Cloud documentation

Docusaurus site for the API Platform Cloud documentation (API Control Plane,
AI Workspace and Developer Portal), served at `/api-platform/docs/cloud/`.

Requires Node 20 or later (`nvm use` picks the version in `.nvmrc`).

```
npm install
npm start          # local dev server
npm run build      # production build into build/
```

Set `BASE_URL` to build for another path, for example staging:
`BASE_URL=/api-platform/docs-staging/cloud/ npm run build`.

The navigation is in `sidebars.js`; pages are under `docs/`.
