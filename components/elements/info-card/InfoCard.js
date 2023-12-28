import React from "react";
import Image from "next/image";
import styles from "./info-card.module.css";
import { joinClassNames } from "@/utils/join-class-names";

const InfoCard = ({ src, monogram, title, description, className }) => {
  return (
    <div className={joinClassNames(styles.infoCard, className)}>
      <div className={styles.iconWrapper}>
        {src ? (
          <Image src={src} alt={title} width={32} height={32} />
        ) : (
          <div className={styles.monogram}>
            {monogram}
          </div>
        )}
      </div>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default InfoCard;
