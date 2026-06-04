import { test as setup, expect } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  await page.goto("/#/signin");

  await page.getByPlaceholder(/email/i).fill("helena.hills@social.com");
  await page.getByPlaceholder(/password/i).fill("password789");
  const submitBtn = page.getByRole("button", { name: /sign in/i });
  await expect(submitBtn).toBeVisible(); 
  await submitBtn.click();

  await page.waitForLoadState("networkidle");

  await expect(page).not.toHaveURL(/.*signin/);

  await page.context().storageState({ path: authFile });
});
