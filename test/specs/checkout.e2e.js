const LoginPage = require('../pageobjects/login.page');
const CheckoutPage = require('../pageobjects/checkout.page');
const PaymentPage = require('../pageobjects/payment.page');


describe('My Checkout application', () => {
  it('Should checkout product', async () => {
    await LoginPage.open();
    await LoginPage.signInUser('allyrowe1@yopmail.com', 'SuperSecretPassword!');
    // await (CheckoutPage.cart).waitForExist({ reverse: true });
    await browser.setTimeout({ 'pageLoad': 1000000 });
    await CheckoutPage.open();
    // await expect(CheckoutPage.cart).toBeExisting();
    // await CheckoutPage.cart.click();
    await CheckoutPage.proceedBtn.click();
    // Checkout form - Shipping address
    // await (CheckoutPage.shoppinginfo).waitForExist({ reverse: true });
    // await CheckoutPage.open();
    await browser.url('https://magento.softwaretestingboard.com/checkout/#shipping');
    await browser.setTimeout({ 'pageLoad': 20000000 });
    //await CheckoutPage.addNewAddress.click();
    await CheckoutPage.shippinginfo('TopTierQA', '41 Lake Avenue', 'Monor Terrace RD', 'Palm View', 'Hamptons', '29177', '6316667777');
    await expect(PaymentPage.placeorderbtn).toBeExisting();
    await PaymentPage.placeorderbtn.click();

  });
});