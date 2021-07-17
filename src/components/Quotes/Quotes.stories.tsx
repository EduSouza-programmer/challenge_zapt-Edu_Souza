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

const Box = styled.div`
  width: 70rem;
  height: 20rem;
  background-color: #434347;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Components/Quotes",
  component: Quotes,
  argTypes: {
    children: {
      type: { required: true },
      description: "Quotes children",
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
  },
  args: {
    children: <Box />,
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    backgrounds: {
      default: "light",
    },
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
  },
  decorators: [defaultDecorator],
} as Meta<QuotesProps>;

export const Default: Story<QuotesProps> = (args) => <Quotes {...args} />;
