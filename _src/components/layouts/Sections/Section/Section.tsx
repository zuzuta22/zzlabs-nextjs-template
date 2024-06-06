import { SectionLayoutType } from '@/_src/types/SectionLayoutType.types';
import styles from './SectionSimple.module.scss';

const Section = (props: SectionLayoutType) => {
  const {children, bgColorClass} = props;
  // const baseClass = 'l-section';
  // const modifierClass = bgColor ? baseClass + "--" + bgColor : '';
  return (
    // <section className={`${styles[baseClass]} ${styles[modifierClass]}`}>
    <section className={`${styles['l-section']} ${bgColorClass ? bgColorClass : ''}`}>
      {children}
    </section>
  )
}

export default Section;