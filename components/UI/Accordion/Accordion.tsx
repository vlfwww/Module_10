"use client";

import React, { useEffect, useState } from "react";
import style from "./Accordion.module.css";
import { AccordionProps } from "../../../types/common";

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = true,
  lazyMount = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isMounted, setIsMounted] = useState(!lazyMount || defaultOpen);

  useEffect(() => {
    if (lazyMount && isOpen) {
      setIsMounted(true);
    }
  }, [isOpen, lazyMount]);

  return (
    <div className={style.accordion}>
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
          src="/assets/images/fi-sr-angle-small-up.svg"
          alt=""
          aria-hidden="true"
          className={`${style.arrow} ${!isOpen ? style.close : ""}`}
        />
      </button>

      <div className={`${style.contentWrapper} ${isOpen ? style.open : style.collapsed}`}>
        <div className={style.content}>{isMounted ? children : null}</div>
      </div>
    </div>
  );
};

export default React.memo(Accordion);
