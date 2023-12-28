import JoinWaitlistForm from "@/components/elements/join-waitlist-form";
import styles from "./index.module.css";
import Title from "@/components/elements/title";

const BeFirstToExperience = () => {
  return (
    <div id="join-waitlist" className={styles.email}>
      <div className={styles.container}>
        <Title centered className={styles.title}>
          Be the First to Experience Joan
        </Title>
        <JoinWaitlistForm />
      </div>
    </div>
  );
};

export default BeFirstToExperience;
