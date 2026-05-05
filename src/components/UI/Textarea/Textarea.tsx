import React from 'react';
import style from './Textarea.module.css';
import { TextareaProps } from '../../../types/common';

const Textarea: React.FC<TextareaProps> = ({ label, iconSrc, className, ...props }) => {
  return (
    <div className={style.inputGroup}>
      <div className={style.label}>
        {iconSrc && <img src={iconSrc} alt="" className={style.icon} />}
        <p>{label}</p>
      </div>
      <textarea className={`${style.inputField} ${style.textareaField} ${className}`} {...props} />
    </div>
  );
};

export default Textarea;
