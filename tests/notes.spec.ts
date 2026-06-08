import { test, expect } from "@playwright/test";

test.describe("Notes Management", () => {
  test.use({ storageState: "playwright/.auth/user.json" });

  test("should create a new note successfully", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /create a note|создать заметку/i }).click();

    await page.getByTestId("modal-title-input").fill("My New Note");
    await page.getByTestId("modal-description-input").fill("This is a test note content.");

    const addItemBtn = page.getByTestId("add-todo-btn");
    await addItemBtn.click();
    await addItemBtn.click();

    const todoInputs = page.getByTestId("todo-input");
    await todoInputs.first().fill("Todo-1");
    await todoInputs.last().fill("Todo-2");

    await page.getByTestId("modal-submit-button").click();
    await expect(page.getByText("My New Note")).toBeVisible();
  });
});

test.describe("Notes Management - Mutations", () => {
  test.use({ storageState: "playwright/.auth/user.json" });

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    const createBtn = page.getByRole("button", { name: /create|создать/i });
    await createBtn.click();

    const titleInput = page.getByTestId("modal-title-input");
    await expect(titleInput).toBeVisible();
    await titleInput.fill("Target Note");

    const addItemBtn = page.getByTestId("add-todo-btn");
    await addItemBtn.click();
    await addItemBtn.click();

    const todoInputs = page.getByTestId("todo-input");
    await todoInputs.first().fill("Todo-1");
    await todoInputs.last().fill("Todo-2");

    await page.getByTestId("modal-submit-button").click();
    await expect(titleInput).not.toBeVisible();
  });

  test("should toggle a todo item in a note", async ({ page }) => {
    const noteCard = page
      .locator('[data-testid="card-wrapper"]')
      .filter({ hasText: "Target Note" });

    await noteCard.getByTestId("kebab-menu-btn").click();
    await page.getByRole("menuitem", { name: /show|показать/i }).click();

    const checkbox = noteCard.locator('input[type="checkbox"]').first();
    await expect(checkbox).toBeAttached({ timeout: 10000 });

    await checkbox.evaluate((el: HTMLInputElement) => {
      el.click();
    });

    await expect(checkbox).toBeChecked();
  });

  test("should edit an existing note", async ({ page }) => {
    await page.getByText("Target Note").click();

    await page.getByTestId("edit-mode-switch").click({ force: true });
    await page.getByTestId("modal-title-input").fill("Updated Title");
    await page.getByTestId("modal-submit-button").click();

    await expect(page.getByText("Updated Title")).toBeVisible();
  });

  test("should delete a note and move it to trash", async ({ page }) => {
    const noteCard = page
      .locator('[data-testid="card-wrapper"]')
      .filter({ hasText: "Target Note" });
    await noteCard.getByTestId("kebab-menu-btn").click();

    await page.getByTestId("delete-note-btn").click();
    await expect(page.getByText("Target Note")).not.toBeVisible();

    await page.getByRole("link", { name: /trash|корзина/i }).click();
    await expect(page).toHaveURL(/.*trash/);

    const trashCard = page
      .locator('[data-testid="card-wrapper"]')
      .filter({ hasText: "Target Note" });
    await expect(trashCard).toBeVisible();

    await trashCard.getByTestId("kebab-menu-btn").click();
    await page.getByTestId("permanent-delete-btn").click();
    await expect(trashCard).not.toBeVisible();
  });

  test("should archive and unarchive a note", async ({ page }) => {
    const noteCard = page
      .locator('[data-testid="card-wrapper"]')
      .filter({ hasText: "Target Note" });
    await noteCard.getByTestId("kebab-menu-btn").click();
    await page.getByTestId("archive-note-btn").click();

    await expect(noteCard).not.toBeVisible();

    await page.getByRole("link", { name: /archive|архив/i }).click();
    await expect(page).toHaveURL(/.*archive/);

    const archivedCard = page
      .locator('[data-testid="card-wrapper"]')
      .filter({ hasText: "Target Note" });
    await expect(archivedCard).toBeVisible();

    await archivedCard.getByTestId("kebab-menu-btn").click();
    await page.getByTestId("unarchive-note-btn").click();

    await expect(archivedCard).not.toBeVisible();

    await page.getByRole("link", { name: /notes|заметки/i }).click();
    await expect(
      page.locator('[data-testid="card-wrapper"]').filter({ hasText: "Target Note" }),
    ).toBeVisible();
  });
});
