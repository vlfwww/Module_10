import React from "react";
import { useTranslation } from "react-i18next";
import style from "./NoteCard.module.css";
import { NoteCardProps } from "../../types/notes";

const NoteCard: React.FC<NoteCardProps> = ({
  items,
  showCheckboxes,
  onCheckboxChange,
  noteId,
  content,
}) => {
  const { t } = useTranslation();
  const safeItems = Array.isArray(items) ? items : [];

  return (
    <div className={style.notesList}>
      {showCheckboxes ? (
        safeItems.length > 0 ? (
          safeItems.map((item) => {
            const uniqueHtmlId = `note-${noteId}-item-${item.id}`;
            return (
              <div key={item.id} className={style.checkboxRow}>
                <input
                  type="checkbox"
                  id={uniqueHtmlId}
                  checked={item.isCompleted}
                  onChange={() => onCheckboxChange(item.id)}
                />
                <label htmlFor={uniqueHtmlId}>{item.text}</label>
              </div>
            );
          })
        ) : (
          <p className={style.noteText}>{t("note_card.no_items")}</p>
        )
      ) : (
        <div className={style.contentWrapper}>
          <p className={style.noteText}>{content || t("note_card.no_description")}</p>
        </div>
      )}
    </div>
  );
};

export default React.memo(NoteCard);
