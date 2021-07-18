import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    h2 {
      font-size: calc(${theme.typography.fontSizes.huge} - 12px);
      font-weight: ${theme.typography.fontWeightLight};
      text-align: center;
      margin-bottom: ${theme.spacings.xlarge};
      margin-top: ${theme.spacings.xxlarge};
    }

    .slick-slider {
      margin-bottom: ${theme.spacings.xxlarge};
    }

    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.palette.primary.main};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 8.3rem;
      height: 8.3rem;
      padding: 10rem;
      padding: ${theme.spacings.xsmall};
      transform: translate(0, -50%);
      background-color: ${theme.palette.white.main};
      z-index: ${theme.zIndex.base};
    }

    .slick-prev {
      left: -4.1rem;
      border-radius: 50%;
    }
    .slick-next {
      right: -4.1rem;
      border-radius: 50%;
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-track,
    .slick-list {
      display: flex;
    }
    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      height: 100%;
    }
    .slick-list {
      margin: 0 calc(${theme.spacings.xxsmall} * -1);
    }

    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: 2.4rem;

      li {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 100%;
        background-color: ${theme.palette.gray.main};
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;
        &.slick-active {
          background: ${theme.palette.primary.main};
        }
      }
      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }
  `}
`;
