Feature: Buy Oscommerce product

    As a user
    I want to buy product
    So that the company recieves my information

    Scenario: Buy a product in Oscommerce web
        Given Navigate to Oscommerce page
        When I click the product Samsung Galaxy Tab
        And I click add to cart
        And I edit cart Quantity to "5"
        And I click update button
        And I click the checkout button
        And I edit "ivanmolmar@outlook.es" in the email field
        And I edit "paswordfalso123" in the password form
        And I click the Sign In button
        And I click Continue in delivery Information Screen