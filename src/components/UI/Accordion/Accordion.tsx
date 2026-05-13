import React, { useState } from "react";
import style from "./Accordion.module.css";
import { AccordionProps } from "../../../types/common";
import arrowIcon from "../../../assets/images/fi-sr-angle-small-up.svg";

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = true,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className={style.accordion}>
      <div
        className={style.header}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <p className={style.title}>{title}</p>
        <img
          src={arrowIcon}
          alt="toggleMenu"
          className={`${style.arrow} ${!isOpen ? style.close : ""}`}
        />
      </div>
      {isOpen && <div className={style.content}>{children}</div>}
    </div>
  );
};

export default Accordion;
