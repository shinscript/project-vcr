import { VCRData } from "@/types/vcr";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import tvImage from "../../../public/monitor-01.png";
import styles from "./TV.module.scss";

interface TV {
  data: VCRData[];
  decade: string;
}

const TV: React.FC<TV> = ({ data }) => {
  const { id } = useRouter().query;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [url, setUrl] = useState<string>("");

  const vcrData: VCRData[] = useMemo(() => {
    return data.filter((vcrData: VCRData) => {
      if (typeof id === "string") return vcrData.id === parseInt(id);
    });
  }, [data, id]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.autoplay = true;
      audioRef.current.play();
      setTimeout(() => {
        setUrl("?autoplay=1&mute=1");
      }, 2000);
    }
  }, [audioRef]);

  return (
    <>
      <Image
        className={styles.tv}
        alt="tv"
        src={tvImage}
        height={909}
        width={919}
      />
      <Image
        className={styles.tape}
        alt="vcr"
        src={vcrData[0]?.img || ""}
        width={1292}
        height={205}
      />
      <iframe
        className={styles.video}
        src={`${vcrData[0]?.link}${url}` || ""}
        width="757"
        height="500"
      />
      <audio src="/tape-sound.mp3" ref={audioRef} />
    </>
  );
};

export default TV;
