const { test, expect } = require('@playwright/test');
const { login, password } = require('../helpers/env');
const Base = require('../page-obj/base');
const Login = require('../page-obj/login');

test.describe('Vigbo login tests', function () {
  let base;
  let login;

  test.beforeEach(async ({ page }) => {
    base = new Base(page);
    login = new Login(page);

    await base.navigate(`https://vigbo.com/`);
  });

  test.describe(`Login positive tests`, function () {
    test('Lovin with valid data', async ({ page }) => {
      await login.logInUser(login, password);
      await expect(page).toHaveTitle('Личный кабинет');
    });
  });

  test.describe(`Login negative tests`, function () {
    test('Login with invalid login', async ({ page }) => {
      await login.logInUser('123@gmail.com', password);
      await expect(await login.failLoginMessage).toHaveText('Данные для входа неверны. Пожалуйста, попробуйте еще раз.');
    });

    test('Login with invalid password', async ({ page }) => {
      await login.logInUser(login, '123');
      await expect(await login.failLoginMessage).toHaveText('Данные для входа неверны. Пожалуйста, попробуйте еще раз.');
    });

    test('Login without data', async ({ page }) => {
      await login.logInUser('', '');
      await expect(await login.noEmailMessage).toHaveText('Введите e-mail');
      await expect(await login.noPasswordMessage).toHaveText('Введите пароль');
    });

    test('Login without login', async ({ page }) => {
      await login.logInUser('', password);
      await expect(await login.noEmailMessage).toHaveText('Введите e-mail');
    });

    test('Login without password', async ({ page }) => {
      await login.logInUser(login, '');
      await expect(await login.noPasswordMessage).toHaveText('Введите пароль');
    });
  });
});
