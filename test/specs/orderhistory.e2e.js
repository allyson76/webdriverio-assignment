const OrderHistoryPage = require('../pageobjects/orderhistory.page');
const LoginPage = require('../pageobjects/login.page');
const MyAccountPage = require('../pageobjects/myaccount');
// const ProductsPage = require('../pageobjects/products.page');
// const MyAccountPage = require('../pageobjects/myaccount');

describe('My Verification of purchase in Order History', () => {
  it('should be able to view an order created', async () => {
    await LoginPage.open();
    await LoginPage.signInUser('allyrowe1@yopmail.com', 'SuperSecretPassword!');
    await expect(MyAccountPage.title).toBeExisting();
    await MyAccountPage.myOrder.click();
    await OrderHistoryPage.open();
    await browser.setTimeout({ 'pageLoad': 1000000 });
    await expect(OrderHistoryPage.pageTitle).toBeExisting();
    await OrderHistoryPage.vieworder_link.click();
    await browser.url('https://magento.softwaretestingboard.com/sales/order/view/order_id/6538/');
    await browser.pause(5000);
  });
});


