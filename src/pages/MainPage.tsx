import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import style from "./styles/Pages.module.css";
import NoteList from "../components/NoteList/NoteList";
import AuthMessage from "../components/AuthMessage/AuthMessage";
import NoteModal from "../components/NoteModal/NoteModal";
import Button from "../components/UI/Button/Button";
import AppLayout from "../components/AppLayout/AppLayout";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import { useAuth } from "../context/AuthContext";
import { useSettings } from "../context/SettingsContext";
import { CheckListItem, Todo } from "../types/notes";
import { useChangeTodoStatus, useCreateTodo, useTodos, useUpdateTodo } from "../hooks/useTodos";
import ErrorView from "../components/ErrorView/ErrorView";
import Loader from "../components/UI/Loader/Loader";

const MainPage: React.FC = () => {
  const { t } = useTranslation();
  const { isAuthenticated } = useAuth();
  const { isListView } = useSettings();

  const { data, isLoading, isError, error, refetch } = useTodos("NOTES");
  const { mutate: changeTodoStatus } = useChangeTodoStatus();
  const { mutate: createTodo } = useCreateTodo();
  const { mutate: updateTodo } = useUpdateTodo();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editNote, setEditNote] = useState<Todo | null>(null);

  const todos = data?.todos || [];

  const handleModalSubmit = useCallback(
    (title: string, content: string, modalItems: CheckListItem[]) => {
      if (editNote) {
        updateTodo({
          id: editNote.id,
          input: { title, content, items: modalItems },
        });
        setEditNote(null);
      } else {
        const formattedItems = modalItems.map((item) => ({ text: item.text }));
        createTodo({ title, content, items: formattedItems });
        setIsModalOpen(false);
      }
    },
    [editNote, createTodo, updateTodo],
  );

  const handleDeleteTodo = useCallback(
    (id: number) => {
      changeTodoStatus({ id, newStatus: "TRASH" });
    },
    [changeTodoStatus],
  );

  const handleArchiveTodo = useCallback(
    (id: number) => {
      changeTodoStatus({ id, newStatus: "ARCHIVED" });
    },
    [changeTodoStatus],
  );

  const handleEditTodo = useCallback((note: Todo) => {
    setEditNote(note);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setEditNote(null);
  }, []);

  const handleCreateClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  if (!isAuthenticated) {
    return (
      <AppLayout>
        <AuthMessage />
      </AppLayout>
    );
  }

  if (isLoading) {
    return (
      <AppLayout>
        <Loader message={t("main_page.loading")} />
      </AppLayout>
    );
  }

  if (isError) {
    return (
      <AppLayout>
        <ErrorView
          message={error instanceof Error ? error.message : t("main_page.error")}
          onRetry={refetch}
        />
      </AppLayout>
    );
  }

  return (
    <AppLayout pageType="notes">
      <div className={style.buttonWrapper}>
        <Button onClick={handleCreateClick}>{t("main_page.create_note")}</Button>
      </div>

      {todos.length === 0 ? (
        <p className={style.zeroActiveNotes}>{t("main_page.empty")}</p>
      ) : (
        <div
          className={`${style.noteCardsWrapper} ${isListView ? style.listView : ""}`}
          role="list"
          aria-label="Notes list"
        >
          <ErrorBoundary>
            {todos.map((note: Todo) => (
              <div role="listitem" key={note.id}>
                <NoteList
                  pageType="notes"
                  {...note}
                  viewType={isListView ? "list" : "grid"}
                  onDelete={handleDeleteTodo}
                  onArchive={handleArchiveTodo}
                  onEdit={handleEditTodo}
                />
              </div>
            ))}
          </ErrorBoundary>
        </div>
      )}

      <NoteModal
        isOpen={isModalOpen || !!editNote}
        onClose={handleCloseModal}
        onSubmit={handleModalSubmit}
        initialData={editNote}
      />
    </AppLayout>
  );
};

export default MainPage;
