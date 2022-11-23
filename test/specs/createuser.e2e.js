const SignupPage = require('../pageobjects/createuser.page');
const MyAccountPage = require('../pageobjects/myaccount');

describe('My Create a user application', () => {
  it.only('should create a user with valid credentials', async () => {
    await SignupPage.open();

    await SignupPage.createuser('jack5', 'lewis5', 'jacklewis5@gmail.com', 'SuperSecretPassword!3', 'SuperSecretPassword!3');
    await expect(MyAccountPage.flashMessage).toBeExisting();
    await expect(MyAccountPage.flashMessage).toHaveTextContaining(
      'Thank you for registering with Fake Online Clothing Store.');
  });

  it.skip('should create a user with invalid credentials', async () => {
    await SignupPage.open();

    await SignupPage.createuser('jack5', 'lewis5', 'inavalidEmail', 'SuperSecretPassword!3', 'SuperSecretPassword!3');
    await expect(MyAccountPage.errorMessage).toBeExisting();

  });
});

