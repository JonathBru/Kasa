import Banner from "../components/Banner";
import BannerImg from "../assets/banner_img_about.png";
import Collapse from "../components/Collapse";
import classes from "./About.module.scss";
export default function About() {
  return (
    <div className={classes.About_container}>
      <Banner page="About" src={BannerImg} />
      <div className={classes.Content}>
        <div className={classes.Collapse}>
          <Collapse
            title="Fiabilité"
            children="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
        </div>
        <div className={classes.Collapse}>
          <Collapse
            title="Respect"
            children="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>
        <div className={classes.Collapse}>
          <Collapse
            title="Service"
            children="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>
        <div className={classes.Collapse}>
          <Collapse
            title="Sécurité"
            children="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
    </div>
  );
}