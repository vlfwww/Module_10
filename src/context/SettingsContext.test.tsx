import { renderHook, act } from "@testing-library/react";
import { SettingsProvider, useSettings } from "./SettingsContext";

describe("SettingsContext", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.setAttribute("data-theme", "light");
    document.documentElement.style.fontSize = "";
    jest.clearAllMocks();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <SettingsProvider>{children}</SettingsProvider>
  );

  test("initializes with default values", () => {
    const { result } = renderHook(() => useSettings(), { wrapper });

    expect(result.current.theme).toBe("light");
    expect(result.current.isListView).toBe(false);
    expect(result.current.fontSize).toBe(1);
  });

  test("toggles theme and updates DOM", () => {
    const { result } = renderHook(() => useSettings(), { wrapper });

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe("dark");
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    expect(localStorage.getItem("theme")).toBe(JSON.stringify("dark"));
  });

  test("toggles list view", () => {
    const { result } = renderHook(() => useSettings(), { wrapper });

    act(() => {
      result.current.toggleView();
    });

    expect(result.current.isListView).toBe(true);
    expect(localStorage.getItem("isListView")).toBe("true");
  });

  test("changes font size and updates document style", () => {
    const { result } = renderHook(() => useSettings(), { wrapper });

    act(() => {
      result.current.changeFontSize(1.5);
    });

    expect(result.current.fontSize).toBe(1.5);
    expect(document.documentElement.style.fontSize).toBe("150%");
    expect(localStorage.getItem("font-size-ratio")).toBe("1.5");
  });

  test("throws error when used outside SettingsProvider", () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(jest.fn());

    expect(() => renderHook(() => useSettings())).toThrow(
      "useSettings must be used within SettingsProvider",
    );

    consoleSpy.mockRestore();
  });
});
