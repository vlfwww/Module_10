import { useTheme } from "../../context/ThemeContext";
import ErrorIcon from "../UI/Icons/ErrorIcon";
import style from "./NotFound.module.css";

const NotFound = () => {
  const { theme } = useTheme();
  return (
    <div className={style.notFoundWrapper} data-theme={theme}>
      <ErrorIcon className={style.errorIcon} />
      <h1>Page not found</h1>
    </div>
  );
};

export default NotFound;
