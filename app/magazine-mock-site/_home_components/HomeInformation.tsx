import SectionContentCentered from "@/_src/components/layouts/Sections/SectionContentCentered/SectionContentCentered";
import TitleElementWithLinkLabel from "@/_src/components/layouts/Titles/TitleElementWithLinkLabel/TitleElementWithLinkLabel";
import ArticleFlashDisplayBox from "@/_src/components/objects/ArticleFlashDisplayBox/ArticleFlashDisplayBox";
import { HomeInformationArticleItemContext, HomeInformationLinkContext, HomeInformationTitleContext } from "../_configs/contexts/HomeContexts";

const HomeInformation = () => {
  return (
    <>
      <SectionContentCentered>
        <TitleElementWithLinkLabel
          titleItem={HomeInformationTitleContext}
          linkLabelItem={HomeInformationLinkContext}
        />
        <ArticleFlashDisplayBox
          title={HomeInformationArticleItemContext.title}
          linkTo={HomeInformationArticleItemContext.linkTo}
          date={HomeInformationArticleItemContext.date}
        />
      </SectionContentCentered>
    </>
  )
}

export default HomeInformation;
