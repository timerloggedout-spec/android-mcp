import { createMcpHandler } from "mcp-handler";
import { z } from "zod";

const handler = createMcpHandler((server) => {
  server.tool(
    "android_status",
    "Return Android / ADB host status stub (extend with real ADB or scrcpy bridge)",
    {},
    async () => {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                platform: "android",
                status: "ready",
                note: "P0 skeleton — wire to adb / adbkit or device farm",
                tools: ["android_status", "android_adb", "android_devices"],
              },
              null,
              2
            ),
          },
        ],
      };
    }
  );

  server.tool(
    "android_adb",
    "Run an adb command (stub — implement via adb binary or remote device bridge)",
    {
      args: z.string().describe("Arguments after 'adb', e.g. 'shell pm list packages'"),
      serial: z.string().optional().describe("Device serial"),
    },
    async ({ args, serial }) => {
      return {
        content: [
          {
            type: "text",
            text: `STUB android_adb${serial ? ` -s ${serial}` : ""}: adb ${args}. Wire to real ADB host.`,
          },
        ],
      };
    }
  );

  server.tool(
    "android_devices",
    "List connected Android devices (stub)",
    {},
    async () => {
      return {
        content: [
          {
            type: "text",
            text: "STUB android_devices: would run `adb devices -l`. Implement against ADB host.",
          },
        ],
      };
    }
  );
});

export { handler as GET, handler as POST, handler as DELETE };
