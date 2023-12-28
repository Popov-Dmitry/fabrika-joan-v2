import Image from "next/image";
import styles from "./index.module.css";
import JoinWaitlistForm from "@/components/elements/join-waitlist-form";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div id="hero" className={styles.heroAnchor} />
      <div className={styles.heroContainer}>
        <Image
          className={styles.heroStar}
          src="/star.svg"
          alt=""
          width={392}
          height={396}
        />
        <div>
          <div className={styles.heroDescription}>
            AI Agent for Market Research
          </div>
          <div className={styles.heroTitle}>
            Ask Joan about your competitors
          </div>
        </div>
        <div className={styles.heroInputs}>
          <JoinWaitlistForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
