import React from "react";
import Image from "next/image";
import styles from "./person-card.module.css";
import { joinClassNames } from "@/utils/join-class-names";

const PersonCard = ({ src, name, position, description, className }) => {
  return (
    <div className={joinClassNames(styles.card, className)}>
      <Image
        className={styles.avatar}
        src={src}
        alt={name}
        width={102}
        height={102}
      />
      <div className={styles.name}>{name}</div>
      <div className={styles.position}>{position}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default PersonCard;
