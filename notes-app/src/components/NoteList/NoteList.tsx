import React, { useState} from "react";
import style from "./NoteList.module.css";
import NodeCard from "../NoteCard/NoteCard";
import KebabMenu from "../KebabMenu/KebabMenu";
import { NoteListProps } from "../../types/notes";
import { useNotes } from "../../context/NotesContext";
import kebabMenuIcon from '../../assets/images/menu.svg';

const NoteList: React.FC<NoteListProps> = ({
  pageType,
  id,
  onDelete,
  onUnarchive,
  onArchive,
  onEdit,
  title,
  description,
}) => {
  const { notes, toggleChecklistItem, uncheckAllItems } = useNotes();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showCheckboxes, setShowCheckboxes] = useState<boolean>(true);
  const currentNote = notes.find((n) => n.id === id);
  const checkboxes = currentNote?.items || [];


 const handleCheckboxChange = (checkboxId: number): void => {
    toggleChecklistItem(id, checkboxId);
  };

const handleUncheckAll = (): void => {
    uncheckAllItems(id);
    setIsMenuOpen(false);
  };

  const hasCheckedItems = checkboxes.some((item) => item.checked);

  return (
    <div
      className={`${style.cardWrapper} ${isMenuOpen ? style.showMenu : ""}`}
      onMouseLeave={() => setIsMenuOpen(false)}
      onClick={pageType === "notes" ? onEdit : undefined}
    >
      <p className={style.nodeTitle}>{title}</p>
      <div onClick={(e) => e.stopPropagation()}>
        <NodeCard
          noteId={id}
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
            setShowCheckboxes(!showCheckboxes);
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
