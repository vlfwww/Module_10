import React, { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import style from "./styles/Pages.module.css";
import NoteList from "../components/NoteList/NoteList";
import Button from "../components/UI/Button/Button";
import AppLayout from "../components/AppLayout/AppLayout";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Loader from "../components/UI/Loader/Loader";
import ErrorPage from "../pages/ErrorPage";
import { useSettings } from "../context/SettingsContext";
import { useChangeTodoStatus, useTodos, useUnarchiveAll } from "../hooks/useTodos";
import { Todo } from "../types/notes";

const ArchivePage: React.FC = () => {
  const { t } = useTranslation();
  const { isListView } = useSettings();

  const { data, isLoading, error, refetch } = useTodos("ARCHIVED");
  const { mutate: changeTodoStatus } = useChangeTodoStatus();
  const { mutate: unarchiveAll } = useUnarchiveAll();

  const todos = useMemo(() => data?.todos || [], [data?.todos]);

  const handleUnarchiveAll = useCallback(() => {
    if (todos.length > 0) {
      unarchiveAll(todos);
    }
  }, [todos, unarchiveAll]);

  const handleDeleteTodo = useCallback(
    (id: number) => {
      changeTodoStatus({ id, newStatus: "TRASH" });
    },
    [changeTodoStatus],
  );

  const handleUnarchiveTodo = useCallback(
    (id: number) => {
      changeTodoStatus({ id, newStatus: "NOTES" });
    },
    [changeTodoStatus],
  );

  if (isLoading) {
    return (
      <AppLayout>
        <Loader message={t("archive_page.loading")} />
      </AppLayout>
    );
  }

  if (error) {
    return (
      <ErrorPage
        message={error instanceof Error ? error.message : t("archive_page.error")}
        onRetry={refetch}
      />
    );
  }

  return (
    <AppLayout pageType="archive">
      <div className={style.buttonWrapper}>
        <Button className={style.unarchiveAll} onClick={handleUnarchiveAll}>
          {t("archive_page.unarchive_all")}
        </Button>
      </div>

      {todos.length > 0 ? (
        <div
          className={`${style.noteCardsWrapper} ${isListView ? style.listView : ""}`}
          role="list"
          aria-label="Archived notes"
        >
          <ErrorBoundary>
            {todos.map((note: Todo) => (
              <div role="listitem" key={note.id}>
                <NoteList
                  pageType="archive"
                  {...note}
                  viewType={isListView ? "list" : "grid"}
                  onDelete={handleDeleteTodo}
                  onUnarchive={handleUnarchiveTodo}
                />
              </div>
            ))}
          </ErrorBoundary>
        </div>
      ) : (
        <p className={style.zeroActiveNotes} aria-live="polite">
          {t("archive_page.empty")}
        </p>
      )}
    </AppLayout>
  );
};

export default React.memo(ArchivePage);
