import { renderWithTheme } from "@/utils/tests/helpers";

import theme from "@/styles/themes/light.theme";
import { Container } from ".";

describe("<Container />", () => {
  it("should render with correctly grid", () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyleRule(
      "max-width",
      theme.gridLayout.container
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  max-width: 120rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 4.0rem;
  padding-right: 4.0rem;
  margin-top: 5.6rem;
}

<div
  class="c0"
>
  <span>
    Won Games
  </span>
</div>
`);
  });
});
