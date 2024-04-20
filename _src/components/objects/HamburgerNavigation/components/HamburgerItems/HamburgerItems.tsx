
import NavLink from "@/_src/components/elements/links/NavLink/NavLink";
import styles from "./HamburgerItems.module.scss";
import { HamburgerNavigationItemType, HamburgerNavigationItemsType } from './HamburgerItems.type';

const HamburgerItems = (props: HamburgerNavigationItemsType) => {
  const {linkItems, toggleIsHamburgerOpen} = props;
  return (
    <>
      {linkItems ? (
        <ul className={styles.hamburger_items}>
          {linkItems
            .filter(item => item.isDisplayed ?? true)
            .sort((a, b) => a.order - b.order) // sort by the order value
            .map((item: HamburgerNavigationItemType, index: number) => (
              <li key={index}>
                <NavLink
                  linkTo={item.url}
                  linkText={item.name}
                  toggleIsHamburgerOpen={toggleIsHamburgerOpen}
                />
              </li>
            ))}
        </ul>
      ) : null}
    </>
  )
}

export default HamburgerItems;