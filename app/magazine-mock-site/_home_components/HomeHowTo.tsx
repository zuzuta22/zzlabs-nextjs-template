import LinkLabelWithRightArrow from "@/_src/components/elements/links/LinkLabelWithRightArrow/LinkLabelWithRightArrow";
import SectionContentCentered from "@/_src/components/layouts/Sections/SectionContentCentered/SectionContentCentered";
import ArticleItemWithImageList from "@/_src/components/objects/ArticleItemWithImageList/ArticleItemWithImageList";
import SectionTitleCombo from "@/_src/components/objects/Titles/SectionTitleCombo/SectionTitleCombo";
import { HomeHowToLinkContext, HomeHowToPostsCotenxt, HomeHowToTitleContext } from "../_configs/contexts/HomeContexts";

const HomeHowTo = () => {
  return (
    <SectionContentCentered>
      <SectionTitleCombo
        title={HomeHowToTitleContext.title}
        subText={HomeHowToTitleContext.subText}
        type={HomeHowToTitleContext.type}
      />
      <ArticleItemWithImageList
        articleItems={HomeHowToPostsCotenxt.articleItems}
      />
      <LinkLabelWithRightArrow
        text={HomeHowToLinkContext.text}
        linkTo={HomeHowToLinkContext.linkTo}
        isExternal={HomeHowToLinkContext.isExternal}
        colorMode={HomeHowToLinkContext.colorMode}
      />
    </SectionContentCentered>
  )
}

export default HomeHowTo;