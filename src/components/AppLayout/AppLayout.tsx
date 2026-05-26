import React from "react";
import style from "./AppLayout.module.css";
import { useAuth } from "../../context/AuthContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AppLayoutProps } from "../../types/common";
import Sidebar from "../UI/Sidebar/Sidebar";
import { useSettings } from "../../context/SettingsContext";

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  hideSidebar = false,
  pageType = "notes",
}) => {
  const { theme } = useSettings();
  const { isAuthenticated } = useAuth();
  const showSidebar = isAuthenticated && !hideSidebar;

  return (
    <div className={style.mainPageWrapper} data-theme={theme}>
      <Header pageType={pageType} />

      <div className={style.contentWrapper}>
        <div className={style.pageContent}>
          {showSidebar && (
            <div role="complementary" aria-label="Sidebar navigation">
              <Sidebar className={style.sidebar} />
            </div>
          )}

          <main className={style.mainContent} id="main-content">
            {children}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AppLayout;
