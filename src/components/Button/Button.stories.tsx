import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import Button, { ButtonProps } from ".";

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
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: {
      type: { required: true },
      description: "Button children",
      control: { type: "null" },

      table: {
        category: "logics",
        type: {
          summary: "React.ReactNode",
          detail:
            "type ReactNode = boolean | ReactChild | ReactFragment | ReactPortal | null | undefined",
        },
      },
    },
    size: {
      description: "Button size",
      control: { type: "select" },
      options: ["medium", "large"],

      table: {
        category: "choices",
        type: {
          summary: "size",
          detail: `size?: "medium" | "large" | undefined`,
        },
      },
    },
  },
  args: {
    children: "Criar um grupo",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    backgrounds: {
      default: "light",
    },
    layout: "fullscreen",
  },
  decorators: [defaultDecorator],
} as Meta<ButtonProps>;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;
