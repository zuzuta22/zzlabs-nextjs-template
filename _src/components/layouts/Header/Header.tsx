import HeaderInner from '../../objects/HeaderInnter/HeaderInnter';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.l_header}>
      <HeaderInner />
    </header>
  )
}

export default Header;