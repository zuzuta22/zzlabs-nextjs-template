import ArticleItemWithImage from "./ArticleItemWithImage/ArticleItemWithImage";
import styles from './ArticleItemWithImageList.module.scss';
import { ArticleItemWithImageListType } from "./ArticleItemWithImageList.types";

const ArticleItemWithImageList = (props: ArticleItemWithImageListType) => {
  const {articleItems} = props;
  return (
    <>
      {articleItems ? (
        <div className={styles['o-aticle-items-with-image-list']}>
          {articleItems.map((articleItem:any, key:number) => (
            <article key={key}>
              <ArticleItemWithImage
                imageItem={articleItem.imageItem}
                labelItem={articleItem.labelItem}
                title={articleItem.title}
                date={articleItem.date}
                tags={articleItem.tags}
                linkTo={articleItem.linkTo} />
          </article>
          ))}
        </div>
      ): null}
    </>
  )
}

export default ArticleItemWithImageList;