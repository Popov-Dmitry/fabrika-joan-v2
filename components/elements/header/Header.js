import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.title} href="#hero">
          Fabrika | <span className={styles.titleJoan}>Joan</span>
        </Link>
        <div className={styles.links}>
          <Link className={styles.link} href="#about">
            About
          </Link>
          <Link className={styles.link} href="#joan">
            Talk to Joan
          </Link>
          <Link className={styles.link} href="#team">
            Team
          </Link>
          <Link className={styles.link} href="#faq">
            FAQ
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
