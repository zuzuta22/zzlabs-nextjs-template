import Link from "next/link";
import styles from './NavLink.module.scss';
import { NavLinkType } from "./NavLink.types";

const NavLink = (props: NavLinkType) => {
  const {linkTo, linkText, isExternal, toggleIsHamburgerOpen} = props;
  return (
    <>
      {isExternal ? (
        <a href={linkTo} target="__blank" rel="noopener noreferer">
          {linkText}
        </a>
      ) : (
        <Link
          className={styles.nav_link}
          href={linkTo === "" ? "/" : "/" + linkTo + "/"}
          onClick={toggleIsHamburgerOpen}
        >
          {linkText}
        </Link>
      )}
    </>
    
  )
}

export default NavLink;