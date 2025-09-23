const { test, expect } = require('@playwright/test');
const { login, password } = require('../helpers/env');
const Base = require('../page-obj/base');
const LoginPage = require('../page-obj/loginPage');

test.describe('Vigbo login tests', function () {
  let base;
  let loginPage;

  test.beforeEach(async ({ page }) => {
    base = new Base(page);
    loginPage = new LoginPage(page);

    await base.navigate(`https://vigbo.com/`);
  });

  test.describe(`Login positive tests`, function () {
    test('Login with valid data', async ({ page }) => {
      await loginPage.logInUser(login, password);
      await expect(page).toHaveTitle('Личный кабинет');
    });
  });

  test.describe(`Login negative tests`, function () {
    test('Login with invalid login', async ({ page }) => {
      await loginPage.logInUser('123@gmail.com', password);
      await expect(await loginPage.failLoginMessage).toHaveText('Данные для входа неверны. Пожалуйста, попробуйте еще раз.');
    });

    test('Login with invalid password', async ({ page }) => {
      await loginPage.logInUser(login, '123');
      await expect(await loginPage.noPasswordMessage).toHaveText('Введите пароль');
    });

    test('Login without data', async ({ page }) => {
      await loginPage.logInUser('', '');
      await expect(await loginPage.noEmailMessage).toHaveText('Введите e-mail');
      await expect(await loginPage.noPasswordMessage).toHaveText('Введите пароль');
    });

    test('Login without login', async ({ page }) => {
      await loginPage.logInUser('', password);
      await expect(await loginPage.noEmailMessage).toHaveText('Введите e-mail');
    });

    test('Login without password', async ({ page }) => {
      await loginPage.logInUser(login, '');
      await expect(await loginPage.noPasswordMessage).toHaveText('Введите пароль');
    });
  });
});
