import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined/ArrowForwardIos";
import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos";

import Slider from "@/components/Slider";
import CardSlider, { CardSliderProps } from "@/components/CardSlider";

import * as S from "./Carousel.styles";

export type CarouselProps = {
  cardSliders: CardSliderProps[];
};

const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow: <ArrowLeft />,
  nextArrow: <ArrowRight />,
};

function Carousel({ cardSliders }: CarouselProps) {
  return (
    <S.Wrapper>
      <h2>O que as pessoas estão achando</h2>
      <Slider settings={settings}>
        {cardSliders.map((card) => (
          <CardSlider key={card.user} {...card} />
        ))}
      </Slider>
    </S.Wrapper>
  );
}

export default Carousel;
