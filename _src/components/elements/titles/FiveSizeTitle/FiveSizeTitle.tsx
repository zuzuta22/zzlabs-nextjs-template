import styles from "./FiveSizeTitle.module.scss";
import { FiveSizeTitleTextType } from "./FiveSizeTitle.types";

const FiveSizeTitleText = (props: FiveSizeTitleTextType) => {
  const {text, size} = props;
  const titleSize = size ? size : 'm';
  const baseClass = 'five_size_title';
  const modifierClassForSize = baseClass + "--" + titleSize;

  return (
    <p className={`${styles[baseClass]} ${styles[modifierClassForSize]}`}>
      {text}
    </p>
  )
}

export default FiveSizeTitleText;