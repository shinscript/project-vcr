import { VCRData } from "@/types/vcr";
import styles from "./YearSelection.module.scss";
interface YearSelection {
  data: VCRData[];
  setSelectedYear: (input: string) => void;
}

const YearSelection: React.FC<YearSelection> = ({ data, setSelectedYear }) => {
  return (
    <div className={styles.yearsCtn}>
      {data.map((vcrData: VCRData, index: number) => (
        <div
          key={`${vcrData.year}-${index}`}
          className={styles.years}
          onClick={() => setSelectedYear(vcrData.year)}
        >
          {`${vcrData.year}s`}
        </div>
      ))}
    </div>
  );
};

export default YearSelection;
