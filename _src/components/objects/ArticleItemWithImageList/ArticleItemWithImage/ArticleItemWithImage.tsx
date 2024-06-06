import CategoryLinkLabel from "@/_src/components/elements/links/CategoryLinkLabel/CategoryLinkLabel";
import Link from "next/link";
import ResponsiveImage from "../../../elements/images/ResponsiveImage/ResponsiveImage";
import styles from './ArticleItemWithImage.module.scss';
import { ArticleItemWithImageType, TagItemType } from "./ArticleItemWithImage.type";

const ArticleItemWithImage = (props: ArticleItemWithImageType) => {
  const {imageItem, labelItem, title, date, tags, linkTo} = props;
  
  return (
    <div className={styles['o-article-with-image']}>
      <Link href={linkTo} className={styles['o-article-with-image__image']}>
        <ResponsiveImage
          srcPC={imageItem.srcPC}
          srcSP={imageItem.srcSP}
          widthPC={imageItem.widthPC}
          heightPC={imageItem.heightPC}
          widthSP={imageItem.widthSP}
          heightSP={imageItem.heightSP}
          srcWebpPC={imageItem.srcWebpPC}
          srcWebpSP={imageItem.srcSP}
          altText={imageItem.altText}
        />
      </Link>
      <div className={styles['o-article-with-image__category']}>
        <CategoryLinkLabel 
          text={labelItem.text}
          linkTo={labelItem.linkTo}
        />
      </div>
      
      <div className={styles['o-article-with-image__title']}>
        <Link href={linkTo}>
          {title}
        </Link>
      </div>
      <time className={styles['o-article-with-image__date']}>
        {date}
      </time>
      {tags ? (
        <div className={styles['o-article-with-image__tags']}>
          {tags.map((tagItem: TagItemType, key: number) => (
            <Link href={tagItem.tagLinkTo} key={key} className={styles['o-article-with-image__tag']}>
              #{tagItem.tagText}
            </Link>
          ))}
        </div>
      ) : null}

    </div>
  )
}

export default ArticleItemWithImage;