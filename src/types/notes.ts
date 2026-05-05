import { PageType } from './common';

export interface Note {
  id: number;
  title: string | undefined;
  description: string;
  type: 'text' | 'todo';
  isDeleted?: boolean;
  isArchived?: boolean;
  items?: CheckboxItem[];
  showCheckboxes: boolean;
}

export interface CheckboxItem {
  id: number;
  name: string;
  text: string;
  checked: boolean;
}

export interface NoteCardProps {
  items: CheckboxItem[];
  showCheckboxes: boolean;
  onCheckboxChange: (id: number) => void;
}

export interface NoteListProps {
  pageType: PageType;
  id: number;
  onDelete: (id: number) => void;
  onUnarchive?: (id: number) => void;
  onArchive?: (id: number) => void;
  onEdit: () => void;
  title?: string | undefined;
}

export interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, description: string) => void;
  initialData?: { title: string; description: string };
}

export interface NotesContext {
  notes: Note[];
  addNote: (title: string, description: string) => void;
  updateNote: (id: number, title: string, description: string) => void;
  deleteNote: (id: number) => void;
  deleteForever: (id: number) => void;
  deleteAllTrash: () => void;
  archiveNote: (id: number) => void;
  unarchiveNote: (id: number) => void;
  unarchiveAll: () => void;
  toggleChecklistItem: (noteId: number, itemId: number) => void;
  uncheckAllItems: (noteId: number) => void;
  toggleNoteCheckboxes: (id: number) => void;
}
