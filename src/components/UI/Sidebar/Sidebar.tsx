import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from "./Sidebar.module.css";
import { SidebarProps } from "../../../types/common";

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <aside className={className || style.sidebar}>
      <nav className={style.nav} aria-label={t("sidebar.nav_label")}>
        <NavLink
          to="/"
          className={({ isActive }) => `${style.navItem} ${isActive ? style.active : ""}`}
        >
          {t("sidebar.notes")}
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) => `${style.navItem} ${isActive ? style.active : ""}`}
        >
          {t("sidebar.profile")}
        </NavLink>

        <NavLink
          to="/archive"
          className={({ isActive }) => `${style.navItem} ${isActive ? style.active : ""}`}
        >
          {t("sidebar.archive")}
        </NavLink>

        <NavLink
          to="/trash"
          className={({ isActive }) => `${style.navItem} ${isActive ? style.active : ""}`}
        >
          {t("sidebar.trash")}
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
