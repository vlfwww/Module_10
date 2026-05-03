import React from "react";
import style from "./styles/Pages.module.css";
import NoteList from "../components/NoteList/NoteList";
import { useNotes } from "../context/NotesContext";
import Button from "../components/UI/Button/Button";
import AppLayout from "../components/AppLayout/AppLayout";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

const ArchivePage: React.FC = () => {
  const { notes, deleteNote, unarchiveNote, unarchiveAll } = useNotes();

  const archivedNotes = notes.filter(
    (note) => note.isArchived && !note.isDeleted,
  );

  return (
    <AppLayout>
      <div className={style.buttonWrapper}>
        <Button className={style.unarchiveAll} onClick={unarchiveAll}>
          Unarchive
        </Button>
      </div>

      <div className={style.noteCardsWrapper}>
        <ErrorBoundary>
          {archivedNotes.map((note) => (
            <NoteList
              key={note.id}
              pageType="archive"
              {...note}
              onDelete={deleteNote}
              onUnarchive={unarchiveNote}
              initialType={note.type}
              onEdit={() => {}}
            />
          ))}
        </ErrorBoundary>
      </div>
    </AppLayout>
  );
};

export default ArchivePage;
