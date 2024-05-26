import SiteLogo from '@/_src/components/elements/images/SiteLogo/SiteLogo';
import NavigationWithPipe from '@/_src/components/objects/NavigationWithPipe/NavigationWithPipe';
import { NavigationItemsContext } from '@/app/magazine-mock-site/_configs/contexts/commonContexts';
import styles from './HeaderWithHamburger.module.scss';
import { HeaderWithHamburgerType } from './HeaderWithHamburger.types';

const HeaderWithHamburger = (props: HeaderWithHamburgerType) => {
  // const {logo, navigationItems, hamburger} = props;
  const {logo} = props;
  return (
    <header className={styles['l-header-with-hamburger']}>
      <div className={styles['l-header-with-hamburger__inner']}>
        <SiteLogo 
          srcPC={logo.srcPC}
          srcSP={logo.srcSP}
          widthPC={logo.widthPC}
          heightPC={logo.heightPC}
          widthSP={logo.widthSP}
          heightSP={logo.heightSP}
          srcWebpPC={logo.srcWebpPC}
          srcWebpSP={logo.srcWebpSP}
          altText={logo.altText}
          linkTo={logo.linkTo}
        />

        <div className={styles['l-header-with-hamburger__navigation']}>
          <NavigationWithPipe navItems={NavigationItemsContext.navItems} />
        </div>
      </div>
      
    </header>
  )
}

export default HeaderWithHamburger;