import classes from "./Banner.module.scss";
const Banner = (props) => {
  const { page, text, src} = props;
  let bannerClass = classes.Container + ' '
  switch (page) {
    case "Home":
      bannerClass += classes.Container_home;
      break;
    case "About":
      bannerClass += classes.Container_about;
      break;
    default:
      break;
  }

  return (
    <div className={bannerClass}>
      <img src={src} alt="" />
      {text && <h2>{text}</h2>}
    </div>
  );
};
export default Banner;