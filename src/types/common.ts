import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}
export type PageType = "notes" | "trash" | "archive" | "signin" | "signup";

export interface KebabMenuProps {
  pageType: PageType;
  onDelete: () => void;
  onUnarchive?: () => void;
  onArchive?: () => void;
  onToggleCheckboxes?: () => void;
  showCheckboxes?: boolean;
  onUncheckAll?: () => void;
}

export interface SidebarProps {
  className?: string;
}

export interface HeaderProps {
  pageType?: PageType;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  textColor?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  iconSrc: string;
  type?: string;
  isError?: boolean;
  isValid?: boolean;
  errorMessage?: string;
  pageType?: PageType;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  value: string;
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
