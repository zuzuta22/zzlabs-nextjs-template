import styles from './LayoutSection.module.scss';
import { LayoutSectionType } from "./LayoutSection.types";

const LayoutSection = (props: LayoutSectionType) => {
  const {children} = props;
  return (
    <section className={styles.l_section}>
      {children}
    </section>
  )
}

export default LayoutSection;