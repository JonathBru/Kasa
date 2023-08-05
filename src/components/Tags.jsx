import classes from "./Tags.module.scss";

const Tags = ({ tags }) => {
  return (
    <div className={classes.Container}>
      {tags.map((tag, index) => (
        <div key={index} className={classes.Tag}>
            <span key={index}>{tag}</span>
        </div>
      ))}
    </div>
  );
};

export default Tags;