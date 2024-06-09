import FiveSizeTitleText from "@/_src/components/elements/titles/FiveSizeTitle/FiveSizeTitle";
import { FooterBrandBoxLeftContext } from "@/app/magazine-mock-site/_configs/contexts/commonContexts";

const FooterBrandBoxLeftContentTop = () => {
  return (
    <FiveSizeTitleText
      text={FooterBrandBoxLeftContext.contentTop.text}
    />
  )
}

export default FooterBrandBoxLeftContentTop;