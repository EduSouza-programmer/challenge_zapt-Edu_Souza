// eslint-disable-next-line import/no-unresolved
import "match-media-mock";

import { renderWithTheme } from "@/utils/tests/helpers";

import carouselMock from "./Carousel.mock";
import Carousel from ".";

describe("<Carousel />", () => {
  it("should render with 3 active items", () => {
    const { container } = renderWithTheme(
      <Carousel cardSliders={carouselMock} />
    );
    expect(container.querySelectorAll(".slick-active")).toHaveLength(3);
  });
});
