import React from "react";
import { createPortal } from "react-dom";
import style from "./Notification.module.css";
import { NotificationContainerProps } from "@/types/notification";
import NotificationItem from "./NotificationItem";

const NotificationContainer: React.FC<NotificationContainerProps> = ({
  notifications,
  onClose,
}) => {
  if (notifications.length === 0) return null;

  const targetRoot = document.getElementById("notification-root") || document.body;

  return createPortal(
    <div
      className={style.notificationContainer}
      role="log"
      aria-live="assertive"
      aria-atomic="false"
    >
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          id={notification.id}
          message={notification.message}
          type={notification.type}
          onClose={onClose}
        />
      ))}
    </div>,
    targetRoot,
  );
};

export default NotificationContainer;
