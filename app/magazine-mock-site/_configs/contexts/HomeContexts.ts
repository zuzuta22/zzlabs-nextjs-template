import { LinkLabelWithRightArrowType } from "@/_src/components/elements/links/LinkLabelWithRightArrow/LinkLabelWithRightArrow.type";
import { ArticleFlashDisplayBoxType } from "@/_src/components/objects/ArticleFlashDisplayBox/ArticleFlashDisplayBox.types";
import { ArticleItemWithImageListType } from "@/_src/components/objects/ArticleItemWithImageList/ArticleItemWithImageList.types";
import { ArticleCarouselWithImageItemsType } from "@/_src/components/objects/Cards/ArticleCarouselWithImageItem/ArticleCarouselWithImageItem.types";
import { SectionTitleComboType } from "@/_src/components/objects/Titles/SectionTitleCombo/SectionTitleCombo.types";

export const HomeLatestNewsBackgroundColor = {
  bgColorClass: "u-bg-color__gray--5"
}

export const FVCarouselItems: ArticleCarouselWithImageItemsType = {
  cardItems: [
    {
      cardItem: {
        title: "Carousel Item Read More 5",
        date: "2024/06/05",
        linkTo: "#",
        categoryItem: {
          categoryName: "Project",
          categoryLinkTo: "#/?cat=project"
        },
        imageItem: {
          srcPC: "/magazine-mock-site/images/dummy_fv.jpg",
          srcSP: "/magazine-mock-site/images/dummy_fv.jpg",
          srcWebpPC: "/magazine-mock-site/images/dummy_fv.jpg.webp",
          srcWebpSP: "/magazine-mock-site/images/dummy_fv.jpg.webp",
          widthPC: 640,
          heightPC: 360,
          altText: "Carousel Item Read More 5"
        }
      }
    },
    {
      cardItem: {
        title: "Carousel Item Read More 4",
        date: "2024/06/04",
        linkTo: "#",
        categoryItem: {
          categoryName: "Blog",
          categoryLinkTo: "#/?cat=blog"
        },
        imageItem: {
          srcPC: "/magazine-mock-site/images/dummy_fv.jpg",
          srcSP: "/magazine-mock-site/images/dummy_fv.jpg",
          srcWebpPC: "/magazine-mock-site/images/dummy_fv.jpg.webp",
          srcWebpSP: "/magazine-mock-site/images/dummy_fv.jpg.webp",
          widthPC: 640,
          heightPC: 360,
          altText: "Carousel Item Read More 5"
        }
      }
    },
    {
      cardItem: {
        title: "Carousel Item Read More 3",
        date: "2024/06/03",
        linkTo: "#",
        categoryItem: {
          categoryName: "News",
          categoryLinkTo: "#/?cat=news"
        },
        imageItem: {
          srcPC: "/magazine-mock-site/images/dummy_fv.jpg",
          srcSP: "/magazine-mock-site/images/dummy_fv.jpg",
          srcWebpPC: "/magazine-mock-site/images/dummy_fv.jpg.webp",
          srcWebpSP: "/magazine-mock-site/images/dummy_fv.jpg.webp",
          widthPC: 640,
          heightPC: 360,
          altText: "Carousel Item Read More 5"
        }
      }
    },
    {
      cardItem: {
        title: "Carousel Item Read More 2",
        date: "2024/06/02",
        linkTo: "#",
        categoryItem: {
          categoryName: "Tech",
          categoryLinkTo: "#/?cat=tech"
        },
        imageItem: {
          srcPC: "/magazine-mock-site/images/dummy_fv.jpg",
          srcSP: "/magazine-mock-site/images/dummy_fv.jpg",
          srcWebpPC: "/magazine-mock-site/images/dummy_fv.jpg.webp",
          srcWebpSP: "/magazine-mock-site/images/dummy_fv.jpg.webp",
          widthPC: 640,
          heightPC: 360,
          altText: "Carousel Item Read More 5"
        }
      }
    },
    {
      cardItem: {
        title: "Carousel Item Read More 1",
        date: "2024/06/01",
        linkTo: "#",
        categoryItem: {
          categoryName: "Info",
          categoryLinkTo: "#/?cat=info"
        },
        imageItem: {
          srcPC: "/magazine-mock-site/images/dummy_fv.jpg",
          srcSP: "/magazine-mock-site/images/dummy_fv.jpg",
          srcWebpPC: "/magazine-mock-site/images/dummy_fv.jpg.webp",
          srcWebpSP: "/magazine-mock-site/images/dummy_fv.jpg.webp",
          widthPC: 640,
          heightPC: 360,
          altText: "Carousel Item Read More 5"
        }
      }
    }
  ]
}

export const HomeLatestNewsTitleContext: SectionTitleComboType = {
  title: "新着記事",
  subText: "NEWS",
  isShowUp: true,
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
      title: 'The Ocean we recommend you to go to this summer! You can meet dolphines swimming with you!',
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
        {tagText: 'dolphin', tagLinkTo: '#'},
        {tagText: 'ocean', tagLinkTo: '#'},
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

export const HomeInformationTitleContext: SectionTitleComboType = {
  title: "お知らせ",
  subText: "INFORMATION",
  type: "horizon",
  isShowUp: true,
}

export const HomeInformationLinkContext: LinkLabelWithRightArrowType = {
  text: 'もっと見る',
  linkTo: '#',
  isExternal: false,
  colorMode: 'black',
}

export const HomeInformationArticleItemContext: ArticleFlashDisplayBoxType = {
  title: "This is the owned media mock site. Just released on 26th May.",
  linkTo: "#",
  date: '2024/05/26'
}

export const HomeHowToTitleContext: SectionTitleComboType = {
  title: "使い方",
  subText: "HOW TO USE",
  type: 'vertical',
  isShowUp: true,
}

export const HomeHowToPostsCotenxt: ArticleItemWithImageListType = {
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
      title: 'The Ocean we recommend you to go to this summer! You can meet dolphines swimming with you!',
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
        {tagText: 'dolphin', tagLinkTo: '#'},
        {tagText: 'ocean', tagLinkTo: '#'},
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

export const HomeHowToLinkContext: LinkLabelWithRightArrowType = {
  text: 'もっと見る',
  linkTo: '#',
  isExternal: false,
  colorMode: 'black',
}