import styles from './SectionTitleCombo.module.scss';
import { SectionTitleComboType } from './SectionTitleCombo.types';


const SectionTitleCombo = (props: SectionTitleComboType) => {
  const {title, subText, type='horizon', isShowUp} = props;

  const baseClass = 'o-section-title-combo';
  const modifierClass = baseClass + '--' + type;
  const isShowUpClass = isShowUp ? 'show_up' : '';

  return (
    <div className={`${styles[baseClass]} ${styles[modifierClass]} ${isShowUpClass}`}>
      <span>{subText}</span>
      <h2>{title}</h2>
      <script src="js/addShowUpOnClass.js" async></script>
    </div>  
  )
}

export default SectionTitleCombo;