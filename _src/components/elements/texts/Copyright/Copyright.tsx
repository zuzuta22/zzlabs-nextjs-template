import styles from './Copyright.module.scss';
import { CopyrightType } from "./Copyright.types";

const Copyright = (props: CopyrightType) => {
  const {text} = props;

  return (
    <p className={styles.copyright}>{text}</p>
  )
}

export default Copyright;