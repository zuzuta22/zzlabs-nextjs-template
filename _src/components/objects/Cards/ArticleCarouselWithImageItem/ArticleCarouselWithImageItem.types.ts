import { ResponsiveImageType } from "@/_src/components/elements/images/ResponsiveImage/ResponsiveImage.type";

export type ArticleCarouselWithImageItemType = {
  cardItem: {
    title: string;
    date: string;
    linkTo: string;
    categoryItem: {
      categoryName: string;
      categoryLinkTo: string;
    }
    imageItem?: ResponsiveImageType;
  }
}

export type ArticleCarouselWithImageItemsType = {
  cardItems: ArticleCarouselWithImageItemType[];
}