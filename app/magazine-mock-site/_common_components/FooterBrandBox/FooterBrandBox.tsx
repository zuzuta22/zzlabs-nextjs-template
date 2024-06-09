import styles from "./FooterBrandBox.module.scss";
import FooterBrandBoxLeft from "./_components/FooterBrandBoxLeft/FooterBrandBoxLeft";
import FooterBrandBoxRight from "./_components/FooterBrandBoxRight/FooterBrandBoxRight";

const FooterBrandBox = () => {

  return (
    <div className={styles['footer-brand-box']}>
      <FooterBrandBoxLeft />
      <FooterBrandBoxRight />
    </div>
  )
}

export default FooterBrandBox;