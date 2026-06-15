import React, { useCallback } from "react";
import * as S from "./HeaderMenu.styles";
import { HeaderMenuProps } from "@/types/common";
import { routes } from "@/lib/navigation/routes";
import NavLink from "../UI/NavLink/NavLink";

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  onLogout,
  onClose,
  springStyle,
  menuRef,
  t,
}) => {
  const handleLogoutClick = useCallback(() => {
    onLogout();
    onClose();
  }, [onLogout, onClose]);

  const handleStopPropagation = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
  }, []);

  return (
    <S.HeaderMenuContainer
      role="menu"
      ref={menuRef}
      style={springStyle}
      onClick={handleStopPropagation}
    >
      <NavLink
        href={routes.profile}
        prefetch
        onClick={onClose}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <S.HeaderMenuItem>{t("header.profile")}</S.HeaderMenuItem>
      </NavLink>
      <S.HeaderMenuItem onClick={handleLogoutClick}>{t("header.logout")}</S.HeaderMenuItem>
    </S.HeaderMenuContainer>
  );
};

export default React.memo(HeaderMenu);
