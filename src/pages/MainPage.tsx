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
import {
  useChangeTodoStatus,
  useCreateTodo,
  useTodos,
  useUpdateTodo,
} from "../hooks/useTodos/useTodos";
import ErrorView from "../components/ErrorView/ErrorView";
import Loader from "../components/UI/Loader/Loader";
import { useNotification } from "../context/NotificationContext";
import ExtraTodos from "../hooks/ExtraTodos";

const MainPage: React.FC = () => {
  const { t } = useTranslation();
  const { isAuthenticated } = useAuth();
  const { isListView } = useSettings();
  const { showNotification } = useNotification();

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
        updateTodo(
          { id: editNote.id, input: { title, content, items: modalItems } },
          {
            onSuccess: () => {
              showNotification(t("notification_messages.todo_updated"), "success");
              setEditNote(null);
            },
          },
        );
      } else {
        const formattedItems = modalItems.map((item) => ({ text: item.text }));
        createTodo(
          { title, content, items: formattedItems },
          {
            onSuccess: () => {
              showNotification(t("notification_messages.todo_created"), "success");
              setIsModalOpen(false);
            },
          },
        );
      }
    },
    [editNote, createTodo, updateTodo, showNotification, t],
  );

  const handleDeleteTodo = useCallback(
    (id: number) => {
      changeTodoStatus(
        { id, newStatus: "TRASH" },
        {
          onSuccess: () => showNotification(t("notification_messages.todo_deleted"), "success"),
        },
      );
    },
    [changeTodoStatus, showNotification, t],
  );

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
      <ExtraTodos />
    </AppLayout>
  );
};

export default MainPage;
