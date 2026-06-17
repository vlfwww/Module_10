import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import Input from "../UI/Input/Input";
import { ChecklistItemRowProps } from "@/types/notes";
import { withBasePath } from "@/lib/paths";
import * as S from "./ChecklistSection.styles";

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
      <S.DeleteItemButton type="button" onClick={handleDelete} aria-label={t("checklist.delete")}>
        <img
          src={withBasePath("/assets/images/trash-svgrepo-com.svg")}
          alt="delete"
          aria-hidden="true"
        />
      </S.DeleteItemButton>
    </S.ItemRow>
  );
};

export default React.memo(ChecklistItemRow);
