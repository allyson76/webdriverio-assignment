const ProductsPage = require('../pageobjects/products.page');
const MyAccountPage = require('../pageobjects/myaccount');

describe.skip('My Add a product to Cart', () => {
  it.skip('Should add the fourth product on the page to the cart', async () => {
    await ProductsPage.open();
    await expect(ProductsPage.header).toBeExisting();
    await ProductsPage.addProductToCart();
    await expect(MyAccountPage.flashMessage).toBeExisting();
    await expect(MyAccountPage.flashMessage).toHaveTextContaining(
      'You added Ariel Roll Sleeve Sweatshirt to your shopping cart.');
  });
});