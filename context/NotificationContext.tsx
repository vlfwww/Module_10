"use client";

import React, { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { NotificationContextType, Notification, NotificationType } from "@/types/notification";
import NotificationContainer from "@/components/UI/Notification/NotificationContainer";

const NotificationContext = createContext<NotificationContextType | null>(null);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const hideNotification = useCallback((id: number) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const showNotification = useCallback(
    (message: string, type: NotificationType) => {
      const id = Date.now();

      setNotifications((prev) => [...prev, { id, message, type }]);

      setTimeout(() => {
        hideNotification(id);
      }, 5000);
    },
    [hideNotification],
  );

  return (
    <NotificationContext.Provider value={{ hideNotification, showNotification }}>
      {children}
      <NotificationContainer notifications={notifications} onClose={hideNotification} />
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }

  return context;
};
