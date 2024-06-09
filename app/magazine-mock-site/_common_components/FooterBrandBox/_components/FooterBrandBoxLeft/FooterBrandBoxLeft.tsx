import TwoTiersBox from '@/_src/components/layouts/Box/TwoTiersBox/TwoTiersBox';
import FooterBrandBoxContentBottom from '../FooterBrandBoxContentBottom';
import styles from './FooterBrandBoxLeft.module.scss';
import FooterBrandBoxContentTop from './FooterBrandBoxLeftContentTop';

const FooterBrandBoxLeft = () => {
  return (
    <div className={styles['footer-brand-box-left']}>
      <TwoTiersBox
        contentsTop={<FooterBrandBoxContentTop />}
        contentsBottom={<FooterBrandBoxContentBottom />}
        backgroundColor={"black"}
      />
    </div>
  )
}

export default FooterBrandBoxLeft;