import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link className={styles.title} href="#hero">
          Fabrika | <span className={styles.titleJoan}>Joan</span>
        </Link>
        <div className={styles.links}>
          <Link className={styles.link} href="/terms-and-conditions.pdf">
            Terms of Service
          </Link>
          <Link className={styles.link} href="/privacy-policy.pdf">
            {" "}
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
