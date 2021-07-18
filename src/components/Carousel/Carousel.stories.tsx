import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import carouselMock from "./Carousel.mock";
import Carousel, { CarouselProps } from ".";

const WrapperCenter = styled.div`
  max-width: 120rem;
  height: 100vh;
  margin: 4rem auto;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Components/Carousel",
  component: Carousel,
  argTypes: {
    cardSlider: {
      type: { required: true },
      description: "CardSlider array",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "CardSliderProps[]",
          detail: `(alias) type CardSliderProps = {
            user: string;
            city: string;
            avatar: string;
            uf: string;
            feedback: string;
            backgroundImage: string;
        }`,
        },
      },
    },
  },
  args: {
    cardSliders: carouselMock,
  },
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
} as Meta<CarouselProps>;

export const Default: Story<CarouselProps> = (args) => <Carousel {...args} />;
