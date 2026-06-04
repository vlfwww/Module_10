import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Avatar } from "@mui/material";
import style from "./Header.module.css";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "../UI/Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { HeaderProps } from "../../types/common";
import { getUserAvatarPath } from "../../utils/getUserAvatarPath/getUserAvatarPath";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { useTransition } from "@react-spring/web";
import defaultAvatar from "../../assets/images/default-avatar.svg";
import logo from "../../assets/images/logo.svg";
import menuIcon from "../../assets/images/menu-burger.svg";

const Header: React.FC<HeaderProps> = ({ pageType }) => {
  const { t } = useTranslation();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((prev) => !prev), []);

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const handleLogout = useCallback(() => {
    logout();
    navigate("/signin");
  }, [logout, navigate]);

  const transitions = useTransition(isProfileMenuOpen, {
    from: { opacity: 0, transform: "scale(0.95)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.95)" },
    config: { duration: 150 },
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };

    if (isProfileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isProfileMenuOpen]);

  const handleProfileMenuToggle = useCallback(() => {
    setIsProfileMenuOpen((prev) => !prev);
  }, []);

  const userAvatarSrc = getUserAvatarPath(user) || defaultAvatar;

  return (
    <div className={style.headerWrapper}>
      <header className={style.header}>
        <div className={style.logoWrapper}>
          <img src={logo} alt="Sidekick" />
          <p>sidekick</p>
        </div>

        <button
          className={style.burgerIcon}
          onClick={toggleMobileMenu}
          aria-label={t("header.menu")}
          aria-expanded={isMobileMenuOpen}
        >
          <img src={menuIcon} alt="" aria-hidden="true" />
        </button>

        <div className={style.desktopMenu}>
          {isAuthenticated ? (
            <div
              className={style.profileInfo}
              onClick={handleProfileMenuToggle}
              style={{ position: "relative", cursor: "pointer" }}
            >
              <Avatar src={userAvatarSrc} />
              <p>{user?.username}</p>

              {transitions(
                (style, item) =>
                  item && (
                    <HeaderMenu
                      menuRef={menuRef as React.RefObject<HTMLDivElement>}
                      springStyle={style}
                      onClose={handleProfileMenuToggle}
                      onLogout={handleLogout}
                      t={t}
                    />
                  ),
              )}
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
          className={`${style.mobileMenu} ${isMobileMenuOpen ? style.open : ""}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className={style.mobileHeader}>
            <div className={style.logoWrapper}>
              <img src={logo} alt="Logo" />
              <p>sidekick</p>
            </div>
            {isAuthenticated && <Avatar alt="User" src={userAvatarSrc} />}
          </div>

          <div onClick={() => setIsMobileMenuOpen(false)}>
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

        {isMobileMenuOpen && (
          <div
            role="presentation"
            className={style.overlay}
            onClick={toggleMobileMenu}
            aria-hidden="true"
          ></div>
        )}
      </header>
    </div>
  );
};

export default Header;
