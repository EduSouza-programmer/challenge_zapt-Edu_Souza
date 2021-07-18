import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import mockCardSlider from "./CardSlider.mock";
import CardSlider from ".";

const props = mockCardSlider;

describe("<CardSlider />", () => {
  it("should render all required props correctly", () => {
    renderWithTheme(<CardSlider {...props} />);

    expect(
      screen.getByRole("heading", { name: /patricia godoy/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /feedback image/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /avatar image/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/são paulo/i)).toBeInTheDocument();
    expect(screen.getByText(/sp/i)).toBeInTheDocument();
    expect(screen.getByText(props.feedback)).toBeInTheDocument();
  });
});
