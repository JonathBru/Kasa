import classes from "./LogementCard.module.scss";

const LogementCard = ({ logement }) => {
  return (
    <figure className={classes.Card}>
      <img src={logement.cover} alt="" className={classes.Card_image} />
      <figcaption className={classes.Card_caption}>{logement.title}</figcaption>
    </figure>
  );
};

export default LogementCard;