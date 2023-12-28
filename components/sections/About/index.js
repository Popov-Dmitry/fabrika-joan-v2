import styles from "./index.module.css";
import Button from "@/components/elements/button/Button";
import InfoCard from "@/components/elements/info-card/InfoCard";
import Title from "@/components/elements/title";

const About = (props) => {
  const { infoCards } = props;

  return (
    <div className={styles.about}>
      <div id="about" className={styles.aboutAnchor} />
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
          <Title>About Joan</Title>
          <Button
            className={styles.talkToJoanButton}
            text="Try it yourself"
            // href="#about"
          />
        </div>
        <div className={styles.infoCards}>
          {infoCards.map((card, index) => (
            <InfoCard
              className={styles.infoCard}
              key={card.title}
              monogram={index + 1}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
