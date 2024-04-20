import { ReactNode } from "react";
import styles from "./FormSample.module.scss";

type LayoutFormType = {
  children: ReactNode;
  id: string;
  method: "get" | "post" | string;
}

const FormSample = (props: LayoutFormType) => {
  const {id, method, children} = props;

  return (
    <form id={id} method={method} className={styles.layout_form}>
      {children}
    </form>
  )
}

export default FormSample;;