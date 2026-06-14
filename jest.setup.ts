import "@testing-library/jest-dom";

const suppressedErrorPatterns = [
  /not configured to support act/,
  /not wrapped in act\(/,
  /Not implemented: navigation \(except hash changes\)/,
];

const suppressedWarnPatterns = [/The width\(-1\) and height\(-1\) of chart/];

const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

console.error = (...args: unknown[]) => {
  const message = args
    .map((arg) => (typeof arg === "string" ? arg : String(arg)))
    .join(" ");
  if (suppressedErrorPatterns.some((pattern) => pattern.test(message))) {
    return;
  }
  originalConsoleError.apply(console, args);
};

console.warn = (...args: unknown[]) => {
  const message = args
    .map((arg) => (typeof arg === "string" ? arg : String(arg)))
    .join(" ");
  if (suppressedWarnPatterns.some((pattern) => pattern.test(message))) {
    return;
  }
  originalConsoleWarn.apply(console, args);
};

class ResizeObserverMock implements ResizeObserver {
  private callback: ResizeObserverCallback;

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }

  observe(target: Element) {
    this.callback(
      [
        {
          target,
          contentRect: { width: 400, height: 400, top: 0, left: 0, bottom: 400, right: 400 },
        } as ResizeObserverEntry,
      ],
      this,
    );
  }

  unobserve() {}

  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock;

jest.mock("next/link", () => {
  const React = require("react");
  return {
    __esModule: true,
    default: ({
      children,
      href,
      onClick,
      ...props
    }: {
      children: React.ReactNode;
      href: string;
      onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
      [key: string]: unknown;
    }) =>
      React.createElement(
        "a",
        {
          href,
          onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            onClick?.(e);
          },
          ...props,
        },
        children,
      ),
  };
});

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      language: "en",
      changeLanguage: jest.fn(),
    },
  }),
}));
