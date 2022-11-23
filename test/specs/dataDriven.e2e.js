const createuserData = require('../pageobjects/createuserData');
const SignupPage = require('../pageobjects/createuser.page');
const MyAccountPage = require('../pageobjects/myaccount');

describe('My Datadriven create user application', () => {
  for (const record of createuserData) {
    it('should attempt to create user using Data driven', async () => {
      await SignupPage.open();
      await SignupPage.createuser(record.firstname, record.lastname, record.email_address, record.password, record.password_confirmation);
      await expect(MyAccountPage.flashMessage).toHaveTextContaining(record.message);
    });
  }
});
