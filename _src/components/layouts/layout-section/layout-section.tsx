import { LayoutSectionType } from "./layout-section.types"
import styles from './layout-section.module.scss';

const LayoutSection = (props: LayoutSectionType) => {
  const {children} = props;
  return (
    <section className={styles.l_section}>
      {children}
    </section>
  )
}

export default LayoutSection;