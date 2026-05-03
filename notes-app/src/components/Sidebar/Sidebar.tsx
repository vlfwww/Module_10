import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";
import { SidebarProps } from "../../types/common";


const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside className={className || style.sidebar}>
      <nav className={style.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${style.navItem} ${isActive ? style.active : ""}`
          }
        >
          Notes
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${style.navItem} ${isActive ? style.active : ""}`
          }
        >
          Profile
        </NavLink>

        <NavLink
          to="/archive"
          className={({ isActive }) =>
            `${style.navItem} ${isActive ? style.active : ""}`
          }
        >
          Archived
        </NavLink>

        <NavLink
          to="/trash"
          className={({ isActive }) =>
            `${style.navItem} ${isActive ? style.active : ""}`
          }
        >
          Trash
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
