import YearSelection from "./YearSelection";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.header2}>
        ✦ ✧ Video archive ✦ ✧ Video archive ✦ ✧
      </h2>
      <h1 className={styles.header1}>LAST DAY OF SCHOOL</h1>
      <YearSelection />
    </section>
  );
};

export default Header;
