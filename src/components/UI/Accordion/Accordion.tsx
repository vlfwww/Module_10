import React, { useState } from "react";
import style from "./Accordion.module.css";
import { AccordionProps } from "../../../types/common";
import arrowIcon from "../../../assets/images/fi-sr-angle-small-up.svg";

const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = true, ...props }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={style.accordion} {...props}>
      <button
        type="button"
        className={style.header}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        aria-expanded={isOpen}
      >
        <p className={style.title}>{title}</p>
        <img
          src={arrowIcon}
          alt=""
          aria-hidden="true"
          className={`${style.arrow} ${!isOpen ? style.close : ""}`}
        />
      </button>

      <div className={`${style.contentWrapper} ${isOpen ? style.open : style.collapsed}`}>
        <div className={style.content}>{children}</div>
      </div>
    </div>
  );
};

export default React.memo(Accordion);
