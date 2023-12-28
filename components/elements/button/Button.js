import React from "react";
import styles from "./button.module.css";
import { joinClassNames } from "@/utils/join-class-names";
import Link from "next/link";

const Spinner = ({ visible }) => (
  <svg
    className={visible ? styles.spinner : styles.spinnerHidden}
    viewBox="0 0 50 50"
  >
    <circle
      className={styles.path}
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="5"
    />
  </svg>
);

const Button = ({ text, type, onClick, className, href, pending }) => {
  if (href) {
    return (
      <Link className={joinClassNames(styles.button, className)} href={href}>
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={joinClassNames(styles.button, className)}
      onClick={onClick}
    >
      <div className={pending ? styles.buttonTextPending : undefined}>
        {text}
        <Spinner visible={pending} />
      </div>
    </button>
  );
};

export default Button;
