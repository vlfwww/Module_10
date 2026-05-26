import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import style from "./styles/Pages.module.css";
import AppLayout from "../components/AppLayout/AppLayout";
import Accordion from "../components/UI/Accordion/Accordion";
import Button from "../components/UI/Button/Button";
import { useAuth } from "../context/AuthContext";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import ProfileSettings from "../components/ProfileSettings/ProfileSettings";
import Statistics from "../components/Statistics/Statistics";

const ProfilePage: React.FC = () => {
  const { t } = useTranslation();
  const { logout } = useAuth();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <AppLayout>
      <div className={style.profileContainer} role="main" aria-label="Profile settings">
        <Accordion title={t("profile_page.profile_info")}>
          <div className={`${style.profileCard} ${style.userInfo}`}>
            <ProfileForm />
            <div className={style.actions}>
              <p className={style.actionsTitle}>{t("profile_page.actions")}</p>
              <Button className={style.logoutButton} onClick={handleLogout}>
                {t("profile_page.logout")}
              </Button>
            </div>
          </div>
        </Accordion>

        <Accordion title={t("profile_page.statistics")}>
          <div className={style.profileCard}>
            <Statistics />
          </div>
        </Accordion>

        <Accordion title={t("profile_page.settings")}>
          <div className={style.profileCard}>
            <ProfileSettings />
          </div>
        </Accordion>
      </div>
    </AppLayout>
  );
};

export default React.memo(ProfilePage);
