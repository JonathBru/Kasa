import logements from "../data/logements.json";
import { Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Slideshow from "../components/Slideshow";
import classes from "../styles/LogementPage.module.scss";
import LogementDetails from "../components/LogementDetails";

const LogementPage = () => {
  const params = useParams();
  const logement = logements.find((item) => item.id === params.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!logement){
    return <Navigate to='../../not-found' />
  }

  return (
    <div className={classes.Content}>
      <Slideshow images={logement.pictures} />
      <LogementDetails logement={logement} />
    </div>
  );
};

export default LogementPage;