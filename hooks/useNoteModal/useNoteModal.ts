"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useTransition } from "@react-spring/web";
import {
  CheckListItem,
  NoteModalProps,
  ToggleChecklistItemResponse,
} from "@/types/notes";
import {
  useTodos,
  useUpdateTodoBackground,
  useToggleChecklistItem,
} from "@/hooks/useTodos/useTodos";

type UseNoteModalParams = Pick<NoteModalProps, "isOpen" | "onSubmit" | "initialData">;

export function useNoteModal({ isOpen, onSubmit, initialData }: UseNoteModalParams) {
  const [isEditMode, setIsEditMode] = useState(false);
  const { mutate: toggleTodoItem } = useToggleChecklistItem();
  const { data: allTodosData } = useTodos("NOTES");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [modalItems, setModalItems] = useState<CheckListItem[]>([]);
  const [currentBg, setCurrentBg] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { mutate: updateTodoBg, isPending: isBgUpdating } = useUpdateTodoBackground();

  const modalTransition = useTransition(isOpen, {
    from: { opacity: 0, transform: "scale(0.95)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.95)" },
    config: { tension: 280, friction: 22 },
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsEditMode(!initialData);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, initialData]);

  useEffect(() => {
    if (initialData?.id && allTodosData?.todos) {
      const updatedTodo = allTodosData.todos.find((todo) => todo.id === initialData.id);
      if (updatedTodo) {
        setModalItems(updatedTodo.items || []);
      }
    }
  }, [allTodosData, initialData?.id]);

  useEffect(() => {
    if (isOpen && initialData) {
      setTitle(initialData.title || "");
      setContent(initialData.content || "");
      setModalItems(initialData.items || []);
      const bg = initialData.backgroundImage;
      setCurrentBg(bg && bg !== "none" ? bg : null);
    } else if (!isOpen) {
      setTitle("");
      setContent("");
      setModalItems([]);
      setCurrentBg(null);
    }
    setValidationError(null);
  }, [isOpen, initialData]);

  const handleFieldChange = useCallback(
    (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
      setValidationError(null);
      setter(value);
    },
    [],
  );

  const handleAddItem = useCallback(() => {
    setValidationError(null);
    setModalItems((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 2000000000), text: "", isCompleted: false },
    ]);
  }, []);

  const handleItemTextChange = useCallback((itemId: number, newText: string) => {
    setValidationError(null);
    setModalItems((prevItems) =>
      prevItems.map((item) => (item && item.id === itemId ? { ...item, text: newText } : item)),
    );
  }, []);

  const handleItemDelete = useCallback((itemId: number) => {
    setModalItems((prev) => prev.filter((item) => item && item.id !== itemId));
  }, []);

  const handleBgFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file || !initialData?.id) return;

      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        updateTodoBg(
          { id: initialData.id, backgroundImage: base64String },
          { onSuccess: () => setCurrentBg(base64String) },
        );
      };
      reader.readAsDataURL(file);
    },
    [initialData?.id, updateTodoBg],
  );

  const handleRemoveBg = useCallback(() => {
    if (!initialData?.id) return;
    updateTodoBg(
      { id: initialData.id, backgroundImage: "none" },
      { onSuccess: () => setCurrentBg(null) },
    );
  }, [initialData?.id, updateTodoBg]);

  const handleFormSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      if (!isEditMode) return;

      const hasValidTitle = title.trim().length > 0;
      const hasValidContent = content.trim().length > 0;
      const hasValidChecklistItems = modalItems.some((item) => item && item.text.trim().length > 0);

      if (!hasValidTitle && !hasValidContent && !hasValidChecklistItems) {
        setValidationError("The note cannot be empty.");
        return;
      }

      const cleanItems = modalItems
        .filter((item) => item && typeof item.id === "number" && item.text.trim().length > 0)
        .map((item) => ({ ...item, text: item.text.trim() }));

      onSubmit(title.trim(), content.trim(), cleanItems);
    },
    [isEditMode, title, content, modalItems, onSubmit],
  );

  const handleCheckboxToggle = useCallback(
    (checkboxId: number) => {
      setModalItems((prevItems) =>
        prevItems.map((item) =>
          item.id === checkboxId ? { ...item, isCompleted: !item.isCompleted } : item,
        ),
      );

      if (initialData?.id) {
        toggleTodoItem(
          { todoId: initialData.id, itemId: checkboxId },
          {
            onSuccess: (data) => {
              const response = data as ToggleChecklistItemResponse;
              const items = response.toggleChecklistItem?.items;
              if (items) {
                setModalItems(items);
              }
            },
            onError: () => {
              setModalItems((prevItems) =>
                prevItems.map((item) =>
                  item.id === checkboxId ? { ...item, isCompleted: !item.isCompleted } : item,
                ),
              );
            },
          },
        );
      }
    },
    [initialData?.id, toggleTodoItem],
  );

  const handleEditModeToggle = useCallback(() => {
    setIsEditMode((prev) => !prev);
  }, []);

  const handleTitleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleFieldChange(setTitle, event.target.value);
    },
    [handleFieldChange],
  );

  const handleContentChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      handleFieldChange(setContent, event.target.value);
    },
    [handleFieldChange],
  );

  const handleUploadClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleStopPropagation = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
  }, []);

  return {
    isEditMode,
    title,
    content,
    modalItems,
    currentBg,
    validationError,
    fileInputRef,
    isBgUpdating,
    modalTransition,
    handleAddItem,
    handleItemTextChange,
    handleItemDelete,
    handleBgFileChange,
    handleRemoveBg,
    handleFormSubmit,
    handleCheckboxToggle,
    handleEditModeToggle,
    handleTitleChange,
    handleContentChange,
    handleUploadClick,
    handleStopPropagation,
  };
}
