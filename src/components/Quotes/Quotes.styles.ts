import styled, { css } from "styled-components";

const Quotes = styled.div`
  position: absolute;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const QuotesTop = styled(Quotes)`
  ${({ theme }) => css`
    background-color: ${theme.palette.red.main};
    width: 6.2rem;
    height: 6.2rem;
    top: -2rem;
    left: -2rem;
  `}
`;

export const QuotesBottom = styled(Quotes)`
  ${({ theme }) => css`
    background-color: ${theme.palette.primary.main};
    width: 10rem;
    height: 10rem;
    bottom: -2rem;
    right: -2rem;
  `}
`;
