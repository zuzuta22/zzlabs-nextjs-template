import styles from './SectionTitleCombo.module.scss';
import { SectionTitleComboType } from "./SectionTitleCombo.types";

const SectionTitleCombo = (props: SectionTitleComboType) => {
  const {title, subText, type='horizon'} = props;

  const baseClass = 'o-section-title-combo';
  const modifierClass = baseClass + '--' + type;

  return (
    <div className={`${styles[baseClass]} ${styles[modifierClass]}`}>
      <span>{subText}</span>
      <h2>{title}</h2>
    </div>  
  )
}

export default SectionTitleCombo;