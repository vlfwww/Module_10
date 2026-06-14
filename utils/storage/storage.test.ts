import { getStorageItem } from "./storage";

describe("getStorageItem", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("returns defaultValue if the key is not found", () => {
    const result = getStorageItem("random-key", "defaultValue");
    expect(result).toBe("defaultValue");
  });

  test("returns the parsed object if the data is found", () => {
    const data = { id: 1, name: "Test" };
    localStorage.setItem("random-key", JSON.stringify(data));

    const result = getStorageItem("random-key", {});
    expect(result).toEqual(data);
  });

  test("returns defaultValue on parse error)", () => {
    localStorage.setItem("invalid-key", "not a json");

    const result = getStorageItem("invalid-key", "fallback");
    expect(result).toBe("fallback");
  });
});
