import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.gridLayout.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: ${theme.spacings.large};
    padding-right: ${theme.spacings.large};
    margin-top: ${theme.spacings.xxlarge};
  `}
`;
