import Image from "next/image";

import * as S from "./CardSlider.styles";

export type CardSliderProps = {
  user: string;
  city: string;
  avatar: string;
  uf: string;
  feedback: string;
  backgroundImage: string;
};

function CardSlider({
  user,
  city,
  avatar,
  uf,
  feedback,
  backgroundImage,
}: CardSliderProps) {
  return (
    <S.Wrapper>
      <Image
        alt="feedback image"
        src={backgroundImage}
        width={588}
        height={400}
        objectFit="cover"
      />
      <S.Content>
        <S.Feedback>{feedback}</S.Feedback>
        <S.BoxInfo>
          <Image alt="avatar image" src={avatar} width={50} height={50} />
          <S.Info>
            <h4>{user}</h4>
            <span>
              {city} &bull; {uf}
            </span>
          </S.Info>
        </S.BoxInfo>
      </S.Content>
    </S.Wrapper>
  );
}

export default CardSlider;
