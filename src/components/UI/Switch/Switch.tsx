import React, { useId } from "react";
import style from "./Switch.module.css";
import { SwitchProps } from "../../../types/common";

const Switch: React.FC<SwitchProps> = ({ checked, onChange, label, ...props }) => {
  const switchId = useId();

  return (
    <div className={style.switchContainer} data-testid={`switch-${label}`} {...props}>
      <label className={style.switch} htmlFor={switchId}>
        <input
          id={switchId}
          type="checkbox"
          checked={checked}
          className={style.switchInput}
          onChange={onChange}
        />
        <span className={style.slider}></span>
      </label>
      {label && (
        <label className={style.label} htmlFor={switchId}>
          {label}
        </label>
      )}
    </div>
  );
};

export default React.memo(Switch);
