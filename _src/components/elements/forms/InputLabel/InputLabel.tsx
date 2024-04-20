'use client';

import { useEffect, useState } from "react";
import styles from "./InputLabel.module.scss";
import { InputLabelType } from "./InputLabel.type";

export const InputLabel = (props: InputLabelType) => {
  const {text, htmlFor, isActive} = props;
  const [isInputActive, setIsInputActive] = useState(isActive)

  useEffect(() => {
    setIsInputActive(isActive);
  }, [isActive]);

  return (
      <label htmlFor={htmlFor}
        className={`${styles.input_label}${isInputActive ? ` ${styles.input_label__active}`: ""}`}
      >
        {text}
      </label>
  )
}