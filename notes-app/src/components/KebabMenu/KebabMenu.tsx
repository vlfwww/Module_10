import React from "react";
import style from "./KebabMenu.module.css";
import { KebabMenuProps } from "../../types/common";


const KebabMenu: React.FC<KebabMenuProps> = ({
  pageType,
  onDelete,
  onUnarchive,
  onArchive,
  onToggleCheckboxes,
  showCheckboxes,
  onUncheckAll,
}) => {
  return (
    <div className={style.kebabMenu} onClick={(e) => e.stopPropagation()}>
      {pageType === "notes" && (
        <>
          <p onClick={onDelete}>Delete note</p>
          <p onClick={onToggleCheckboxes}>
            {showCheckboxes ? "Hide checkboxes" : "Show checkboxes"}
          </p>

          {onUncheckAll && <p onClick={onUncheckAll}>Uncheck all</p>}

          <p onClick={onArchive}>Archive</p>
        </>
      )}

      {pageType === "trash" && (
        <>
          <p onClick={onDelete}>Delete forever</p>
          <p onClick={onArchive}>Archive</p>
        </>
      )}

      {pageType === 'archive' && (
        <>
          <p onClick={onUnarchive}>Unarchive</p>
          <p onClick={onDelete}>Delete</p>
        </>
      )}
    </div>
  );
};

export default KebabMenu;
