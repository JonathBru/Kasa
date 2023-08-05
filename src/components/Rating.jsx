import starRed from "../assets/star_red.svg";
import starGrey from "../assets/star_grey.svg";
import classes from "./Rating.module.scss";

const Rating = ({ rating }) => {
  let ratings = [starGrey, starGrey, starGrey, starGrey, starGrey];
  ratings.fill(starRed, 0, rating);
  return (
    <div className={classes.Container}>
      {ratings.map((star, index) => (
        <img src={star} key={index} alt="rating star"></img>
      ))}
    </div>
  );
};

export default Rating;