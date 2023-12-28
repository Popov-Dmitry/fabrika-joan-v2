import styles from "./index.module.css";
import Accordion from "@/components/elements/accordion/Accordion";
import Title from "@/components/elements/title";

const FAQ = ({ list }) => {
  return (
    <div className={styles.questions}>
      <div id="faq" className={styles.questionsAnchor} />
      <div className={styles.container}>
        <Title>FAQ</Title>
        <div className={styles.accordions}>
          {list.map((item) => (
            <Accordion
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
