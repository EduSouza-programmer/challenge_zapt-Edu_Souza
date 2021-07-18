import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import welcomeMock from "./Welcome.mock";
import Welcome from ".";

const props = welcomeMock;

describe("<Welcome />", () => {
  it("should render the username and message correctly when passed", () => {
    renderWithTheme(<Welcome {...props} />);

    expect(
      screen.getByRole("heading", { name: /bem vindo marcio/i })
    ).toBeInTheDocument();
    expect(screen.getByText(props.message)).toBeInTheDocument();
  });

  it("should render a image by default", () => {
    renderWithTheme(<Welcome {...props} />);

    expect(screen.getByRole("img", { name: /happy people/i })).toHaveAttribute(
      "src",
      "/img/Mask_Group.png"
    );
  });

  it("should render a image when passed", () => {
    renderWithTheme(<Welcome {...props} imageBanner="my_image" />);

    expect(screen.getByRole("img", { name: /happy people/i })).toHaveAttribute(
      "src",
      "my_image"
    );
  });
});
