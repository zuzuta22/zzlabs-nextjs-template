import Link from "next/link";
import styles from './LinkLabelWithRightArrow.module.scss';
import { LinkLabelWithRightArrowType } from "./LinkLabelWithRightArrow.type";

const LinkLabelWithRightArrow = (props: LinkLabelWithRightArrowType) => {
  const {text, linkTo, isExternal, colorMode} = props;
  const colorClassBase = 'label-link';
  const colorModeClass = colorMode ? styles[`${colorClassBase}--${colorMode}`] : '';
  
  return (
    <div className={`${styles[colorClassBase]} ${colorModeClass}`}>

      {isExternal ? (
        <a href={linkTo} target="_blank" rel="noopener noreferer">{text}</a>
      ) : (
        <Link href={linkTo}>{text}</Link>
      )}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={styles['label-link__arrow']} viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>

    </div>
  )
};

export default LinkLabelWithRightArrow;