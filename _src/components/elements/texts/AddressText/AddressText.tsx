import styles from './AddressText.module.scss';
import { AddressTextType } from "./AddressText.types";

const AddressText = (props: AddressTextType) => {
  const {zip, address1, address2} = props;
  return (
    <p className={styles.address_text}>
      {zip? ("〒" + zip) : null}<br />
      {address1}<br />
      {address2? address2 : null}
    </p>
  )
}

export default AddressText;