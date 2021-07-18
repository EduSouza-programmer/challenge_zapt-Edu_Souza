import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import welcomeMock from "./Welcome.mock";
import Welcome, { WelcomeProps } from ".";

const WrapperCenter = styled.div`
  display: grid;
  align-items: center;
  height: 100vh;
  max-width: 120rem;
  margin: 0 auto;
  padding: 7rem;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Components/Welcome",
  component: Welcome,
  argTypes: {
    username: {
      type: { required: true },
      description: "Welcome banner username",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    message: {
      type: { required: true },
      description: "A message for user",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    imageBanner: {
      description: "Image URL",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
  },
  args: welcomeMock,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    backgrounds: {
      default: "light",
    },
    layout: "fullscreen",
  },
  decorators: [defaultDecorator],
} as Meta<WelcomeProps>;

export const Default: Story<WelcomeProps> = (args) => <Welcome {...args} />;
