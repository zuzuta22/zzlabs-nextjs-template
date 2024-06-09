import TwoTiersBox from '@/_src/components/layouts/Box/TwoTiersBox/TwoTiersBox';
import { FooterBrandBoxRightContext } from '@/app/magazine-mock-site/_configs/contexts/commonContexts';
import styles from './FooterBrandBoxRight.module.scss';
import FooterBrandBoxRightContentBottom from './FooterBrandBoxRightContentBottom';
import FooterBrandBoxRightContentTop from './FooterBrandBoxRightContentTop';

const FooterBrandBoxRight = () => {
  return (
    <div className={styles['footer-brand-box-right']}>
        <TwoTiersBox
          contentsTop={<FooterBrandBoxRightContentTop />}
          contentsBottom={
            <FooterBrandBoxRightContentBottom 
              appleBadgeItem={FooterBrandBoxRightContext.contentBottom.appleBadgeItem}
              googleBadgeItem={FooterBrandBoxRightContext.contentBottom.googleBadgeItem}
            />
          }
          backgroundColor={"black"}
        />
      </div>
  )
}

export default FooterBrandBoxRight;