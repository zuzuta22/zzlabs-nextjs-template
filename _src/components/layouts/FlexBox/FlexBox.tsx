import styles from './FlexBox.module.scss';
import { FlexBoxType } from "./FlexBox.types";

const FlexBox = (props: FlexBoxType) => {
  const { type, direction, children } = props;

  const baseClassName = 'l_flexbox';
  const modClassName = baseClassName + "__" + type;
  const modClassNameForDirection = baseClassName + "__" + direction;

  console.log('baseClassName: ' + baseClassName)

  return (
    <div className={`${styles[baseClassName]} ${modClassName? styles[modClassName]: null} ${modClassNameForDirection? styles[modClassNameForDirection] : null}`}>
      {children}
    </div>
  )
}

export default FlexBox;