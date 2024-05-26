import { CategoryLinkLabelType } from "@/_src/components/elements/links/CategoryLinkLabel/CategoryLinkLabel.types";
import { ResponsiveImageType } from "../../../elements/images/ResponsiveImage/ResponsiveImage.type";

export type ArticleItemWithImageType = {
  imageItem: ResponsiveImageType;
  labelItem: CategoryLinkLabelType;
  title: string;
  date: string;
  tags?: TagItemType[],
  linkTo: string;
};

export type TagItemType = {
  tagText: string;
  tagLinkTo: string
};