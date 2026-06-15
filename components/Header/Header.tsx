"use client";

import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Avatar } from "@mui/material";
import style from "./Header.module.css";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "../UI/Sidebar/Sidebar";
import { HeaderProps } from "../../types/common";
import Link from "next/link";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { useTransition } from "@react-spring/web";
import { useRouter } from "next/navigation";
import { getUserAvatarPath } from "@/utils/getUserAvatarPath/getUserAvatarPath";
import { withBasePath } from "@/lib/paths";
import { useClickOutside } from "@/hooks/useClickOutside/useClickOutside";

const Header: React.FC<HeaderProps> = ({ pageType }) => {
  const { t } = useTranslation();
  const { isAuthenticated, user, logout } = useAuth();
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((prev) => !prev), []);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null!);
  const closeProfileMenu = useCallback(() => setIsProfileMenuOpen(false), []);

  const handleLogout = useCallback(() => {
    logout();
    router.push("/signin");
  }, [logout, router]);

  const transitions = useTransition(isProfileMenuOpen, {
    from: { opacity: 0, transform: "scale(0.95)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.95)" },
    config: { duration: 150 },
  });

  useClickOutside(menuRef, isProfileMenuOpen, closeProfileMenu);

  const handleProfileMenuToggle = useCallback(() => {
    setIsProfileMenuOpen((prev) => !prev);
  }, []);

  const userAvatarSrc =
    getUserAvatarPath(user) || withBasePath("/assets/images/default-avatar.svg");

  return (
    <div className={style.headerWrapper}>
      <header className={style.header}>
        <div className={style.logoWrapper}>
          <img src={withBasePath("/assets/images/logo.svg")} alt="Sidekick" />
          <p>sidekick</p>
        </div>

        <button
          className={style.burgerIcon}
          onClick={toggleMobileMenu}
          aria-label={t("header.menu")}
          aria-expanded={isMobileMenuOpen}
        >
          <img src={withBasePath("/assets/images/menu-burger.svg")} alt="" aria-hidden="true" />
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
                (springStyle, item) =>
                  item && (
                    <HeaderMenu
                      menuRef={menuRef}
                      springStyle={springStyle}
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
                <Link href="/signup" className={style.link}>
                  {t("header.signup")}
                </Link>
                <Link href="/signin" className={style.link}>
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
              <img src={withBasePath("/assets/images/logo.svg")} alt="Logo" />
              <p>sidekick</p>
            </div>
            {isAuthenticated && <Avatar alt="User" src={userAvatarSrc} />}
          </div>

          <div onClick={closeMobileMenu}>
            {isAuthenticated ? (
              <Sidebar />
            ) : (
              <div className={style.mobileAuthLinks}>
                <Link href="/signup" className={style.mobileLink}>
                  {t("header.signup")}
                </Link>
                <Link href="/signin" className={style.mobileLink}>
                  {t("header.signin")}
                </Link>
              </div>
            )}
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className={style.overlay} onClick={toggleMobileMenu} aria-hidden="true"></div>
        )}
      </header>
    </div>
  );
};

export default React.memo(Header);
