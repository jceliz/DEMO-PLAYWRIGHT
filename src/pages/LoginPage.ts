import { Page, expect } from "@playwright/test";

export default class LoginPage {
  private readonly usernameInputSelector = 'xpath=//*[@*="username"]';
  // private readonly usernameInputSelector = "#username";
  private readonly usernameInputSelectors = ["#username",'input[name="username"]', ".username", "//*[@id='username]"];
  private readonly passwordInputSelector = "#password";
  private readonly loginButtonSelector = 'xpath=//*[@*="Login"]';

  constructor(private page: Page) {}

  async quickLogin(username: string, password: string) {
    await this.navigateToLoginPage();
    await this.fillUsername(username);
    await this.fillPassword(password);
    return await this.clickLoginButton();
  }

  async navigateToLoginPage() {
    await this.page.goto("https://saucedemo.com");
  }

  async fillUsername(username: string) {
    await this.page.locator(this.usernameInputSelector).fill(username);
    
  }


  async fillPassword(password: string) {
    await this.page.locator(this.passwordInputSelector).fill(password);
  }

  async clickLoginButton() {
    await this.page
      .locator(this.loginButtonSelector)
      .click()
    //   .catch((error) => {
    //     logger.error(`Error clicking login button: ${error}`);
    //     throw error; // rethrow the error if needed
    //   })
    //   .then(() => logger.info("Clicked login button"));

    // const homePage = new HomePage(this.page);
    // return homePage;
  }
}
