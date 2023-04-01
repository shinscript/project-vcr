import type { VCRData, Decades } from "@/types/vcr";
import styles from "./YearSelection.module.scss";
interface YearSelection {
  setDecade: (input: string) => void;
}

const decades: Decades = ["1960s", "1970s", "1980s", "1990s", "2000s", "2010s"];

const YearSelection: React.FC<YearSelection> = ({ setDecade }) => {
  return (
    <div className={styles.yearsCtn}>
      {decades.map((decade: string, index: number) => (
        <div
          key={`${decade}-${index}`}
          className={styles.years}
          onClick={() => setDecade(decade)}
        >
          {decade}
        </div>
      ))}
    </div>
  );
};

export default YearSelection;
