import { LayoutSectionInnerType } from './LayoutSecitionInner.type';

import styles from './LayoutSecitionInner.module.scss';

const LayoutSectionInner = (props: LayoutSectionInnerType) => {
  const { children } = props;
  return (
    <div className={styles.l_section_inner}>
      {children}
    </div>
  )
}

export default LayoutSectionInner;