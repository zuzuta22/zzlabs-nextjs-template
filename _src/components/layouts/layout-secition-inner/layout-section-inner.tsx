import { LayoutSectionInnerType } from './layout-section-inner.type';

import styles from './layout-section-inner.module.scss';

const LayoutSectionInner = (props: LayoutSectionInnerType) => {
  const { children } = props;
  return (
    <div className={styles.l_section_inner}>
      {children}
    </div>
  )
}

export default LayoutSectionInner;