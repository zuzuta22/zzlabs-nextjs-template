import EmblaCarousel from "@/_src/components/objects/Carousels/EmblaCarousel/EmblaCarousel";
import { FVCarouselItems } from "../_configs/contexts/HomeContexts";

const HomeFVCarousel = () => {
  return (
    <EmblaCarousel cardItems={FVCarouselItems.cardItems} options={{ loop: true }}/>
  )
}

export default HomeFVCarousel;