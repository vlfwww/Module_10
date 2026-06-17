import React from "react";
import { ChecklistSectionProps } from "@/types/notes";
import ChecklistItemRow from "./ChecklistItemRow";
import * as S from "./ChecklistSection.styles";

const ChecklistSection: React.FC<ChecklistSectionProps> = ({ items, onTextChange, onDelete }) => {
  if (items.length === 0) return null;

  return (
    <S.ScrollableItems role="list">
      {items.map((item, index) => {
        if (!item) return null;
        return (
          <ChecklistItemRow
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
