"use client";

import useToggleHamburger from "@/_src/hooks/useToggleHamburger.hooks";
import { HamburgerButton } from "../../elements/buttons/HamburgerButton/HamburgerButton";
import styles from "./HamburgerNavigation.module.scss";
import { HamburgerNavigationType } from "./HamburgerNavigation.type";
import HamburgerItems from "./components/HamburgerItems/HamburgerItems";

const HamburgerNavigation = (props: HamburgerNavigationType) => {
  const {linkItems} = props;
  const [isHamburgerOpen, toggleIsHamburgerOpen] = useToggleHamburger(false);

  // debug code
  // console.log("render Hamburger Navigation");
  return (
    <div className={styles.hamburger}>
      <HamburgerButton
        isHamburgerOpen={isHamburgerOpen}
        toggleIsHamburgerOpen={toggleIsHamburgerOpen}
      />
      <div className={styles.hamburger__navigation + (isHamburgerOpen ? ` ${styles.hamburger__navigation__open}` : ` ${styles.hamburger__navigation__close}`)}>
        <HamburgerItems
          linkItems={linkItems}
          toggleIsHamburgerOpen={toggleIsHamburgerOpen}
        />
      </div>
    </div>
  )
}

export default HamburgerNavigation;