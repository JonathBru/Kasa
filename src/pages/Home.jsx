import Banner from "../components/Banner";
import img_home from "../assets/banner_img_home.png";
import Logements from "../components/Logements";
import logements from "../data/logements.json";
export default function Home() {
  return (
    <div>
      <Banner
        page="Home"
        text="Chez vous, partout et ailleurs"
        src={img_home}
      />
      <Logements logements={logements} />
    </div>
  );
}