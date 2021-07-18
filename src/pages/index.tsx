import Welcome from "@/components/Welcome";
import mockWelcome from "@/components/Welcome/Welcome.mock";
import Carousel from "@/components/Carousel";
import mockCarousel from "@/components/Carousel/Carousel.mock";
import { Container } from "@/components/Container";

export default function Index() {
  return (
    <Container>
      <Welcome {...mockWelcome} />
      <Carousel cardSliders={mockCarousel} />
    </Container>
  );
}
