import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import Quotes from ".";

describe("<Quotes />", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(<Quotes />);

    expect(
      screen.getByRole("heading", { name: /Quotes/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
