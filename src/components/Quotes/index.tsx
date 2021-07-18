import * as S from "./Quotes.styles";

export type QuotesProps = {
  children: React.ReactNode;
};

function Quotes({ children }: QuotesProps) {
  return (
    <S.Wrapper>
      <S.QuotesTop role="img" aria-label="quotes top left" />
      {children}
      <S.QuotesBottom role="img" aria-label="quotes bottom right" />
    </S.Wrapper>
  );
}

export default Quotes;
