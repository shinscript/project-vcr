import Header from "./Header/Header";
import Main from "./Main/Main";
import { useEffect, useState } from "react";
import { getData } from "../api/getVCRData";
import { VCRData } from "@/types/vcr";

export default function Home() {
  const [data, setData] = useState<VCRData[]>([]);
  const [decade, setDecade] = useState<string>("");

  const assignVcrData = async (): Promise<void> => {
    try {
      const vcrData = await getData();
      setData(vcrData);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (data.length > 0) return;
    assignVcrData();
  }, [data]);

  return (
    <>
      <Header setDecade={setDecade} />
      <Main data={data} decade={decade} />
    </>
  );
}
