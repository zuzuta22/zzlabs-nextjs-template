import AddressText from "@/_src/components/elements/texts/AddressText/AddressText";
import DynamicTitle from "@/_src/components/elements/titles/DynamicTitle/DynamicTitle";
import LayoutSectionInner from "@/_src/components/layouts/LayoutSecitionInner/LayoutSecitionInner";
import LayoutSection from "@/_src/components/layouts/Sections/LayoutSection/LayoutSection";
import { TextContext } from "./context";

const PlaygroundTexts = () => {
  return (
    <>
      <LayoutSection>
        <DynamicTitle tag={"h2"} text={"Text Elements"} />
        <LayoutSectionInner>
          <DynamicTitle tag={"h3"} text={"AddressText"} />
          <AddressText 
            zip={TextContext.addressText.zip}
            address1={TextContext.addressText.address1}
            address2={TextContext.addressText.address2}
          />
        </LayoutSectionInner>
      </LayoutSection>
    </>
  )
}

export default PlaygroundTexts;