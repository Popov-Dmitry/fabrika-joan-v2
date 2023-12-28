import styles from "./index.module.css";
import { joinClassNames } from "@/utils/join-class-names";

const Title = ({ children, color = "black", centered, className }) => {
  return (
    <div className={joinClassNames(styles.title, styles[color], centered ? styles.centered : undefined, className)}>
      {children}
    </div>
  );
};

export default Title;
