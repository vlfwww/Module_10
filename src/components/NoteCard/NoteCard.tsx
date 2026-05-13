import React from "react";
import style from "./NoteCard.module.css";
import { NoteCardProps } from "../../types/notes";

const NoteCard: React.FC<NoteCardProps> = ({
  items,
  showCheckboxes,
  onCheckboxChange,
}) => {
  return (
    <div className={style.notesList}>
      {items.map((item) => (
        <div key={item.id} className={style.checkboxRow}>
          {showCheckboxes ? (
            <>
              <input
                type="checkbox"
                id={String(item.id)}
                checked={item.checked}
                onChange={() => onCheckboxChange(item.id)}
              />
              <label htmlFor={String(item.id)}>{item.text}</label>
            </>
          ) : (
            <span className={style.noteText}>{item.text}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default NoteCard;
