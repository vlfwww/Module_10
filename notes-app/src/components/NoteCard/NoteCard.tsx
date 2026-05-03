import React from "react";
import style from "./NoteCard.module.css";
import { NoteCardProps } from "../../types/notes";
import { useNotes } from "../../context/NotesContext";

const NoteCard: React.FC<NoteCardProps> = ({ items, showCheckboxes, noteId}) => {
 const {toggleChecklistItem} = useNotes();

  return (
    <div className={style.notesList}>
      {items.map((item) => (
        <div key={item.id} className={style.checkboxRow}>
          <input
            type="checkbox"
            id={String(item.id)}
            checked={item.checked}
            onChange={() => toggleChecklistItem(noteId, item.id)}
          />
          {showCheckboxes ? (
            <label htmlFor={String(item.id)}>{item.text}</label>
          ) : (
            <span className={style.noteText}>{item.text}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default NoteCard;