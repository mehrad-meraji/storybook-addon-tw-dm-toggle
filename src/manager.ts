import { addons, types } from "@storybook/manager-api";
import {ADDON_ID, PARAM_KEY, TOOL_ID} from "./constants";
import { Tool } from "./Tool";
addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Dark Mode",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool,
    paramKey: PARAM_KEY,
  });
});
