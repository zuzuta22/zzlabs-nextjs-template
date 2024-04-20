import { LINKS } from "@/_src/constants/links";
import { SITE_INFO } from "@/_src/constants/siteInfo";
import BackToTopLink from "../../elements/links/BackToTopLink/BackToTopLink";
import HamburgerNavigation from "../HamburgerNavigation/HamburgerNavigation";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import styles from './HeaderInnter.module.scss';

const HeaderInner = () => {
  return (
    <div className={styles.header_inner}>
      <h1>{SITE_INFO.siteTitle}</h1>
      <HeaderNavigation navItems={LINKS} />
      <HamburgerNavigation
        linkItems={LINKS}
      />
      <BackToTopLink />
    </div>
  )
}

export default HeaderInner;