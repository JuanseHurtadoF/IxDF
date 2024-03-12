import styles from "./question.module.scss";

const Question = ({ question, children }) => {
  return <div className={styles.question}>{children}</div>;
};

export default Question;
