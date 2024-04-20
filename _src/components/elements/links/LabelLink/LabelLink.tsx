import Link from "next/link";
import styles from "./LabelLink.module.scss";
import { LabelLinkType } from "./LabelLink.type";

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