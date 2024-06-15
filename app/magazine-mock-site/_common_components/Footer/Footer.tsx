import { FooterContext } from "../../_configs/contexts/commonContexts";
import styles from "./Footer.module.scss";
import { FooterLinkType } from "./Footer.types";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles['footer__nav']}>
        {FooterContext.links.map((link: FooterLinkType, key: number) => (
          <a href={link.linkTo} key={key}>{link.text}</a>
        ))}
      </nav>
      <p className={styles['footer__copyright']}>{FooterContext.copyright}</p>
    </footer>
  )
}

export default Footer;