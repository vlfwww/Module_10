import React from "react";
import * as S from "./HeaderMenu.styles";
import { HeaderMenuProps } from "../../types/common";
import { Link } from "react-router-dom";

const HeaderMenu: React.FC<HeaderMenuProps> = ({ onLogout, onClose, springStyle, menuRef, t }) => (
  <S.HeaderMenuContainer
    ref={menuRef}
    style={springStyle}
    onClick={(e) => e.stopPropagation()}
    role="menu"
  >
    <Link to="/profile" onClick={onClose} style={{ textDecoration: "none", color: "inherit" }}>
      <S.HeaderMenuItem>{t("header.profile")}</S.HeaderMenuItem>
    </Link>
    <S.HeaderMenuItem
      onClick={() => {
        onLogout();
        onClose();
      }}
    >
      {t("header.logout")}
    </S.HeaderMenuItem>
  </S.HeaderMenuContainer>
);

export default React.memo(HeaderMenu);
