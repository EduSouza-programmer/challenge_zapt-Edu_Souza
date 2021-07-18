import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    max-width: 58rem;

    > div {
      border-radius: 1rem !important;
    }

    &::before {
      content: "";
      position: absolute;
      background: ${theme.palette.black.main};
      opacity: 0.3;
      inset: 0;
      z-index: ${theme.zIndex.base};
      border-radius: 1rem;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: ${theme.zIndex.appBar};
    color: ${theme.palette.white.main};
    padding: ${theme.spacings.small};
  `}
`;

export const Feedback = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    font-size: ${theme.typography.fontSizes.xlarge};
  `}
`;

export const BoxInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    h4 {
      font-size: ${theme.typography.fontSizes.medium};
      font-weight: ${theme.typography.fontWeightMedium};
    }

    span {
      font-size: ${theme.typography.fontSizes.xsmall};
      font-weight: ${theme.typography.fontWeightMedium};
    }
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xsmall};
  `}
`;
