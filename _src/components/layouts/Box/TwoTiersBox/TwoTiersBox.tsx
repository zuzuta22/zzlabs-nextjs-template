import styles from './TwoTiersBox.module.scss';
import { TwoTiersBoxType } from './TwoTiersBox.types';

const TwoTiersBox = (props: TwoTiersBoxType) => {
  const {contentsTop, contentsBottom, backgroundColor} = props;
  const baseClass = 'l-two_tiers_box';
  const modifierClass = backgroundColor ? baseClass + "--" + backgroundColor : baseClass + '--primary';

  return (
    <div className={`${styles[baseClass]} ${styles[modifierClass]}`}>
      <div className={styles['l-two_tiers_box__content_top']}>
        {contentsTop}
      </div>
      <div className={styles['l-two_tiers_box__content_bottom']}>
        {contentsBottom}
      </div>
    </div>
  )
}

export default TwoTiersBox