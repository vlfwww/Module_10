import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import style from "./Header.module.css";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "../UI/Sidebar/Sidebar";
import logoIcon from "../../assets/images/logo.svg";
import menuIcon from "../../assets/images/menu-burger.svg";
import profileIcon from "../../assets/images/eye.svg";
import { HeaderProps } from "../../types/common";

const Header: React.FC<HeaderProps> = ({ pageType }) => {
  const { t } = useTranslation();
  const { isAuthenticated, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const userAvatarSrc = user?.profileImage || profileIcon;

  return (
    <div className={style.headerWrapper}>
      <header className={style.header}>
        <div className={style.logoWrapper}>
          <img src={logoIcon} alt="Sidekick" />
          <p>sidekick</p>
        </div>

        <button
          className={style.burgerIcon}
          onClick={toggleMenu}
          aria-label={t("header.menu")}
          aria-expanded={isMenuOpen}
        >
          <img src={menuIcon} alt="" aria-hidden="true" />
        </button>

        <div className={style.desktopMenu}>
          {isAuthenticated ? (
            <div className={style.profileInfo}>
              <Avatar alt={user?.email || "User"} src={userAvatarSrc} />
              <p>{user?.email}</p>
            </div>
          ) : (
            pageType !== "signin" &&
            pageType !== "signup" && (
              <div className={style.buttonsWrapper}>
                <Link to="/signup" className={style.link}>
                  {t("header.signup")}
                </Link>
                <Link to="/signin" className={style.link}>
                  {t("header.signin")}
                </Link>
              </div>
            )
          )}
        </div>

        <nav
          className={`${style.mobileMenu} ${isMenuOpen ? style.open : ""}`}
          aria-hidden={!isMenuOpen}
        >
          <div className={style.mobileHeader}>
            <div className={style.logoWrapper}>
              <img src={logoIcon} alt="Logo" />
              <p>sidekick</p>
            </div>
            {isAuthenticated && <Avatar alt="User" src={userAvatarSrc} />}
          </div>

          <div onClick={() => setIsMenuOpen(false)}>
            {isAuthenticated ? (
              <Sidebar />
            ) : (
              <div className={style.mobileAuthLinks}>
                <Link to="/signup" className={style.mobileLink}>
                  {t("header.signup")}
                </Link>
                <Link to="/signin" className={style.mobileLink}>
                  {t("header.signin")}
                </Link>
              </div>
            )}
          </div>
        </nav>

        {isMenuOpen && (
          <div className={style.overlay} onClick={toggleMenu} aria-hidden="true"></div>
        )}
      </header>
    </div>
  );
};

export default Header;
