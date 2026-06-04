import { CSSProperties, ReactNode, Ref } from "react";

export interface ChildrenProps {
  children: ReactNode;
}
export type PageType = "notes" | "trash" | "archive" | "signin" | "signup" | "profile";

export interface KebabMenuProps {
  pageType: PageType;
  onDelete?: () => void;
  onUnarchive?: (() => void) | undefined;
  onArchive?: (() => void) | undefined;
  onUncheckAll?: (() => void) | undefined;
  onToggleCheckboxes?: () => void;
  showCheckboxes?: boolean;
  placement?: MenuPlacement;
  menuRef?: Ref<HTMLDivElement>;
  springStyle?: Record<string, unknown>;
}

export interface SidebarProps {
  className?: string;
}

export interface HeaderProps {
  pageType?: PageType;
}

export interface HeaderMenuProps {
  onLogout: () => void;
  onClose: () => void;
  springStyle: CSSProperties | any;
  menuRef: React.RefObject<HTMLDivElement>;
  t: (key: string) => string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isFullWidth?: boolean;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  iconSrc?: string;
  type?: string;
  pageType?: PageType;
  isError?: boolean | undefined;
  isValid?: boolean | undefined;
  errorMessage?: string | undefined;
  step?: string | number;
  max?: string | number;
  min?: string | number;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  value?: string;
  iconSrc?: string;
  errorMessage?: string;
  isError?: boolean;
  isValid?: boolean;
  pageType?: PageType;
}

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface AccordionProps extends ChildrenProps {
  title: string;
  defaultOpen?: boolean;
}

export interface SwitchProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
}

export interface SettingsContextType {
  theme: Theme;
  toggleTheme: () => void;
  isListView: boolean;
  toggleView: () => void;
  fontSize: number;
  changeFontSize: (size: number) => void;
}

export interface AppLayoutProps extends ChildrenProps {
  hideSidebar?: boolean;
  pageType?: PageType;
}

export interface LoaderProps {
  message?: string;
}

export interface ErrorPageProps {
  message: string;
  onRetry: () => void;
}

export interface LocationState {
  from?: {
    pathname: string;
  };
}

export type MenuPlacement = "bottom-right" | "bottom-left" | "top-right" | "top-left";

export interface ViewportSize {
  width: number;
  height: number;
}

export interface MenuSize {
  width: number;
  height: number;
}

export const FALLBACK_PRIORITY: MenuPlacement[] = ["bottom-left", "top-right", "top-left"];
