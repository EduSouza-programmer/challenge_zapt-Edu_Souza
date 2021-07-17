import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import Quotes, { QuotesProps } from ".";

const WrapperCenter = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100vh;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Quotes",
  component: Quotes,
  argTypes: {
    example: {
      description: "",
      control: { type: "" },
      options: ["small", "medium", "large"],

      table: {
        category: "choices",
        type: {
          summary: "small | medium | large",
          detail: "",
        },
      },
    },
  },
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    backgrounds: {
      default: "light",
    },
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
  },
  decorators: [defaultDecorator],
} as Meta<QuotesProps>;

export const Default: Story<QuotesProps> = () => <Quotes />;
