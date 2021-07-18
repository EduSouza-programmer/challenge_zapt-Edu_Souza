import styled, { css, DefaultTheme } from "styled-components";

import { ButtonProps } from ".";

type WrapperProps = Pick<ButtonProps, "size">;

const wrapperModifiers = {
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.typography.fontSizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.typography.fontSizes.medium};
    padding: ${theme.spacings.xsmall} ${theme.spacings.large};
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size }) => css`
    background-color: #334bc8;

    color: ${theme.palette.white.main};
    border: 0;
    border-radius: ${theme.border.radius};
    text-decoration: none;

    ${!!size && wrapperModifiers[size!](theme)}
  `}
`;
