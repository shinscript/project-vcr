import Shelf from "./Shelf/Shelf";
import { VCRData } from "@/types/vcr";

interface Home {
  decade: string;
  data: VCRData[];
}

const Home: React.FC<Home> = ({ decade, data }) => {
  return <Shelf data={data} decade={decade} />;
};

export default Home;
