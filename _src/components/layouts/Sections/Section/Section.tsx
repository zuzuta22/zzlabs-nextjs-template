import { SectionLayoutType } from '@/_src/types/SectionLayoutType.types';
import styles from './SectionSimple.module.scss';

const Section = (props: SectionLayoutType) => {
  const {children, bgColor} = props;
  const baseClass = 'l-section';
  const modifierClass = bgColor ? baseClass + "--" + bgColor : '';
  console.log(bgColor);
  return (
    <section className={`${styles[baseClass]} ${styles[modifierClass]}`}>
      {children}
    </section>
  )
}

export default Section;