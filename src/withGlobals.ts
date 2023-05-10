import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  StoryContext,
} from "@storybook/types";
import { useEffect, useGlobals } from "@storybook/preview-api";
import { PARAM_KEY } from "./constants";

export const withGlobals = (
  StoryFn: StoryFunction<Renderer>,
  context: StoryContext
) => {
  const [globals] = useGlobals();
  const darkMode = globals[PARAM_KEY];
  const { theme } = context.globals;

  useEffect(() => {
    toggleDarkModeState({darkMode});
  }, [darkMode, theme]);

  return StoryFn();
};


function toggleDarkModeState(state: any) {
  const rootElement = document.documentElement
  if (state.darkMode) {
    rootElement.classList.add('dark');
    rootElement.setAttribute('data-theme', 'dark');
  } else {
    rootElement.classList.remove('dark');
    rootElement.removeAttribute('data-theme');
  }
}

