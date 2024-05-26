import Link from "next/link";
import styles from "./CategoryLinkLabel.module.scss";
import { CategoryLinkLabelType } from "./CategoryLinkLabel.types";

const CategoryLinkLabel = (props: CategoryLinkLabelType) => {
  const {text, linkTo} = props;
  return (
    <Link href={linkTo} className={styles['c-category-link-label']}>
      {text}
    </Link>
  )
}

export default CategoryLinkLabel;