import React from "react";
import { useTranslation } from "react-i18next";
import style from "./Notification.module.css";
import { NotificationItemProps } from "@/types/notification";

const NotificationItem: React.FC<NotificationItemProps> = ({ id, message, type, onClose }) => {
  const { t } = useTranslation();
  const itemClass = `${style.notificationItem} ${style[type]}`;

  return (
    <div className={itemClass} role="alert">
      <span className={style.message}>{message}</span>

      <button
        type="button"
        className={style.closeBtn}
        onClick={() => onClose(id)}
        aria-label={t("notification.close")}
      >
        &times;
      </button>
    </div>
  );
};

export default React.memo(NotificationItem);
