import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import CrossIcon from "../components/UI/Icons/CrossIcon";
import { useTheme } from "../context/ThemeContext";
import style from "./styles/Pages.module.css";

const ErrorPage = () => {
  const { theme } = useTheme();
  return (
    <div className={style.errorPageWrapper} data-theme={theme}>
      <Header />
      <div className={style.errorContent}>
        <CrossIcon className={style.crossIcon} />
        <h1>Oops...</h1>
        <p>Something bad has just happened</p>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
