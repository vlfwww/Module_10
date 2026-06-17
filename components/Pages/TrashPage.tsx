"use client";

import React, { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import style from "./Pages.module.css";
import NoteList from "../NoteList/NoteList";
import Button from "../UI/Button/Button";
import AppLayout from "../AppLayout/AppLayout";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Loader from "../UI/Loader/Loader";
import ErrorView from "../ErrorView/ErrorView";
import { useSettings } from "@/context/SettingsContext";
import {
  useChangeTodoStatus,
  useDeleteAllTrash,
  useDeleteTodos,
  useTodos,
} from "@/hooks/useTodos/useTodos";
import { Todo } from "@/types/notes";
import { useNotification } from "@/context/NotificationContext";

const TrashPage: React.FC = () => {
  const { t } = useTranslation();
  const { isListView } = useSettings();
  const { showNotification } = useNotification();

  const { data, isLoading, isError, error, refetch } = useTodos("TRASH");
  const { mutate: deleteTodo } = useDeleteTodos();
  const { mutate: changeTodoStatus } = useChangeTodoStatus();
  const { mutate: deleteAllTrash } = useDeleteAllTrash();

  const todos = useMemo(() => data?.todos || [], [data?.todos]);

  const handleDeletePermanently = useCallback(
    (id: number) => {
      deleteTodo(id, {
        onSuccess: () => {
          showNotification(t("notification_messages.todo_deleted_forever"), "success");
        },
      });
    },
    [deleteTodo, showNotification, t],
  );

  const handleCleanTrash = useCallback(() => {
    if (todos.length > 0) {
      deleteAllTrash(todos, {
        onSuccess: () => showNotification(t("notification_messages.trash_cleared"), "success"),
      });
    }
  }, [todos, deleteAllTrash, showNotification, t]);

  const handleArchiveTodo = useCallback(
    (id: number) => {
      changeTodoStatus(
        { id, newStatus: "ARCHIVED" },
        {
          onSuccess: () => showNotification(t("notification_messages.todo_archived"), "success"),
        },
      );
    },
    [changeTodoStatus, showNotification, t],
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
                  onDelete={handleDeletePermanently}
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
