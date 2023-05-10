import React, { memo, useCallback, useEffect } from "react";
import {useGlobals, useStorybookApi} from "@storybook/manager-api";

import { addons } from '@storybook/preview-api';

import { IconButton } from "@storybook/components";
import { ADDON_ID, PARAM_KEY, TOOL_ID } from "./constants";
import {FORCE_RE_RENDER} from "@storybook/core-events";
import {themes} from "@storybook/theming";

export const Tool = memo(function MyAddonSelector() {
  const [globals, updateGlobals] = useGlobals();
  const api = useStorybookApi();

  const isActive = [true, "true"].includes(globals[PARAM_KEY]);

  const toggleDarkMode = useCallback(() => {
    const newIsActive = !isActive;
    updateGlobals({
      [PARAM_KEY]: newIsActive,
    });

    api.setOptions({
      theme: newIsActive ? themes.dark : themes.light,
    })

    addons.getChannel().emit(FORCE_RE_RENDER);
  }, [isActive]);

  // useEffect(() => {
  //   api.setAddonShortcut(ADDON_ID, {
  //     label: "Toggle Dark Mode (E)",
  //     defaultShortcut: ["E"],
  //     actionName: 'twDarkMode',
  //     showInMenu: false,
  //     action: toggleDarkMode,
  //   });
  // }, [toggleDarkMode, api]);

  return (
    <IconButton
      key={TOOL_ID}
      active={isActive}
      title="toggle dark mode for tailwind"
      onClick={toggleDarkMode}
    >
      { isActive ?
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8C6.8 3.1 3 7.1 3 12c0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2-.4-.3-.9-.2-1.2.1-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"/></svg> :
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5-5 2.2-5 5zm5-3c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm1-4V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1zm6.1-.1c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.3.4-1 0-1.4zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zm-3.3 5.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1.4-1.4zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1s-1 .4-1 1zm-6.1.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4c-.4.3-.4 1 0 1.4zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1zm4.3-7.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.3.5.4.8.4s.5-.1.7-.3c.4-.4.4-1 0-1.4L6.3 4.9z"/></svg> }
    </IconButton>
  );
});
