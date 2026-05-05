import React from 'react';
import style from './styles/Pages.module.css';
import NoteList from '../components/NoteList/NoteList';
import { useNotes } from '../context/NotesContext';
import Button from '../components/UI/Button/Button';
import AppLayout from '../components/AppLayout/AppLayout';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

const TrashPage: React.FC = () => {
  const { notes, deleteForever, archiveNote, deleteAllTrash } = useNotes();
  const trashNotes = notes.filter((note) => note.isDeleted);
  return (
    <AppLayout>
      <div className={style.buttonWrapper}>
        <Button type="button" onClick={deleteAllTrash}>
          Delete all
        </Button>
      </div>

      <div className={style.noteCardsWrapper}>
        <ErrorBoundary>
          {trashNotes.map((note) => (
            <NoteList
              pageType="trash"
              key={note.id}
              {...note}
              onDelete={deleteForever}
              onArchive={archiveNote}
              onEdit={() => {}}
            />
          ))}
        </ErrorBoundary>
      </div>
    </AppLayout>
  );
};

export default TrashPage;
