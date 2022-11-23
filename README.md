# WebdriverIO Assignment

## Running it locally

### 'npm install'
Inatalls the dependencies and creates the node modules folder <br/>

### Executing tests

'npm run *inserts script-name-here*'- runs the tests specified for this script in the json file <br />

When executing 'checkout.e2e.js' ensure a product is added to cart before test is ran. Checkout flow does not include adding to cart <br />

The alternative browser is 'Firefox'. Uncomment to execute the test across browsers.



### Adding a new test
Once a new test is addded to the(/test/specs) folder, the 'scripts' object in the'package.json' file should be updated to include the command for the new test