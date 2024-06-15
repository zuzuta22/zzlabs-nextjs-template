import ResponsiveImage from "@/_src/components/elements/images/ResponsiveImage/ResponsiveImage";
import styles from "./ArticleCarouselWithImageItem.module.scss";
import { ArticleCarouselWithImageItemType } from "./ArticleCarouselWithImageItem.types";

const ArticleCarouselWithImageItem = (props: ArticleCarouselWithImageItemType) => {
  const { cardItem } = props;

  return (
    <div className={styles['article-item']}>
      <a href={cardItem.linkTo} className={styles['aritcle-item__image-link']}>
        {cardItem.imageItem ? (
          <ResponsiveImage
          srcPC={cardItem.imageItem ? cardItem.imageItem.srcPC : "noimage"}
          srcSP={cardItem.imageItem? cardItem.imageItem.srcSP : "noimage.png"}
          srcWebpPC={cardItem.imageItem ? cardItem.imageItem.srcWebpPC : "noimage.png"}
          srcWebpSP={cardItem.imageItem ? cardItem.imageItem.srcWebpSP : "noimage"}
          widthPC={cardItem.imageItem.widthPC}
          heightPC={cardItem.imageItem.heightPC}
          altText={cardItem.imageItem.altText}
          />
        ) : (
          <img src="noimage.png" alt={"noimage"} />
        )}
      </a>
      <div className={styles['article-item__detail']}>
        <div className={styles['article-item__supplementary']}>
          <time>{cardItem.date}</time>
          <a href={cardItem.categoryItem.categoryLinkTo} className={styles['article-item__category']}>
            <span>{cardItem.categoryItem.categoryName}</span>
          </a>
        </div>
        <a href={cardItem.linkTo} className={styles['article-item__title']}>
          <p>{cardItem.title}</p>
        </a>
      </div>
    </div>
  )
}

export default ArticleCarouselWithImageItem;