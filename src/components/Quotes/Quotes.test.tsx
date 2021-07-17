import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import Quotes from ".";

describe("<Quotes />", () => {
  it("should render a children correctly", () => {
    renderWithTheme(
      <Quotes>
        <h1>children</h1>
      </Quotes>
    );

    expect(
      screen.getByRole("heading", { name: /children/i })
    ).toBeInTheDocument();
  });

  it("should render two quotes correctly", () => {
    renderWithTheme(
      <Quotes>
        <h1>children</h1>
      </Quotes>
    );

    expect(
      screen.getByRole("img", { name: /quotes top left/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /quotes bottom right/i })
    ).toBeInTheDocument();
  });
});
