import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import Button from ".";

describe("<Button />", () => {
  it("should render the children correctly", () => {
    renderWithTheme(<Button>My button</Button>);

    expect(
      screen.getByRole("button", { name: /my button/i })
    ).toBeInTheDocument();
  });

  it("should render a medium size as default", () => {
    renderWithTheme(<Button>My button</Button>);

    expect(screen.getByRole("button")).toHaveStyle({
      height: "4rem",
    });
  });
  it("should render a large size when passed ", () => {
    renderWithTheme(<Button size="large">My button</Button>);

    expect(screen.getByRole("button")).toHaveStyle({
      height: "5rem",
    });
  });
});
