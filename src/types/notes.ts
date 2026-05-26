import { PageType } from "./common";

export interface Todo {
  id: number;
  title: string;
  content?: string;
  items?: CheckListItem[];
  status?: "NOTES" | "ARCHIVED" | "TRASH";
  backgroundImage?: string;
  userId: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CheckListItem {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface NoteCardProps {
  items: CheckListItem[];
  showCheckboxes: boolean;
  onCheckboxChange: (id: number) => void;
  noteId: number;
  content: string | undefined;
}

export interface NoteListProps {
  pageType: PageType;
  id: number;
  onDelete: (id: number) => void;
  onUnarchive?: (id: number) => void;
  onArchive?: (id: number) => void;
  onEdit?: (note: Todo) => void;
  title?: string | undefined;
  content?: string;
  viewType: "list" | "grid";
  items?: CheckListItem[] | undefined;
  backgroundImage?: string | null;
}

export interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string, items: CheckListItem[]) => void;
  initialData: Todo | null;
}

export interface NotesContext {
  notes: Todo[];
  filter: "NOTES" | "ARCHIVED" | "TRASH";
  setFilter: (filter: "NOTES" | "ARCHIVED" | "TRASH") => void;
  addNote: (title: string, content: string, items: CheckListItem[]) => Promise<void>;
  updateNote: (todoId: number, title: string, content: string, items: CheckListItem[]) => void;
  deleteNote: (todoId: number) => void;
  deleteForever: (todoId: number) => void;
  deleteAllTrash: () => void;
  archiveNote: (todoId: number) => void;
  unarchiveNote: (todoId: number) => void;
  unarchiveAll: () => void;
  toggleChecklistItem: (todoId: number, itemId: number) => void;
  uncheckAllItems: (todoId: number) => void;
}

export interface GetTodoResponse {
  todos: Todo[];
}

export interface ChecklistSectionProps {
  items: CheckListItem[];
  onTextChange: (id: number, text: string) => void;
  onDelete: (id: number) => void;
}
