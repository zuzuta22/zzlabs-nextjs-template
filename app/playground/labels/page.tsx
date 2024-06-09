import ArticleLabel from "@/_src/components/elements/labels/ArticleLabel/ArticleLabel";
import LinkLabel from "@/_src/components/elements/links/LinkLabel/LinkLabel";
import DynamicTitle from "@/_src/components/elements/titles/DynamicTitle/DynamicTitle";
import FlexBox from "@/_src/components/layouts/Box/FlexBox/FlexBox";
import LayoutSectionInner from "@/_src/components/layouts/LayoutSecitionInner/LayoutSecitionInner";
import LayoutSection from "@/_src/components/layouts/Sections/LayoutSection/LayoutSection";

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
          <LinkLabel text={"Inner Link"} linkTo={"#"} />
          <LinkLabel text={"External Link"} linkTo={"#"} isExternal={true} />
        </FlexBox>
      </LayoutSectionInner>
    </LayoutSection>
  )
}

export default PlaygroundLabel;