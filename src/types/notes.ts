import { PageType } from "./common";

export interface Note {
  id: string;
  title: string | undefined;
  description: string;
  type: "text" | "todo";
  isDeleted?: boolean;
  isArchived?: boolean;
  items?: CheckboxItem[];
  showCheckboxes: boolean;
}

export interface CheckboxItem {
  id: string;
  name: string;
  text: string;
  checked: boolean;
}

export interface NoteCardProps {
  items: CheckboxItem[];
  showCheckboxes: boolean;
  onCheckboxChange: (id: string) => void;
}

export interface NoteListProps {
  pageType: PageType;
  id: string;
  onDelete: (id: string) => void;
  onUnarchive?: (id: string) => void;
  onArchive?: (id: string) => void;
  onEdit: () => void;
  title?: string | undefined;
  viewType?: "list" | "grid";
}

export interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, description: string) => void;
  initialData: { title: string; description: string } | undefined;
}

export interface NotesContext {
  notes: Note[];
  addNote: (title: string, description: string) => void;
  updateNote: (id: string, title: string, description: string) => void;
  deleteNote: (id: string) => void;
  deleteForever: (id: string) => void;
  deleteAllTrash: () => void;
  archiveNote: (id: string) => void;
  unarchiveNote: (id: string) => void;
  unarchiveAll: () => void;
  toggleChecklistItem: (noteId: string, itemId: string) => void;
  uncheckAllItems: (noteId: string) => void;
  toggleNoteCheckboxes: (id: string) => void;
}
