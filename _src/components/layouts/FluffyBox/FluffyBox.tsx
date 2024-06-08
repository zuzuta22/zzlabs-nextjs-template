import styles from './FluffyBox.module.scss';
import { FluffyBoxTypes } from './FluffyBox.types';

const FluffyBox = (props: FluffyBoxTypes) => {
  const {children} = props;

  return (
    <div className={`${styles['l-fluffybox']} show_up`}>
      {children}
      <script src="js/addShowUpOnClass.js" async></script>
    </div>
  )
}

export default FluffyBox;