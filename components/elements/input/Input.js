import React from "react";
import styles from "./input.module.css";
import { joinClassNames } from "@/utils/join-class-names";

const Input = ({ type, name, label, placeholder, className, required = false }) => {
  return (
    <div className={styles.container}>
      {label && (
        <div className={styles.label}>{label}</div>
      )}
      <input
        className={joinClassNames(styles.input, className)}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
