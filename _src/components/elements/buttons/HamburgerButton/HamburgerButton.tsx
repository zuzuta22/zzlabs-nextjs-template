import styles from "./HamburgerButton.module.scss";
import { HamburgerButtonType } from "./HamburgerButton.type";

export const HamburgerButton = (props: HamburgerButtonType) => {
  const {isHamburgerOpen, toggleIsHamburgerOpen} = props;

  // debug code
  // console.log("Render: HamburgerButton");

  return (
    <>
      <button
        type="button"
        name="Hamburger Button"
        className={styles.hamburger}
        aria-expanded={isHamburgerOpen}
        aria-label="Open Menu"
        aria-controls="navigation"
        onClick={toggleIsHamburgerOpen}>
          <span className={styles.hamburger_line__top}></span>
          <span className={styles.hamburger_line__middle}></span>
          <span className={styles.hamburger_line__bottom}></span>
        </button>
    </>
  )
}