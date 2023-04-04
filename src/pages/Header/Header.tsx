import YearSelection from "./YearSelection";
import styles from "./Header.module.scss";

interface Header {
  setDecade: (input: string) => void;
}

const Header: React.FC<Header> = ({ setDecade }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.header2}>
        ✦ ✧ Video archive ✦ ✧ Video archive ✦ ✧
      </h2>
      <h1 className={styles.header1}>LAST DAY OF SCHOOL</h1>
      <YearSelection setDecade={setDecade} />
    </section>
  );
};

export default Header;
