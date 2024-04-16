import Link from "next/link";
import { LabelLinkType } from "./label-link.type";
import styles from "./label-link.module.scss";

const LabelLinks = (props: LabelLinkType) => {
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

export default LabelLinks;