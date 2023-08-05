import classes from "./LogementDetails.module.scss";
import Rating from "./Rating";
import Tags from "./Tags";
import Collapsible from "./Collapse";

const LogementDetails = ({ logement }) => {

  return (
    <div className={classes.Container}>
      <div className={classes.top_block}>
        <div className={classes.title_block}>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>
        <div className={classes.host_block}>
          <div className={classes.host}>
            <span>{logement.host.name}</span>
            <img
              src={logement.host.picture}
              alt=""
              className={classes.host_picture}
            />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className={classes.description_block}>
        <div className={classes.collapsible_container}>
          <Collapsible title="Description" children={logement.description} />
        </div>
        <div className={classes.collapsible_container}>
          <Collapsible title="Équipements" children={logement.equipments} />
        </div>
      </div>
    </div>
  );
};

export default LogementDetails;