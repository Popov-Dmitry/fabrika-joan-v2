import React from "react";
import { joinClassNames } from "@/utils/join-class-names";
import styles from "./icon-button.module.css";
import Image from "next/image";

const IconButton = ({ src, onClick, className }) => {
  return (
    <button className={joinClassNames(styles.iconButton, className)} onClick={onClick}>
      <Image src={src} alt="" width={24} height={24} />
    </button>
  );
};

export default IconButton;