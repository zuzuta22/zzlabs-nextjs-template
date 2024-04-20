import LabelLinks from "@/_src/components/elements/links/LabelLink/LabelLink";
import PageTurnLink from "@/_src/components/elements/links/PageTurnLink/PageTurnLink";
import DynamicTitle from "@/_src/components/elements/titles/DynamicTitle/DynamicTitle";
import LayoutSectionInner from "@/_src/components/layouts/LayoutSecitionInner/LayoutSecitionInner";
import LayoutSection from "@/_src/components/layouts/LayoutSection/LayoutSection";

const PlaygroundLabelLinks = () => {
  return (
    <LayoutSection>
      <DynamicTitle tag={"h2"} text={"Label Links"} />
      <LayoutSectionInner>
        <LabelLinks text={"Inner Link"} linkTo={"#"} />
        <LabelLinks text={"External Link"} linkTo={"#"} isExternal={true} />
      </LayoutSectionInner>
      <LayoutSectionInner>
        <DynamicTitle tag={'h3'} text={"PageTurnLink"} />
        <PageTurnLink linkTo={"#"} type={"prev"} />
        <PageTurnLink linkTo={"#"} type={"next"} />
      </LayoutSectionInner>
    </LayoutSection>
  )
};

export default PlaygroundLabelLinks;