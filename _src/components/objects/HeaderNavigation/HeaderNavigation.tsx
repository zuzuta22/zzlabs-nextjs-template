import Link from 'next/link';
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
              <Link href={item.url}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  )
}

export default HeaderNavigation;