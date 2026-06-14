import { test, expect } from "@playwright/test";

test.describe("Profile Page", () => {
  test.use({ storageState: "playwright/.auth/user.json" });

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("link", { name: /profile|профиль/i })
      .first()
      .click();
    await expect(page).toHaveURL(/.*profile/);
  });

  test("should update user profile information", async ({ page }) => {
    const profileAccordion = page.getByRole("button", {
      name: /profile info|информация о профиле/i,
    });

    if ((await profileAccordion.getAttribute("aria-expanded")) !== "true") {
      await profileAccordion.click();
    }

    const usernameInput = page.getByTestId("username-input");

    await expect(usernameInput).toBeVisible({ timeout: 15000 });
    await usernameInput.fill("NewTestUser");

    await page.getByTestId("update-btn").click();
    await expect(page.getByText(/updated|обновлено/i)).toBeVisible();
  });

  test("should handle logout", async ({ page }) => {
    const profileAccordion = page.getByRole("button", {
      name: /profile info|информация о профиле/i,
    });
    if ((await profileAccordion.getAttribute("aria-expanded")) !== "true") {
      await profileAccordion.click();
    }

    const logoutBtn = page.getByRole("button", { name: /logout|выйти/i });
    await logoutBtn.scrollIntoViewIfNeeded();
    await logoutBtn.click();

    await expect(page).toHaveURL(/.*signin/);
  });

  test("should change language", async ({ page }) => {
    const settingsAccordion = page.getByRole("button", { name: /settings|настройки/i });
    if ((await settingsAccordion.getAttribute("aria-expanded")) !== "true") {
      await settingsAccordion.click();
    }

    const select = page.getByRole("combobox", { name: /language|язык/i });
    await select.click();

    await page.getByRole("option", { name: "English" }).click();

    await expect(select).toHaveText("English");
  });

  test("should toggle list view and verify on notes page", async ({ page }) => {
    const settingsAccordion = page.getByRole("button", { name: /settings|настройки/i });

    if ((await settingsAccordion.getAttribute("aria-expanded")) !== "true") {
      await settingsAccordion.click();
      await page.waitForTimeout(500);
    }

    const listViewLabel = page.locator("label").filter({ hasText: /^list view$|^вид списка$/i });
    await listViewLabel.scrollIntoViewIfNeeded();
    await listViewLabel.click();

    await page.getByRole("link", { name: /notes|заметки/i }).first().click();

    const container = page.getByTestId("notes-list-container");
    await expect(container).toBeVisible({ timeout: 10000 });
  });

  test("should update font size", async ({ page }) => {
    const settingsAccordion = page.getByRole("button", { name: /settings|настройки/i });
    if ((await settingsAccordion.getAttribute("aria-expanded")) !== "true") {
      await settingsAccordion.click();
      await page.waitForTimeout(500);
    }

    const fontInput = page.getByTestId("font-size-input");

    await fontInput.scrollIntoViewIfNeeded();
    await fontInput.waitFor({ state: "visible" });

    await fontInput.fill("1.8");
    await page.keyboard.press("Tab");

    await expect(fontInput).toHaveValue("1.8");
  });
});
