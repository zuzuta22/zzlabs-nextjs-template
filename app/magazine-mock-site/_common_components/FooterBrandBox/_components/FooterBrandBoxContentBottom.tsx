import { FooterBrandBoxLeftContext } from "@/app/magazine-mock-site/_configs/contexts/commonContexts";
import FooterBrandBoxLeftContentBottom from "./FooterBrandBoxLeft/FooterBrandBoxLeftContentBottom";

const FooterBrandBoxContentBottom = () => {
  return (
    <FooterBrandBoxLeftContentBottom
      linkTo={FooterBrandBoxLeftContext.contentBottom.linkTo}
      imageItem={FooterBrandBoxLeftContext.contentBottom.imageItem}
    />
  )
}

export default FooterBrandBoxContentBottom;