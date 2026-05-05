import React, { createContext, ReactNode, useState, useContext, useEffect } from 'react';
import { CheckboxItem, NotesContext } from '../types/notes';
import { Note } from '../types/notes';
import { useAuth } from './AuthProvider';

const NotesType = createContext<NotesContext | undefined>(undefined);

export const NotesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const storageKey = user ? `notes-app-data-${user.email}` : null;

  const [notes, setNotes] = useState<Note[]>(() => {
    if (storageKey) {
      const savedData = localStorage.getItem(storageKey);
      return savedData ? JSON.parse(savedData) : [];
    }
    return [];
  });

  useEffect(() => {
    if (storageKey) {
      const savedData = localStorage.getItem(storageKey);
      setNotes(savedData ? JSON.parse(savedData) : []);
    } else {
      setNotes([]);
    }
  }, [storageKey]);

  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(notes));
    }
  }, [notes, storageKey]);

  const addNote = (title: string, description: string) => {
    const parsedItems: CheckboxItem[] = description
      .split('\n')
      .filter((line) => line.trim() !== '')
      .map((line, index) => ({
        id: Date.now() + index,
        name: `item-${index}`,
        text: line,
        checked: false,
      }));

    const newNote: Note = {
      id: Date.now(),
      title,
      description,
      type: parsedItems.length > 0 ? 'todo' : 'text',
      isDeleted: false,
      items: parsedItems,
      showCheckboxes: false,
    };

    setNotes([...notes, newNote]);
  };

  const updateNote = (id: number, title: string, description: string) => {
    setNotes((prev) => {
      return prev.map((note) => {
        if (note.id === id) {
          const parsedItems: CheckboxItem[] = description
            .split('\n')
            .filter((line) => line.trim() !== '')
            .map((line, index) => {
              const existingItem = note.items?.find((oldItem) => oldItem.text === line);

              return {
                id: existingItem ? existingItem.id : Date.now() + index,
                name: `item-${index}`,
                text: line,
                checked: existingItem ? existingItem.checked : false,
              };
            });

          return {
            ...note,
            title: title,
            description: description,
            items: parsedItems,
            type: parsedItems.length > 0 ? 'todo' : 'text',
          };
        }
        return note;
      });
    });
  };

  const deleteNote = (id: number) => {
    setNotes((prev) => prev.map((note) => (note.id === id ? { ...note, isDeleted: true } : note)));
  };

  const deleteForever = (id: number) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const deleteAllTrash = () => {
    setNotes((prev) => prev.filter((note) => note.isDeleted !== true));
  };

  const archiveNote = (id: number) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isArchived: true, isDeleted: false } : n)),
    );
  };

  const unarchiveNote = (id: number) => {
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, isArchived: false } : n)));
  };

  const unarchiveAll = () => {
    setNotes((prev) => prev.map((n) => ({ ...n, isArchived: false })));
  };

  const toggleChecklistItem = (noteId: number, itemId: number) => {
    setNotes((prev) =>
      prev.map((note) => {
        if (note.id === noteId && note.items) {
          return {
            ...note,
            items: note.items.map((item) =>
              item.id === itemId ? { ...item, checked: !item.checked } : item,
            ),
          };
        }
        return note;
      }),
    );
  };

  const uncheckAllItems = (noteId: number) => {
    setNotes((prev) =>
      prev.map((note) => {
        if (note.id === noteId && note.items) {
          return {
            ...note,
            items: note.items.map((item) => ({ ...item, checked: false })),
          };
        }
        return note;
      }),
    );
  };

  const toggleNoteCheckboxes = (id: number) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, showCheckboxes: !note.showCheckboxes } : note,
      ),
    );
  };

  return (
    <NotesType.Provider
      value={{
        notes,
        addNote,
        updateNote,
        deleteNote,
        deleteForever,
        deleteAllTrash,
        archiveNote,
        unarchiveNote,
        unarchiveAll,
        toggleChecklistItem,
        uncheckAllItems,
        toggleNoteCheckboxes,
      }}
    >
      {children}
    </NotesType.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesType);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
