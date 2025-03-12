Feature: Homepage & Add Product Into Cart
    
    As a existing user
    I want to add a product into my Cart
    
    # Scenario 1
    Scenario: Adding product into cart
    Given I successfully login into homepage
    When I click Add to Cart button to a product that i want to buy
    Then The cart icon should have number of the product that i added

    
    #As a existing user
    #I want to know the list of product items that i have added into the cart
    #Scenario 2
    ##Scenario: List of product that have been added
    ##Given I have added the product
    ##When I click the cart button
    ##Then I see the list of product that i have added with quantity and price

    #Scenario 3
    #As a existing user
    #I want to remove the product that suddenly i dont want the product

    ##Scenario: Remove product from the Cart
    ##Given I have added the product
    ##And I click the cart button that directing me to cart HTML
    ##When I click the remove button
    ##Then The product no more inside of the Cart List