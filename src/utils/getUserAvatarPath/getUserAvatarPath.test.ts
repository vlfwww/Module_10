import { User } from "../../types/auth";
import { getUserAvatarPath } from "./getUserAvatarPath";

describe("getUserAvatarPath", () => {
  test("returns an empty string if the user is null or the profileImage is missing", () => {
    expect(getUserAvatarPath(null)).toBe("");
    expect(getUserAvatarPath({} as User)).toBe("");
  });

  test("returns the path as is if it is an external link (http)", () => {
    const user = { profileImage: "https://example.com/avatar.jpg" } as User;
    expect(getUserAvatarPath(user)).toBe("https://example.com/avatar.jpg");
  });

  test("adds a base path to a local image", () => {
    const user = { profileImage: "uploads/me.png" } as User;
    const result = getUserAvatarPath(user);
    expect(result).toMatch(/^\/uploads\/me.png/);
  });
});
