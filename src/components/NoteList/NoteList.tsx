import React, { useState, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import NoteCard from "../NoteCard/NoteCard";
import KebabMenu from "../UI/KebabMenu/KebabMenu";
import { NoteListProps, Todo } from "../../types/notes";
import kebabMenuIcon from "../../assets/images/menu.svg";
import { useToggleChecklistItem, useUncheckAllItems } from "../../hooks/useTodos";
import * as S from "./NoteList.styles";
import { useTransition } from "@react-spring/web";
import { useKebabMenuPlacement } from "../../hooks/useKebabMenuPlacement";

const NoteList: React.FC<NoteListProps> = ({
  pageType,
  id,
  onDelete,
  onUnarchive,
  onArchive,
  onEdit,
  title,
  content,
  viewType,
  items = [],
  backgroundImage = null,
  ...rest
}) => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showCheckboxes, setShowCheckboxes] = useState<boolean>(false);

  const kebabAnchorRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuPlacement = useKebabMenuPlacement(isMenuOpen, kebabAnchorRef, menuRef);

  const { mutate: toggleTodoItem } = useToggleChecklistItem();
  const { mutate: uncheckAllItems } = useUncheckAllItems();

  const menuTransition = useTransition(isMenuOpen, {
    from: { opacity: 0, transform: "scale(0.9)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.9)" },
    config: { tension: 300, friction: 20 },
  });

  const handleCheckboxChange = useCallback(
    (checkboxId: number): void => {
      toggleTodoItem({ todoId: id, itemId: checkboxId });
    },

    [id, toggleTodoItem],
  );

  const handleUncheckAll = useCallback(() => {
    uncheckAllItems(id);

    setIsMenuOpen(false);
  }, [id, uncheckAllItems]);

  const handleToggleCheckboxes = useCallback(() => {
    setShowCheckboxes((prev) => !prev);

    setIsMenuOpen(false);
  }, []);

  const handleDelete = useCallback(() => onDelete(id), [id, onDelete]);

  const handleArchive = useCallback(() => onArchive?.(id), [id, onArchive]);

  const handleUnarchive = useCallback(() => onUnarchive?.(id), [id, onUnarchive]);

  const handleMouseLeave = useCallback(() => setIsMenuOpen(false), []);

  const handleKebabClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();

    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleCardClick = useCallback(() => {
    if (pageType === "notes" && onEdit) {
      onEdit({ id, title, content, items, ...rest } as Todo);
    }
  }, [pageType, onEdit, id, title, content, items, rest]);

  const hasCheckedItems = items?.some((item) => item.isCompleted);

  return (
    <S.CardWrapper
      $viewType={viewType}
      $isMenuOpen={isMenuOpen}
      $backgroundImage={backgroundImage}
      onMouseLeave={handleMouseLeave}
      onClick={pageType === "notes" ? handleCardClick : undefined}
      aria-expanded={isMenuOpen}
    >
      <S.NoteTitle $viewType={viewType}>{title}</S.NoteTitle>

      <div onClick={(e) => e.stopPropagation()}>
        <NoteCard
          items={items}
          showCheckboxes={showCheckboxes}
          onCheckboxChange={handleCheckboxChange}
          noteId={id}
          content={content}
        />
      </div>

      <S.KebabAnchor ref={kebabAnchorRef}>
        <S.KebabButton
          onClick={handleKebabClick}
          aria-label={t("note_list.menu_label")}
          aria-haspopup="menu"
        >
          <img src={kebabMenuIcon} alt="" aria-hidden="true" />
        </S.KebabButton>

        {menuTransition((styleProps, item) =>
          item ? (
            <KebabMenu
              pageType={pageType}
              onDelete={handleDelete}
              onToggleCheckboxes={handleToggleCheckboxes}
              showCheckboxes={showCheckboxes}
              onArchive={handleArchive}
              onUnarchive={handleUnarchive}
              onUncheckAll={showCheckboxes && hasCheckedItems ? handleUncheckAll : undefined}
              placement={menuPlacement}
              menuRef={menuRef}
              springStyle={styleProps}
            />
          ) : null,
        )}
      </S.KebabAnchor>
    </S.CardWrapper>
  );
};

export default React.memo(NoteList);
