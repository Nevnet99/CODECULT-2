import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Example } from "./Example";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "COMPONENTS/Example",
  component: Example,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => (
  <Example {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
