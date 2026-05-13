import React from "react";
import style from "./AppLayout.module.css";
import { useAuth } from "../../context/AuthContext";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { useTheme } from "../../context/ThemeContext";
import { AppLayoutProps } from "../../types/common";

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  hideSidebar = false,
  pageType = "notes",
}) => {
  const { theme } = useTheme();
  const { isAuthenticated } = useAuth();
  const showSidebar = isAuthenticated && !hideSidebar;

  return (
    <div className={style.mainPageWrapper} data-theme={theme}>
      <Header pageType={pageType} />
      <div className={style.contentWrapper}>
        <div className={style.pageContent}>
          {showSidebar && <Sidebar className={style.sidebar} />}
          <main className={style.mainContent}>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
