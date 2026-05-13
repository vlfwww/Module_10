import React from "react";
import style from "./Switch.module.css";
import { SwitchProps } from "../../../types/common";

const Switch: React.FC<SwitchProps> = ({ checked, onChange, label }) => {
  return (
    <div className={style.switchContainer}>
      <label className={style.switch}>
        <input
          type="checkbox"
          checked={checked}
          className={style.switchInput}
          onChange={onChange}
        />
        <span className={style.slider}></span>
      </label>
      {label && <span className={style.label}>{label}</span>}
    </div>
  );
};

export default Switch;
