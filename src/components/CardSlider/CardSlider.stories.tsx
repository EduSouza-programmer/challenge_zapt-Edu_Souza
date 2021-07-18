import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import mockCardSlider from "./CardSlider.mock";
import CardSlider, { CardSliderProps } from ".";

const WrapperCenter = styled.div`
  display: grid;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Components/CardSlider",
  component: CardSlider,
  argTypes: {
    user: {
      type: { required: true },
      description: "Name card user",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    city: {
      type: { required: true },
      description: "User city",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    avatar: {
      type: { required: true },
      description: "User avatar",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    uf: {
      type: { required: true },
      description: "User uf",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    feedback: {
      type: { required: true },
      description: "User feedback",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    backgroundImage: {
      type: { required: true },
      description: "Card background image",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
  },
  args: mockCardSlider,
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
} as Meta<CardSliderProps>;

export const Default: Story<CardSliderProps> = (args) => (
  <CardSlider {...args} />
);
