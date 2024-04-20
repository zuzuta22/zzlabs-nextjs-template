import { LINKS } from "@/_src/constants/links";
import { SITE_INFO } from "@/_src/constants/siteInfo";
import HamburgerNavigation from "../HamburgerNavigation/HamburgerNavigation";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import styles from './HeaderInnter.module.scss';

const HeaderInner = () => {
  return (
    <div className={styles.header_inner}>
      <h1>{SITE_INFO.siteTitle}</h1>
      <HeaderNavigation navItems={LINKS} />
      <HamburgerNavigation
        linkItems={[
          {url: "", name: "top", order: 1},
          {url: "playground", name: "playground", order: 2, isDisplayed: true}
        ]}
      />
    </div>
  )
}

export default HeaderInner;