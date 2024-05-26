import { LinkLabelWithRightArrowType } from "@/_src/components/elements/links/LinkLabelWithRightArrow/LinkLabelWithRightArrow.type";
import { ArticleItemWithImageListType } from "@/_src/components/objects/ArticleItemWithImageList/ArticleItemWithImageList.types";
import { SectionTitleComboType } from "@/_src/components/objects/titles/SectionTitleCombo.module/SectionTitleCombo.types";

export const HomeLatestNewsBackgroundColor = {
  bgColor: "gray"
}

export const HomeLatestNewsTitleContext: SectionTitleComboType = {
  title: "新着記事",
  subText: "NEWS"
}

export const HomeLatestLabelLinkContext: LinkLabelWithRightArrowType = {
  text: '記事一覧',
  linkTo: '#',
  isExternal: false,
  colorMode: 'black',
}

export const HomeLatestPostsCotenxt: ArticleItemWithImageListType = {
  articleItems: [
    {
      imageItem: {
        srcPC: "/magazine-mock-site/images/dummy_01.png",
        srcSP: "/magazine-mock-site/images/dummy_01.png",
        widthPC: 300,
        heightPC: 250,
        widthSP: 300,
        heightSP: 250,
        altText: 'dummy'
      },
      labelItem: {text: 'Feature', linkTo: '#'},
      title: 'The Ocean we recommend you to go to this summer! You can see dolphines swim with you!',
      date: '2024-05-25',
      tags: [
        {tagText: 'dolphin', tagLinkTo: '#'}
      ],
      linkTo: "#"
    },
    {
      imageItem: {
        srcPC: "/magazine-mock-site/images/dummy_01.png",
        srcSP: "/magazine-mock-site/images/dummy_01.png",
        widthPC: 300,
        heightPC: 250,
        widthSP: 300,
        heightSP: 250,
        altText: 'dummy'
      },
      labelItem: {text: 'Feature', linkTo: '#'},
      title: 'The Ocean we recommend you to go to! - ver2',
      date: '2024-05-25',
      tags: [
        {tagText: 'dolphin', tagLinkTo: '#'}
      ],
      linkTo: "#"
    },
    {
      imageItem: {
        srcPC: "/magazine-mock-site/images/dummy_01.png",
        srcSP: "/magazine-mock-site/images/dummy_01.png",
        widthPC: 300,
        heightPC: 250,
        widthSP: 300,
        heightSP: 250,
        altText: 'dummy'
      },
      labelItem: {text: 'Feature', linkTo: '#'},
      title: 'The Ocean we recommend you to go to! - ver 3',
      date: '2024-05-25',
      tags: [
        {tagText: 'dolphin', tagLinkTo: '#'}
      ],
      linkTo: "#"
    }
  ]
}