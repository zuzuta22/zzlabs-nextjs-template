import NavLink from '../../elements/links/NavLink/NavLink';
import styles from './HeaderNavigation.module.scss';
import { HeaderNavigationItemType, HeaderNavigationType } from './HeaderNavigation.types';

const HeaderNavigation = (props: HeaderNavigationType) => {
  const {navItems} = props;
  
  return (
    <>
      {navItems? (
        <ul className={styles.header_nav}>
          {navItems.map((item:HeaderNavigationItemType, key:number) => (
            <li key={key}>
              <NavLink 
                linkTo={item.url}
                linkText={item.name}
            />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  )
}

export default HeaderNavigation;