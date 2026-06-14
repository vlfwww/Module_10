"use client";

import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import style from "./Pages.module.css";
import AppLayout from "@/components/AppLayout/AppLayout";
import Accordion from "@/components/UI/Accordion/Accordion";
import Button from "@/components/UI/Button/Button";
import { useAuth } from "@/context/AuthContext";
import {
  DynamicProfileForm,
  DynamicProfileSettings,
  DynamicStatistics,
} from "@/lib/dynamic/components";
import { useRouter } from "next/navigation";

const ProfilePage: React.FC = () => {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = useCallback(() => {
    logout();
    router.push("/signin");
  }, [logout, router]);

  return (
    <AppLayout>
      <div className={style.profileContainer} role="main" aria-label="Profile settings">
        <Accordion title={t("profile_page.profile_info")} lazyMount>
          <div className={`${style.profileCard} ${style.userInfo}`}>
            <DynamicProfileForm />
            <div className={style.actions}>
              <p className={style.actionsTitle}>{t("profile_page.actions")}</p>
              <Button className={style.logoutButton} onClick={handleLogout}>
                {t("profile_page.logout")}
              </Button>
            </div>
          </div>
        </Accordion>

        <Accordion title={t("profile_page.statistics")} defaultOpen={false} lazyMount>
          <div className={style.profileCard}>
            <DynamicStatistics />
          </div>
        </Accordion>

        <Accordion title={t("profile_page.settings")} defaultOpen={false} lazyMount>
          <div className={style.profileCard}>
            <DynamicProfileSettings />
          </div>
        </Accordion>
      </div>
    </AppLayout>
  );
};

export default React.memo(ProfilePage);
