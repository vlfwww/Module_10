import React, { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import style from "./styles/Pages.module.css";
import NoteList from "../components/NoteList/NoteList";
import Button from "../components/UI/Button/Button";
import AppLayout from "../components/AppLayout/AppLayout";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Loader from "../components/UI/Loader/Loader";
import ErrorView from "../components/ErrorView/ErrorView";
import { useSettings } from "../context/SettingsContext";
import { useChangeTodoStatus, useDeleteAllTrash, useDeleTodos, useTodos } from "../hooks/useTodos";
import { Todo } from "../types/notes";

const TrashPage: React.FC = () => {
  const { t } = useTranslation();
  const { isListView } = useSettings();

  const { data, isLoading, isError, error, refetch } = useTodos("TRASH");
  const { mutate: deleteTodo } = useDeleTodos();
  const { mutate: changeTodoStatus } = useChangeTodoStatus();
  const { mutate: deleteAllTrash } = useDeleteAllTrash();

  const todos = useMemo(() => data?.todos || [], [data?.todos]);

  const handleCleanTrash = useCallback(() => {
    if (todos.length > 0) {
      deleteAllTrash(todos);
    }
  }, [todos, deleteAllTrash]);

  const handleArchiveTodo = useCallback(
    (id: number) => {
      changeTodoStatus({ id, newStatus: "ARCHIVED" });
    },
    [changeTodoStatus],
  );

  if (isLoading) {
    return (
      <AppLayout>
        <Loader message={t("trash_page.loading")} />
      </AppLayout>
    );
  }

  if (isError) {
    return (
      <AppLayout>
        <ErrorView
          message={error instanceof Error ? error.message : t("trash_page.error")}
          onRetry={refetch}
        />
      </AppLayout>
    );
  }

  return (
    <AppLayout pageType="trash">
      <div className={style.buttonWrapper}>
        <Button type="button" onClick={handleCleanTrash}>
          {t("trash_page.delete_all")}
        </Button>
      </div>

      {todos.length > 0 ? (
        <div
          className={`${style.noteCardsWrapper} ${isListView ? style.listView : ""}`}
          role="list"
          aria-label="Trash bin notes"
        >
          <ErrorBoundary>
            {todos.map((note: Todo) => (
              <div role="listitem" key={note.id}>
                <NoteList
                  pageType="trash"
                  {...note}
                  viewType={isListView ? "list" : "grid"}
                  onDelete={deleteTodo}
                  onArchive={handleArchiveTodo}
                />
              </div>
            ))}
          </ErrorBoundary>
        </div>
      ) : (
        <p className={style.zeroActiveNotes} aria-live="polite">
          {t("trash_page.empty")}
        </p>
      )}
    </AppLayout>
  );
};

export default React.memo(TrashPage);
