import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NotFound from "../components/NotFound/NotFound";
import { useTheme } from "../context/ThemeContext";
import style from "./styles/Pages.module.css";

const NotFoundPage = () => {
  const { theme } = useTheme();
  return (
    <div className={style.errorPageWrapper} data-theme={theme}>
      <Header />
      <div className={style.errorContent}>
        <NotFound />
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
