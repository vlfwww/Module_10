import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import Input from "../UI/Input/Input";
import { CheckListItem, ChecklistSectionProps } from "../../types/notes";
import * as S from "./ChecklistSection.styles";

type ChecklistItemRowProps = {
  item: CheckListItem;
  index: number;
  onTextChange: (id: number, text: string) => void;
  onDelete: (id: number) => void;
};

const ChecklistItemRow: React.FC<ChecklistItemRowProps> = ({
  item,
  index,
  onTextChange,
  onDelete,
}) => {
  const { t } = useTranslation();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onTextChange(item.id, event.target.value);
    },
    [item.id, onTextChange],
  );

  const handleDelete = useCallback(() => {
    onDelete(item.id);
  }, [item.id, onDelete]);

  return (
    <S.ItemRow role="listitem">
      <Input
        data-testid="todo-input"
        type="text"
        label={t("checklist.todo_label", { number: index + 1 })}
        value={item.text || ""}
        maxLength={80}
        onChange={handleChange}
      />
      <S.DeleteItemButton
        type="button"
        onClick={handleDelete}
        aria-label={t("checklist.delete")}
      >
        <img src="/assets/images/trash-svgrepo-com.svg" alt="delete" aria-hidden="true" />
      </S.DeleteItemButton>
    </S.ItemRow>
  );
};

const MemoizedChecklistItemRow = React.memo(ChecklistItemRow);

const ChecklistSection: React.FC<ChecklistSectionProps> = ({ items, onTextChange, onDelete }) => {
  if (items.length === 0) return null;

  return (
    <S.ScrollableItems role="list">
      {items.map((item, index) => {
        if (!item) return null;
        return (
          <MemoizedChecklistItemRow
            key={item.id}
            item={item}
            index={index}
            onTextChange={onTextChange}
            onDelete={onDelete}
          />
        );
      })}
    </S.ScrollableItems>
  );
};

export default React.memo(ChecklistSection);
