import FiveSizeTitleText from "@/_src/components/elements/titles/FiveSizeTitle/FiveSizeTitle";
import { FooterBrandBoxRightContext } from "@/app/magazine-mock-site/_configs/contexts/commonContexts";
const FooterBrandBoxRightContentTop = () => {
  return (
    <FiveSizeTitleText
      text={FooterBrandBoxRightContext.contentTop.text}
    />
  )
}

export default FooterBrandBoxRightContentTop;