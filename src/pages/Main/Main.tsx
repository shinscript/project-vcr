import { useMemo } from "react";
import { VCRData } from "@/types/vcr";
import styles from "./Main.module.scss";
import Image from "next/image";

interface Main {
  data: VCRData[];
  decade: string;
}

const Main: React.FC<Main> = ({ data, decade }) => {
  const filteredVCRData: Array<VCRData | null> = useMemo(() => {
    if (decade.length > 0) {
      return data.map((vcrData: VCRData) =>
        decade.slice(0, 3) === vcrData.year.slice(0, 3) ? vcrData : null
      );
    } else return data;
  }, [data, decade]);

  const shelf1 = filteredVCRData.slice(0, 7);
  const shelf2 = filteredVCRData.slice(7, 13);
  const shelf3 = filteredVCRData.slice(13, 20);
  const shelf4 = filteredVCRData.slice(20, 25);

  return (
    <section className={styles.section}>
      <div className={styles.shelf}>
        {shelf1.map((vcrData: VCRData | null, index: number) => (
          <Image
            alt="vcrImage"
            src={vcrData?.img || ""}
            key={`vcr0-${index}`}
            height={102}
            width={642}
          />
        ))}
      </div>
      <div className={styles.shelf}>
        {shelf2.map((vcrData: VCRData | null, index: number) => (
          <Image
            alt="vcrImage"
            src={vcrData?.img || ""}
            key={`vcr0-${index}`}
            height={102}
            width={642}
          />
        ))}
      </div>
      <div className={styles.shelf}>
        {shelf3.map((vcrData: VCRData | null, index: number) => (
          <Image
            alt="vcrImage"
            src={vcrData?.img || ""}
            key={`vcr0-${index}`}
            height={102}
            width={642}
          />
        ))}
      </div>
      <div className={styles.shelf}>
        {shelf4.map((vcrData: VCRData | null, index: number) => (
          <Image
            alt="vcrImage"
            src={vcrData?.img || ""}
            key={`vcr0-${index}`}
            height={102}
            width={642}
          />
        ))}
      </div>
    </section>
  );
};

export default Main;
