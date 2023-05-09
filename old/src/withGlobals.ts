import { StoryFn as StoryFunction, StoryContext } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";

export const withGlobals = (StoryFn: StoryFunction, context: StoryContext) => {
  const [{ darkMode }] = useGlobals();
  useEffect(() => {
    toggleDarkModeState({
      darkMode
    });
  }, [darkMode]);

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
