import React from "react";
import style from "./Header.module.css";
import { useAuth } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import logoIcon from "../../assets/images/logo.svg";
import menuIcon from "../../assets/images/menu-burger.svg";
import profileIcon from "../../assets/images/profile.jpg";
import { HeaderProps } from "../../types/common";

const Header: React.FC<HeaderProps> = ({ pageType }) => {
  const { isAuthenticated, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const userInfo = user?.email;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.headerWrapper}>
      <header className={style.header}>
        <div className={style.logoWrapper}>
          <img src={logoIcon} alt="Sidekick" />
          <p>sidekick</p>
        </div>

        <div className={style.burgerIcon} onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu" />
        </div>

        <div className={style.desktopMenu}>
          {isAuthenticated ? (
            <>
              <div className={style.profileInfo}>
                <img src={profileIcon} alt="User" />
                <p>{userInfo}</p>
              </div>
            </>
          ) : (
            pageType !== "signin" &&
            pageType !== "signup" && (
              <div className={style.buttonsWrapper}>
                <Link to="/signup" className={style.link}>
                  Sign Up
                </Link>
                <Link to="/signin" className={style.link}>
                  Sign In
                </Link>
              </div>
            )
          )}
        </div>

        <div className={`${style.mobileMenu} ${isMenuOpen ? style.open : ""}`}>
          <div className={style.mobileHeader}>
            <div className={style.logoWrapper}>
              <img src={logoIcon} alt="Logo" />
              <p>sidekick</p>
            </div>
            {isAuthenticated && <img src={profileIcon} alt="User" />}
          </div>

          <nav onClick={() => setIsMenuOpen(false)}>
            {isAuthenticated ? (
              <Sidebar />
            ) : (
              <div className={style.mobileAuthLinks}>
                <Link to="/signup" className={style.mobileLink}>
                  Sign up
                </Link>
                <Link to="/signin" className={style.mobileLink}>
                  Sign in
                </Link>
              </div>
            )}
          </nav>
        </div>

        {isMenuOpen && <div className={style.overlay} onClick={toggleMenu}></div>}
      </header>
    </div>
  );
};

export default Header;
