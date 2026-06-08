import React from "react";
import { useTranslation } from "react-i18next";
import Input from "../UI/Input/Input";
import { ChecklistSectionProps } from "../../types/notes";
import trashIcon from "../../assets/images/trash-svgrepo-com.svg";
import * as S from "./ChecklistSection.styles";

const ChecklistSection: React.FC<ChecklistSectionProps> = ({ items, onTextChange, onDelete }) => {
  const { t } = useTranslation();

  if (items.length === 0) return null;

  return (
    <S.ScrollableItems role="list">
      {items.map((item, index) => {
        if (!item) return null;
        return (
          <S.ItemRow key={item.id} role="listitem" data-testid="check-row">
            <Input
              type="text"
              label={t("checklist.todo_label", { number: index + 1 })}
              value={item.text || ""}
              onChange={(e) => onTextChange(item.id, e.target.value)}
              data-testid="todo-input"
            />
            <S.DeleteItemButton
              type="button"
              onClick={() => onDelete(item.id)}
              aria-label={t("checklist.delete")}
            >
              <img src={trashIcon} alt="" aria-hidden="true" />
            </S.DeleteItemButton>
          </S.ItemRow>
        );
      })}
    </S.ScrollableItems>
  );
};

export default React.memo(ChecklistSection);
