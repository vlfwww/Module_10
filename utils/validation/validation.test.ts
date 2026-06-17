import { validateEmail, validatePassword } from "./validation";

describe("Data validation", () => {
  describe("validateEmail", () => {
    test("must return true for a valid email", () => {
      expect(validateEmail("test@example.com")).toBe(true);
    });

    test("should return false for email without @", () => {
      expect(validateEmail("testexample.com")).toBe(false);
    });

    test("should return false for email without a domain", () => {
      expect(validateEmail("test@")).toBe(false);
    });
  });

  describe("validatePassword", () => {
    test("should return true for a password with a number and length >= 6", () => {
      expect(validatePassword("pass123")).toBe(true);
    });

    test("should return false for a password without numbers", () => {
      expect(validatePassword("password")).toBe(false);
    });

    test("should return false for passwords shorter than 6 characters", () => {
      expect(validatePassword("123")).toBe(false);
    });
  });
});
