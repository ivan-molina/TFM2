const {Given, When, Then} = require('cucumber');
const Role = require('testcafe').Role;

const buyProductPage = require('../support/pages/PageObjecHome');
const productSheet = require('../support/pages/PageObjectProductSheet');
const cartContents = require('../support/pages/PageObjectCartContents');
const signIn = require('../support/pages/PageObjectSignIn');
const deliveryInformation = require('../support/pages/PageObjectDeliveryInformation');

    Given('Navigate to Oscommerce page', async function () {
       await testController.navigateTo(buyProductPage.principal.url());
    });

    When('I click the product Samsung Galaxy Tab', async function () {
       await testController.click(buyProductPage.principal.amsungGalaxyTab());
    });

    When('I click add to cart', async function () {
       await testController.click(productSheet.ProductSheet.addToCartButton());
    });

    When('I edit cart Quantity to {string}', async function (string) {
       await testController.click(cartContents.CardContents.cartQuantity());
       await testController.pressKey('ctrl+a delete');
       await testController.typeText(cartContents.CardContents.cartQuantity(), string);
    });

    When('I click update button', async function () {
       await testController.click(cartContents.CardContents.updateCartQuantity());
    });

    When('I click the checkout button', async function () {
       await testController.click(cartContents.CardContents.checkoutButton());
    });

    When('I edit {string} in the email field', async function (string) {
       await testController.click(signIn.SignIn.emailAddress());
       await testController.typeText(signIn.SignIn.emailAddress(), string);
    });

    When('I edit {string} in the password form', async function (string) {
       await testController.click(signIn.SignIn.password());
       await testController.typeText(signIn.SignIn.password(), string);
    });

    When('I click the Sign In button', async function () {
       await testController.click(signIn.SignIn.signInButton());
    });

    When('I click Continue in delivery Information Screen', async function () {
       await testController.click(deliveryInformation.DeliveryInformation.continue());
    });