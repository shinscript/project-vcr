import type { AppProps } from "next/app";
import "./styles/global.scss";
import { useEffect, useState } from "react";
import { VCRData } from "@/types/vcr";
import { getData } from "@/api/getVCRData";
import Header from "./header/Header";

/* eslint-disable @next/next/no-img-element */
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
      <img
        style={{
          position: "absolute",
          opacity: ".3",
          zIndex: "1",
          pointerEvents: "none",
          width: "100vw",
          height: "2728px",
          overflow: "visible",
        }}
        alt="gif"
        src="/overlay/scanline.gif"
      />
      <Header setDecade={setDecade} />
      <Component {...pageProps} decade={decade} data={data} />;
    </>
  );
}
