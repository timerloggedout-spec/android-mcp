# android-mcp (P0)

Vercel-hosted Model Context Protocol server for **Android agentic ops** (ADB / device bridge).

Parallel to the `gh*` MCP stack and sibling of [termux-mcp](https://github.com/timerloggedout-spec/termux-mcp).

## Deploy (Vercel)

1. Connect this repo to Vercel.
2. Enable **Fluid Compute**.
3. Deploy → endpoint `https://<project>.vercel.app/mcp`.

Docs: https://vercel.com/docs/mcp/deploy-mcp-servers-to-vercel

## Tools (stubs — extend)

| Tool | Purpose |
|------|---------|
| `android_status` | ADB / host readiness |
| `android_adb` | Run adb command |
| `android_devices` | List devices |

## MCP client config

```json
{
  "mcpServers": {
    "android": {
      "url": "https://your-deployment.vercel.app/mcp"
    }
  }
}
```

## Related

- `termux-mcp`, `gh-aw_fork`, `gh-aw-mcpg_fork`, `gh-mcp_fork`, `gh_mcp_server_fork`, `agentix_fork`
- Monorepo: [termux-monorepo](https://github.com/timerloggedout-spec/termux-monorepo)

## License

MIT
