import Header from "./header/Header";
import type { AppProps } from "next/app";
import "./styles/global.scss";
import { useEffect, useState } from "react";
import { VCRData } from "@/types/vcr";
import { getData } from "@/api/getVCRData";

export default function App({ Component, pageProps }: AppProps) {
  const [decade, setDecade] = useState<string>("");
  const [data, setData] = useState<VCRData[]>([]);

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
      <Component {...pageProps} decade={decade} data={data} />;
    </>
  );
}
