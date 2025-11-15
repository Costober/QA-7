const { test, expect } = require('@playwright/test');

// Тест 1: Перевірка заголовка сторінки "Про нас"
test('Перевірка заголовка сторінки "Про нас"', async ({ page }) => {
  await page.goto('/about.html');
  await expect(page).toHaveTitle(/Змінено/);
});

// Тест 2: Перевірка наявності основного заголовка H1
test('Перевірка головного заголовка H1 на сторінці "Про нас"', async ({ page }) => {
  await page.goto('/about.html');
  const header = page.locator('h1');
  await expect(header).toHaveText('"Про нас" змінена"');
});

// Тест 3: Перевірка навігації (посилання "Повернутися на головну")
test('Перевірка посилання на головну сторінку', async ({ page }) => {
  await page.goto('/about.html');
  await page.click('#homeLink');
  await expect(page).toHaveURL('http://localhost:3000/');
});
