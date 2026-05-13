import React, { useMemo, useState } from "react";
import style from "./styles/Pages.module.css";
import NoteList from "../components/NoteList/NoteList";
import AuthMessage from "../components/AuthMessage/AuthMessage";
import NoteModal from "../components/NoteModal/NoteModal";
import { useNotes } from "../context/NotesContext";
import Button from "../components/UI/Button/Button";
import AppLayout from "../components/AppLayout/AppLayout";
import { Note } from "../types/notes";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import { useAuth } from "../context/AuthContext";
import { useSettings } from "../context/SettingsContext";

const MainPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { isListView } = useSettings();
  const { notes, addNote, updateNote, deleteNote, archiveNote } = useNotes();

  const activeNotes = useMemo(() => {
    return notes.filter((note) => !note.isDeleted && !note.isArchived);
  }, [notes]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editNote, setEditNote] = useState<Note | null>(null);

  const handleAddNote = (title: string, description: string) => {
    addNote(title, description);
    setIsModalOpen(false);
  };

  const handleUpdateNote = (title: string, description: string) => {
    if (editNote) {
      updateNote(editNote.id, title, description);
      setEditNote(null);
    }
  };

  return (
    <AppLayout>
      {!isAuthenticated ? (
        <AuthMessage />
      ) : (
        <>
          <div className={style.buttonWrapper}>
            <Button onClick={() => setIsModalOpen(true)}>Create a note</Button>
          </div>
          <div
            className={`${style.noteCardsWrapper} ${isListView ? style.listView : ""}`}
          >
            <ErrorBoundary>
              {activeNotes.map((note) => (
                <NoteList
                  pageType="notes"
                  key={note.id}
                  {...note}
                  onDelete={deleteNote}
                  onEdit={() => setEditNote(note)}
                  onArchive={archiveNote}
                  viewType={isListView ? "list" : "grid"}
                />
              ))}
            </ErrorBoundary>
          </div>
        </>
      )}

      <NoteModal
        isOpen={isModalOpen || !!editNote}
        onClose={() => {
          setIsModalOpen(false);
          setEditNote(null);
        }}
        onSubmit={editNote ? handleUpdateNote : handleAddNote}
        initialData={
          editNote
            ? { title: editNote.title || "", description: editNote.description }
            : undefined
        }
      />
    </AppLayout>
  );
};

export default MainPage;
