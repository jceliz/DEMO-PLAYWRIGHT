import { expect, test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";


test("test", async ({ page }) => {
   const loginPage = new LoginPage(page);

   await loginPage.navigateToLoginPage();
   await loginPage.fillUsername("standard_user");
   await loginPage.fillPassword("secret_sauce");

   const homePage = await loginPage.clickLoginButton();
});

test('test codegen', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});