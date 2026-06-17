"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";
import Switch from "../UI/Switch/Switch";
import ChecklistSection from "../ChecklistSection/ChecklistSection";
import { NoteModalProps } from "@/types/notes";
import { useNoteModal } from "@/hooks/useNoteModal/useNoteModal";
import { withBasePath } from "@/lib/paths";
import * as S from "./NoteModal.styles";

const NoteModal: React.FC<NoteModalProps> = ({ isOpen, onClose, onSubmit, initialData }) => {
  const { t } = useTranslation();
  const {
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
  } = useNoteModal({ isOpen, onSubmit, initialData });

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
          onClick={handleStopPropagation}
          role="dialog"
          aria-modal="true"
        >
          <S.ModalForm onSubmit={handleFormSubmit}>
            <S.Header>
              <div className="modal-header-title">{headerTitle}</div>
              <S.CloseButton type="button" onClick={onClose} aria-label={t("common.cancel")}>
                <img
                  src={withBasePath("/assets/images/cross.svg")}
                  alt="close"
                  aria-hidden="true"
                />
              </S.CloseButton>
            </S.Header>

            {initialData && (
              <Switch
                data-testid="edit-mode-switch"
                label={t("note_modal.edit_mode")}
                checked={isEditMode}
                onChange={handleEditModeToggle}
              />
            )}

            <S.FormContent>
              {isEditMode ? (
                <>
                  <Input
                    data-testid="modal-title-input"
                    label={t("note_modal.title_label")}
                    iconSrc="/assets/images/envelope.svg"
                    maxLength={50}
                    value={title}
                    onChange={handleTitleChange}
                  />
                  <Textarea
                    data-testid="modal-description-input"
                    label={t("note_modal.desc_label")}
                    iconSrc="/assets/images/pencil.svg"
                    placeholder={t("note_modal.desc_placeholder")}
                    value={content}
                    onChange={handleContentChange}
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
                        <Button type="button" onClick={handleUploadClick} disabled={isBgUpdating}>
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
