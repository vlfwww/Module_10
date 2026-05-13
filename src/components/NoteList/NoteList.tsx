import React, { useMemo, useState } from "react";
import style from "./NoteList.module.css";
import NoteCard from "../NoteCard/NoteCard";
import KebabMenu from "../KebabMenu/KebabMenu";
import { NoteListProps } from "../../types/notes";
import { useNotes } from "../../context/NotesContext";
import kebabMenuIcon from "../../assets/images/menu.svg";

const NoteList: React.FC<NoteListProps> = ({
  pageType,
  id,
  onDelete,
  onUnarchive,
  onArchive,
  onEdit,
  title,
}) => {
  const { notes, toggleChecklistItem, uncheckAllItems, toggleNoteCheckboxes } =
    useNotes();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const activeNoteData = useMemo(() => {
    const found = notes.find((n) => n.id === id);
    return {
      checkboxes: found?.items || [],
      showCheckboxes: found?.showCheckboxes || false,
    };
  }, [notes, id]);

  const handleCheckboxChange = (checkboxId: string): void => {
    toggleChecklistItem(id, checkboxId);
  };

  const handleUncheckAll = (): void => {
    uncheckAllItems(id);
    setIsMenuOpen(false);
  };

  const { checkboxes, showCheckboxes } = activeNoteData;
  const hasCheckedItems = checkboxes.some((item) => item.checked);

  return (
    <div
      className={`${style.cardWrapper} ${isMenuOpen ? style.showMenu : ""}`}
      onMouseLeave={() => setIsMenuOpen(false)}
      onClick={pageType === "notes" ? onEdit : undefined}
    >
      <p className={style.noteTitle}>{title}</p>
      <div onClick={(e) => e.stopPropagation()}>
        <NoteCard
          items={checkboxes}
          showCheckboxes={showCheckboxes}
          onCheckboxChange={handleCheckboxChange}
        />
      </div>
      <button
        className={style.kebabButton}
        onClick={(e) => {
          e.stopPropagation();
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <img src={kebabMenuIcon} alt="menu" />
      </button>
      {isMenuOpen && (
        <KebabMenu
          pageType={pageType}
          onDelete={() => onDelete(id)}
          onToggleCheckboxes={() => {
            toggleNoteCheckboxes(id);
            setIsMenuOpen(false);
          }}
          showCheckboxes={showCheckboxes}
          onArchive={() => onArchive?.(id)}
          onUnarchive={() => onUnarchive?.(id)}
          {...(showCheckboxes && hasCheckedItems
            ? { onUncheckAll: handleUncheckAll }
            : {})}
        />
      )}{" "}
    </div>
  );
};

export default NoteList;
