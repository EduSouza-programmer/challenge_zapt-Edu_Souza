import * as S from "./Button.styles";

export type ButtonProps = {
  children: React.ReactNode;
  size?: "medium" | "large";
};

function Button({ children, size = "medium" }: ButtonProps) {
  return <S.Wrapper size={size}>{children}</S.Wrapper>;
}

export default Button;
