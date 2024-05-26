import NavLink from '../../elements/links/NavLink/NavLink';
import styles from './NavigationWithPipe.module.scss';
import { NavigationWithPipeItemType, NavigationWithPipeType } from "./NavigationWithPipe.types";

const NavigationWithPipe = (props: NavigationWithPipeType) => {
  const {navItems} = props;

  return (
    <>
      {navItems ? (
        <nav className={styles['navigation-with-pipe']}>
          {navItems.map((item:NavigationWithPipeItemType, key:number) => (
            <NavLink
              key={key}
              linkTo={item.url}
              linkText={item.name}
              isExternal={item.isExternal}
            />
          ))}
        </nav>
      ) : null}
    </>
  )

}

export default NavigationWithPipe;