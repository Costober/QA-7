const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
 
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests',

  // Reporter to use
  reporter: 'html',

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'http://localhost:3000',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',

    // Run browser in headless mode.
    headless: true,

  },
  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 13'] }, 
    }

  ],
  // Run your local dev server before starting the tests.
  webServer: {
    command: 'npx http-server -p 3000 public',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
  
});
