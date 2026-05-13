import CrossIcon from "../UI/Icons/CrossIcon";
import style from "./ErrorView.module.css";

const ErrorView = () => {
  return (
    <div className={style.errorContent}>
      <CrossIcon className={style.crossIcon} />
      <h1>Oops...</h1>
      <p>Something bad has just happened</p>
    </div>
  );
};

export default ErrorView;
