const Page = require('./mainpage');


class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get email() {
    return $('#email');
  }

  get password() {
    return $('(//input[@id="pass"])[1]');
  }

  get signInbtn() {
    return $('.primary#send2');
  }

  async signInUser(email, password) {
    await this.email.waitForExist();
    await this.email.setValue(email);
    await this.password.waitForExist();
    await this.password.setValue(password);
    await this.signInbtn.click();
  }
  open() {
    return super.open('customer/account/login');
  }
}

module.exports = new LoginPage();