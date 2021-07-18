import Image from "next/image";

import Quotes from "@/components/Quotes";
import Button from "@/components/Button";
import * as S from "./Welcome.styles";

export type WelcomeProps = {
  username: string;
  message: string;
  imageBanner?: string;
};

function Welcome({
  username,
  message,
  imageBanner = "/img/Mask_Group.png",
}: WelcomeProps) {
  return (
    <S.Wrapper>
      <Quotes>
        <S.Content>
          <S.Presentation>
            <S.Title>Bem vindo {username},</S.Title>
            <S.Message>{message}</S.Message>

            <S.Question>O que você prefere?</S.Question>
            <S.wrapperButton>
              <Button size="large">Criar um grupo</Button>
              <Button size="large">Entrar em um grupo</Button>
            </S.wrapperButton>
          </S.Presentation>
          <S.wrapperImages>
            <div>
              <S.Circle />
              <S.ArcCircle src="img/arc_circle.svg" />
            </div>
            <Image
              alt="happy people"
              width={443}
              height={353}
              src={imageBanner}
            />
          </S.wrapperImages>
        </S.Content>
      </Quotes>
      <S.Doubt>
        Qualquer dúvida que você tiver é só nos chamar no nosso número de &nbsp;
        <a href="replace">WhatsApp</a>.
      </S.Doubt>
    </S.Wrapper>
  );
}

export default Welcome;
