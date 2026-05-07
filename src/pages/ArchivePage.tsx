import React, { useMemo } from "react";
import style from "./styles/Pages.module.css";
import NoteList from "../components/NoteList/NoteList";
import { useNotes } from "../context/NotesContext";
import Button from "../components/UI/Button/Button";
import AppLayout from "../components/AppLayout/AppLayout";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

const ArchivePage: React.FC = () => {
  const { notes, deleteNote, unarchiveNote, unarchiveAll } = useNotes();

  const archivedNotes = useMemo(() => {
    return notes.filter((note) => note.isArchived && !note.isDeleted);
  }, [notes]);

  return (
    <AppLayout>
      <div className={style.buttonWrapper}>
        <Button className={style.unarchiveAll} onClick={unarchiveAll}>
          Unarchive all
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
              onEdit={() => {}}
            />
          ))}
        </ErrorBoundary>
      </div>
    </AppLayout>
  );
};

export default ArchivePage;
