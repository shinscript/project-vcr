import YearSelection from "./YearSelection";
import styles from "./Header.module.scss";
import { VCRData } from "@/types/vcr";

interface Header {
  data: VCRData[];
  setSelectedYear: (input: string) => void;
}

const Header: React.FC<Header> = ({ data, setSelectedYear }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.header2}>
        ✦ ✧ Video archive ✦ ✧ Video archive ✦ ✧
      </h2>
      <h1 className={styles.header1}>LAST DAY OF SCHOOL</h1>
      <YearSelection data={data} setSelectedYear={setSelectedYear}/>
    </section>
  );
};

export default Header;
