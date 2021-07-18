import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: grid;

    ${theme.media.lessThan("medium")`
      justify-items: center;


    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 1fr;
    background-color: ${theme.palette.white.main};
  `}
`;

export const Presentation = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xxlarge};
    padding-left: calc(${theme.spacings.large} * 2);
    z-index: ${theme.zIndex.drawer};

    ${theme.media.lessThan("large")`
      padding-left: ${theme.spacings.medium};

    `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSizes.xxlarge};
    font-weight: ${theme.typography.fontWeightMedium};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const Message = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSizes.medium};
    font-weight: ${theme.typography.fontWeightMedium};
    margin-bottom: ${theme.spacings.small};
    max-width: 58rem;
    color: ${theme.palette.gray.main};
  `}
`;

export const Question = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSizes.medium};
    font-weight: ${theme.typography.fontWeightBold};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const wrapperButton = styled.div`
  ${({ theme }) => css`
    button:first-child {
      margin-right: ${theme.spacings.xsmall};
    }

    justify-content: space-between;
    ${theme.media.lessThan("medium")`
      display: flex;
      flex-direction: column;
      align-items: center;

      button:first-child {
        margin-right: 0;
      }

      button:first-child {
        margin-bottom: ${theme.spacings.xsmall}
      }

    `}
  `}
`;

export const wrapperImages = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;

    img {
      width: 40rem !important;
    }

    ${theme.media.lessThan("large")`

      position: absolute;
      right: 0;
      bottom: 0;
    `}

    ${theme.media.lessThan("medium")`
      img {
        width: 51rem !important;
      }
    `}
  `}
`;

export const ArcCircle = styled.img`
  ${({ theme }) => css`
    position: absolute;
    z-index: ${theme.zIndex.base};
    top: 17rem;
    left: 8rem;
    height: 10rem;
  `}
`;

export const Circle = styled.div`
  ${({ theme }) => css`
    position: absolute;
    border-radius: 50%;
    background-color: ${theme.palette.white.main};
    width: 8rem;
    height: 8rem;
    top: 1.6rem;
    left: 5.5rem;
    z-index: ${theme.zIndex.base};
  `}
`;

export const Doubt = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSizes.small};
    font-weight: ${theme.typography.fontWeightMedium};
    color: ${theme.palette.gray.main};
    margin-top: ${theme.spacings.xsmall};

    a {
      text-decoration: none;
      color: ${theme.palette.primary.main};
      border-bottom: 0.1rem solid ${theme.palette.primary.main};
    }

    ${theme.media.lessThan("medium")`
      width: 40rem;
      text-align: center;


    `}
  `}
`;
