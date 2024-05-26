import styles from './SectionTitleCombo.module.scss';
import { SectionTitleComboType } from "./SectionTitleCombo.types";

const SectionTitleCombo = (props: SectionTitleComboType) => {
  const {title, subText} = props;

  return (
    <div className={styles['o-section-title-combo']}>
      <span>{subText}</span>
      <h2>{title}</h2>
    </div>  
  )
}

export default SectionTitleCombo;