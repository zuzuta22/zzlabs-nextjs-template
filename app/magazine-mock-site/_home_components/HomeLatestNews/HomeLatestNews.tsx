import Section from "@/_src/components/layouts/Sections/Section/Section";
import TitleElementWithLinkLabel from "@/_src/components/layouts/Titles/TitleElementWithLinkLabel/TitleElementWithLinkLabel";
import ArticleItemWithImageList from "@/_src/components/objects/ArticleItemWithImageList/ArticleItemWithImageList";
import { HomeLatestLabelLinkContext, HomeLatestNewsBackgroundColor, HomeLatestNewsTitleContext, HomeLatestPostsCotenxt } from "../../_configs/contexts/HomeContexts";

const HomeLatestNews = () => {
  return (
    <Section bgColor={HomeLatestNewsBackgroundColor.bgColor}>
      <TitleElementWithLinkLabel
        titleItem={HomeLatestNewsTitleContext}
        linkLabelItem={HomeLatestLabelLinkContext}
      />
      <ArticleItemWithImageList
        articleItems={HomeLatestPostsCotenxt.articleItems}
      />
    </Section>
  )
}

export default HomeLatestNews;