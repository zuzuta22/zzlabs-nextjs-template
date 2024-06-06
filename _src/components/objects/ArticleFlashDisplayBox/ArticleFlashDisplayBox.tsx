import Link from "next/link";
import styles from './ArticleFlashDisplayBox.module.scss';
import { ArticleFlashDisplayBoxType } from "./ArticleFlashDisplayBox.types";

const ArticleFlashDisplayBox = (props: ArticleFlashDisplayBoxType) => {
  const {title, linkTo, date} = props;
  return (
    <div className={styles['o-article-flash-display-box']}>
      <time>{date}</time>
      <Link href={linkTo}>{title}</Link>
    </div>
  )
}

export default ArticleFlashDisplayBox;