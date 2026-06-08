import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useTransition } from "@react-spring/web";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";
import Switch from "../UI/Switch/Switch";
import ChecklistSection from "../ChecklistSection/ChecklistSection";
import { NoteModalProps, CheckListItem } from "../../types/notes";
import {
  useTodos,
  useToggleChecklistItem,
  useUpdateTodoBackground,
} from "../../hooks/useTodos/useTodos";
import crossIcon from "../../assets/images/cross.svg";
import envelopeIcon from "../../assets/images/envelope.svg";
import pencilImage from "../../assets/images/pencil.svg";
import * as S from "./NoteModal.styles";

const NoteModal: React.FC<NoteModalProps> = ({ isOpen, onClose, onSubmit, initialData }) => {
  const { t } = useTranslation();
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
      const updatedTodo = allTodosData.todos.find((t) => t.id === initialData.id);
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

  const handleBgFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
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
  };

  const handleRemoveBg = useCallback(() => {
    if (!initialData?.id) return;
    updateTodoBg(
      { id: initialData.id, backgroundImage: "none" },
      { onSuccess: () => setCurrentBg(null) },
    );
  }, [initialData?.id, updateTodoBg]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
  };

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
            onSuccess: (data: unknown, _variables, _onMutateResult, _context) => {
              const response = data as { items: CheckListItem[] };
              if (response && response.items) {
                setModalItems(response.items);
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

  const headerTitle = !initialData
    ? t("note_modal.create_title")
    : isEditMode
      ? t("note_modal.edit_title")
      : title || `NOTE ${initialData.id}`;

  return modalTransition((styles, item) =>
    item ? (
      <S.Overlay onClick={onClose} style={{ opacity: styles.opacity }}>
        <S.ModalWindow
          style={styles}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          <S.ModalForm onSubmit={handleFormSubmit}>
            <S.Header>
              <p>{headerTitle}</p>
              {initialData && (
                <Switch
                  data-testid="edit-mode-switch"
                  label={t("note_modal.edit_mode")}
                  checked={isEditMode}
                  onChange={() => setIsEditMode(!isEditMode)}
                />
              )}
              <S.CloseButton type="button" onClick={onClose} aria-label={t("common.cancel")}>
                <img src={crossIcon} alt="" aria-hidden="true" />
              </S.CloseButton>
            </S.Header>

            <S.FormContent>
              {isEditMode ? (
                <>
                  <Input
                    data-testid="modal-title-input"
                    label={t("note_modal.title_label")}
                    iconSrc={envelopeIcon}
                    maxLength={50}
                    value={title}
                    onChange={(e) => handleFieldChange(setTitle, e.target.value)}
                  />
                  <Textarea
                    data-testid="modal-description-input"
                    label={t("note_modal.desc_label")}
                    iconSrc={pencilImage}
                    placeholder={t("note_modal.desc_placeholder")}
                    value={content}
                    onChange={(e) => handleFieldChange(setContent, e.target.value)}
                  />
                  {initialData && (
                    <S.BackgroundSection>
                      <S.BackgroundHeaderRow>
                        <p>{t("note_modal.bg_section")}</p>
                        <input
                          type="file"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          accept=".jpg,.jpeg,.png"
                          onChange={handleBgFileChange}
                          disabled={isBgUpdating}
                        />
                        <Button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          disabled={isBgUpdating}
                        >
                          {isBgUpdating
                            ? t("note_modal.uploading")
                            : currentBg
                              ? t("note_modal.change_btn")
                              : t("note_modal.upload_btn")}
                        </Button>
                      </S.BackgroundHeaderRow>
                      {currentBg && (
                        <S.PreviewContainer>
                          <S.BackgroundPreview $src={currentBg} />
                          <S.RemoveBgButton
                            type="button"
                            onClick={handleRemoveBg}
                            data-testid="remove-bg"
                          >
                            {t("note_modal.remove_btn")}
                          </S.RemoveBgButton>
                        </S.PreviewContainer>
                      )}
                    </S.BackgroundSection>
                  )}
                  <S.ItemsSection>
                    <S.ItemsHeaderRow>
                      <p>{t("note_modal.checklist_section")}</p>
                      <Button type="button" onClick={handleAddItem} data-testid="add-todo-btn">
                        {t("note_modal.add_item")}
                      </Button>
                    </S.ItemsHeaderRow>
                    <ChecklistSection
                      items={modalItems}
                      onTextChange={handleItemTextChange}
                      onDelete={handleItemDelete}
                    />
                  </S.ItemsSection>
                </>
              ) : (
                <S.NotesList>
                  <S.NoteText>{content || t("note_card.no_description")}</S.NoteText>
                  {modalItems.length > 0 ? (
                    modalItems.map((item) => {
                      const uniqueHtmlId = initialData
                        ? `note-${initialData.id}-item-${item.id}`
                        : `item-${item.id}`;
                      return (
                        <S.CheckboxRow key={item.id}>
                          <input
                            type="checkbox"
                            id={uniqueHtmlId}
                            checked={item.isCompleted}
                            onChange={() => handleCheckboxToggle(item.id)}
                          />
                          <label htmlFor={uniqueHtmlId}>{item.text}</label>
                        </S.CheckboxRow>
                      );
                    })
                  ) : (
                    <S.NoteText>{t("note_card.no_items")}</S.NoteText>
                  )}
                </S.NotesList>
              )}
            </S.FormContent>

            {isEditMode && validationError && (
              <S.ErrorMessage role="alert">{t("note_modal.error_empty")}</S.ErrorMessage>
            )}

            {isEditMode && (
              <S.Footer>
                <Button type="submit" data-testid="modal-submit-button">
                  {initialData ? t("note_modal.save") : t("note_modal.create")}
                </Button>
              </S.Footer>
            )}
          </S.ModalForm>
        </S.ModalWindow>
      </S.Overlay>
    ) : null,
  );
};

export default React.memo(NoteModal);
