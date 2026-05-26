export type NotificationType = "error" | "success" | "warning";

export interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

export interface NotificationContextType {
  showNotification: (message: string, type: NotificationType) => void;
  hideNotification: (id: number) => void;
}

export interface NotificationItemProps {
  id: number;
  message: string;
  type: NotificationType;
  onClose: (id: number) => void;
}

export interface NotificationContainerProps {
  notifications: Notification[];
  onClose: (id: number) => void;
}
