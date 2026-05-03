import React from "react";
import style from "./AppLayout.module.css";
import { useAuth } from "../../context/AuthProvider";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { useTheme } from "../../context/ThemeContext";
import { ChildrenProps } from "../../types/common";

const AppLayout: React.FC<ChildrenProps> = ({ children }) => {
  const { theme } = useTheme();
  const { isAuthenticated } = useAuth();

  return (
    <div className={style.mainPageWrapper} data-theme={theme}>
      <Header />
      <div className={style.contentWrapper}>
        <div className={style.pageContent}>
          {isAuthenticated && <Sidebar className={style.sidebar} />}
          <main className={style.mainContent}>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
