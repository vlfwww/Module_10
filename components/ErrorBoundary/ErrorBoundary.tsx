"use client";

import { Component, ErrorInfo, ReactNode } from "react";
import ErrorView from "../ErrorView/ErrorView";

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary catch:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorView />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
