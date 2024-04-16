import LayoutSectionInner from "@/_src/components/layouts/layout-secition-inner/layout-section-inner";
import LayoutSection from "@/_src/components/layouts/layout-section/layout-section";
import LabelLinks from "@/_src/components/ui/links/label-link/label-link";
import DynamicTitle from "@/_src/components/ui/titles/dynamic-title/dynamic-title";

const PlaygroundLabelLinks = () => {
  return (
    <LayoutSection>
      <DynamicTitle tag={"h2"} text={"Label Links"} />
      <LayoutSectionInner>
        <LabelLinks text={"Inner Link"} linkTo={"#"} />
        <LabelLinks text={"External Link"} linkTo={"#"} isExternal={true} />
      </LayoutSectionInner>
    </LayoutSection>
  )
};

export default PlaygroundLabelLinks;