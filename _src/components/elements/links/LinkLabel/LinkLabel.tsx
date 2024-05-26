import Link from "next/link";
import styles from "./LinkLabel.module.scss";
import { LinkLabelType } from "./LinkLabel.type";

const LinkLabel = (props: LinkLabelType) => {
  const {text, linkTo, isExternal} = props;
  return (
    <div className={styles.label_link}>
      {isExternal ? (
        <a href={linkTo} target="_blank" rel="noopener noreferer">{text}</a>
      ) : (
        <Link href={linkTo}>{text}</Link>
      )}
    </div>
  )
};

export default LinkLabel;