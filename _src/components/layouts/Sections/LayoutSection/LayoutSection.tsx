
import { SectionLayoutType } from '@/_src/types/SectionLayoutType.types';
import styles from './LayoutSection.module.scss';

const LayoutSection = (props: SectionLayoutType) => {
  const {children} = props;
  return (
    <section className={styles.l_section}>
      {children}
    </section>
  )
}

export default LayoutSection;