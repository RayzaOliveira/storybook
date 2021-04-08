import * as React from "react";

import { withDesign } from "storybook-addon-designs";
// import { themes } from "@storybook/theming";

import Providers from "../src/Providers";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  decorators: [withDesign],
  docs: {
    // OBS: Dark theme default of storybook
    // theme: themes.dark,
  },
};

export const decorators = [(storyFn) => <Providers>{storyFn()}</Providers>];
