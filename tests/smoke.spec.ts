import { test, expect } from "@playwright/test";

test("user is authenticated and sees main content", async ({ page }) => {
  await page.goto("/");

  const btn = page.getByRole("button").filter({ hasText: /create|создать/i });
  await expect(btn).toBeVisible();

  await expect(page.getByText("helenahills", { exact: false })).toBeVisible();
});
