import styles from './ArticleLabel.module.scss';
import { ArticleLabelType } from "./ArticleLabel.types";

const ArticleLabel = (props: ArticleLabelType) => {
  const {text} = props;

  return (
    <div className={styles.article_label}>{text}</div>
  )
}

export default ArticleLabel;