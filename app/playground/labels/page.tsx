import ArticleLabel from "@/_src/components/elements/labels/ArticleLabel/ArticleLabel";
import LabelLinks from "@/_src/components/elements/links/LabelLink/LabelLink";
import DynamicTitle from "@/_src/components/elements/titles/DynamicTitle/DynamicTitle";
import FlexBox from "@/_src/components/layouts/FlexBox/FlexBox";
import LayoutSectionInner from "@/_src/components/layouts/LayoutSecitionInner/LayoutSecitionInner";
import LayoutSection from "@/_src/components/layouts/LayoutSection/LayoutSection";

const PlaygroundLabel = () => {
  return (
    <LayoutSection>
      <DynamicTitle tag={"h2"} text={"Label Elements"} />
      <LayoutSectionInner>
        <DynamicTitle tag={"h3"} text={"ArticleLabel"} />
        <FlexBox type={"start"} direction={"row"}>
          <ArticleLabel text={"News"} />
          <ArticleLabel text={"Blog"} />
        </FlexBox>
      </LayoutSectionInner>
      <LayoutSectionInner>
        <DynamicTitle tag={"h3"} text={"LabelLinks"} />
        <FlexBox type={"start"} direction={"row"}>
          <LabelLinks text={"Inner Link"} linkTo={"#"} />
          <LabelLinks text={"External Link"} linkTo={"#"} isExternal={true} />
        </FlexBox>
      </LayoutSectionInner>
    </LayoutSection>
  )
}

export default PlaygroundLabel;