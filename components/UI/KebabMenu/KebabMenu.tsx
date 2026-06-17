import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { KebabMenuProps } from "@/types/common";
import * as S from "./KebabMenu.styles";

const KebabMenu: React.FC<KebabMenuProps> = ({
  pageType,
  onDelete,
  onUnarchive,
  onArchive,
  onToggleCheckboxes,
  showCheckboxes,
  onUncheckAll,
  placement = "bottom-right",
  menuRef,
  springStyle,
}) => {
  const { t } = useTranslation();

  const handleKeyDown = useCallback((e: React.KeyboardEvent, action?: () => void) => {
    if ((e.key === "Enter" || e.key === " ") && action) {
      e.preventDefault();
      action();
    }
  }, []);

  return (
    <S.KebabMenuContainer
      ref={menuRef}
      $placement={placement}
      style={springStyle}
      onClick={(e) => e.stopPropagation()}
      role="menu"
      aria-label="Note options"
    >
      {pageType === "notes" && (
        <>
          <S.KebabMenuItem
            role="menuitem"
            data-testid="delete-note-btn"
            tabIndex={0}
            onClick={onDelete}
            onKeyDown={(e) => handleKeyDown(e, onDelete)}
          >
            {t("kebab_menu.delete")}
          </S.KebabMenuItem>
          <S.KebabMenuItem
            role="menuitem"
            tabIndex={0}
            onClick={onToggleCheckboxes}
            onKeyDown={(e) => handleKeyDown(e, onToggleCheckboxes)}
          >
            {showCheckboxes ? t("kebab_menu.hide_checkboxes") : t("kebab_menu.show_checkboxes")}
          </S.KebabMenuItem>
          {onUncheckAll && (
            <S.KebabMenuItem
              role="menuitem"
              tabIndex={0}
              onClick={onUncheckAll}
              onKeyDown={(e) => handleKeyDown(e, onUncheckAll)}
            >
              {t("kebab_menu.uncheck_all")}
            </S.KebabMenuItem>
          )}
          <S.KebabMenuItem
            role="menuitem"
            tabIndex={0}
             data-testid="archive-note-btn"
            onClick={onArchive}
            onKeyDown={(e) => handleKeyDown(e, onArchive)}
          >
            {t("kebab_menu.archive")}
          </S.KebabMenuItem>
        </>
      )}

      {pageType === "trash" && (
        <>
          <S.KebabMenuItem
            data-testid="permanent-delete-btn"
            role="menuitem"
            tabIndex={0}
            onClick={onDelete}
            onKeyDown={(e) => handleKeyDown(e, onDelete)}
          >
            {t("kebab_menu.delete_forever")}
          </S.KebabMenuItem>
          <S.KebabMenuItem
            role="menuitem"
            tabIndex={0}
            onClick={onArchive}
            onKeyDown={(e) => handleKeyDown(e, onArchive)}
          >
            {t("kebab_menu.archive")}
          </S.KebabMenuItem>
        </>
      )}

      {pageType === "archive" && (
        <>
          <S.KebabMenuItem
            data-testid="unarchive-note-btn"
            role="menuitem"
            tabIndex={0}
            onClick={onUnarchive}
            onKeyDown={(e) => handleKeyDown(e, onUnarchive)}
          >
            {t("kebab_menu.unarchive")}
          </S.KebabMenuItem>
          <S.KebabMenuItem
            role="menuitem"
            tabIndex={0}
            onClick={onDelete}
            onKeyDown={(e) => handleKeyDown(e, onDelete)}
          >
            {t("kebab_menu.delete")}
          </S.KebabMenuItem>
        </>
      )}
    </S.KebabMenuContainer>
  );
};

export default React.memo(KebabMenu);
