import { SectionLayoutType } from "@/_src/types/SectionLayoutType.types";
import styles from './SectionContentCentered.module.scss';

const SectionContentCentered = (props: SectionLayoutType) => {
  const {bgColorClass, children} = props;
  return (
    <section className={`${styles['l-section-content-centered']} ${bgColorClass ? bgColorClass: ''}`} >
      <div className={styles['l-section-content-centered__inner']}>
        {children}
      </div>
    </section>
  )
}

export default SectionContentCentered;