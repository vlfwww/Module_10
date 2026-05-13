import React from "react";
import style from "./styles/Pages.module.css";
import AppLayout from "../components/AppLayout/AppLayout";
import Button from "../components/UI/Button/Button";
import { useAuth } from "../context/AuthContext";
import Switch from "../components/UI/Switch/Switch";
import { useTheme } from "../context/ThemeContext";

const ProfilePage: React.FC = () => {
  const { logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  return (
    <AppLayout>
      <Button
        className={style.logoutButton}
        textColor="white"
        onClick={() => logout()}
      >
        Logout
      </Button>
      <Switch
        label="Dark theme"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
    </AppLayout>
  );
};

export default ProfilePage;
