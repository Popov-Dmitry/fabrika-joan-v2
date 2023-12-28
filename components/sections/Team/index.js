import styles from "./index.module.css";
import PersonCard from "@/components/elements/person-card/PersonCard";
import Button from "@/components/elements/button/Button";
import Title from "@/components/elements/title";

const Team = ({ team }) => {
  return (
    <div className={styles.team}>
      <div id="team" className={styles.teamAnchor} />
      <div className={styles.container}>
        <div className={styles.header}>
          <Title>Team</Title>
          <Button
            className={styles.scheduleACallButton}
            text="Schedule a call"
            href="example.com"
          />
        </div>
        <div className={styles.teamCards}>
          {team.map((card) => (
            <PersonCard
              key={card.name}
              className={styles.teamCard}
              src={card.src}
              name={card.name}
              position={card.position}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
