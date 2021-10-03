import React, { useCallback } from "react";
import { useGlobals } from "@storybook/api";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";

export const Tool = () => {
  const [{ darkMode }, updateGlobals] = useGlobals();

  const toggleDarkMode = useCallback(
    () =>
      updateGlobals({
        darkMode: darkMode ? undefined : true,
      }),
    [darkMode]
  );

  return (
    <IconButton
      key={TOOL_ID}
      active={darkMode}
      title="Enable Dark Mode"
      onClick={toggleDarkMode}
    >
      {/*
        Checkout https://next--storybookjs.netlify.app/official-storybook/?path=/story/basics-icon--labels
        for the full list of icons
      */}
      <Icons icon="mirror" />
    </IconButton>
  );
};
