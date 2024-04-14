import styles from "./button-base.module.scss";
import { ButtonBaseType } from "./button-base.types";

const ButtonBase = (props: ButtonBaseType) => {
  const {text,type} = props;
  const bassClassName = 'u_button_base';
  const modClassName = bassClassName + '__' + type;

  return (
    <button 
      className={`${styles[bassClassName]}${type ? ` ${styles[modClassName]}` : ""}`} 
      aria-label={text}
      >
      {text}
    </button>
  )
}

export default ButtonBase;