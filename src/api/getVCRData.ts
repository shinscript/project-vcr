import { VCRData } from "@/types/vcr";

export const getData = async (): Promise<VCRData[]> => {
  try {
    const res: Response = await fetch("data.json");
    const data: VCRData[] = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};