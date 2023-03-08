describe("Verify product selection for SauceDemo", () => {
    beforeEach(() => {
      cy.visit("https://www.saucedemo.com/");
    });

    it("Sauce Labs Backpack and Sauce Labs Onesie should be added to the shopping cart", () => {
      cy.visit("https://www.saucedemo.com/");
      cy.get('[data-test="username"]').type("standard_user");
      cy.get('[data-test="password"]').type("secret_sauce");
      cy.get('[data-test="login-button"]').click();

      // Assertion that verifies that products list is displayed
      cy.get(".title").should("have.text", "Products");

      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();

      //Assertion that confirming that only the two items in the cart are present
      cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible");
      cy.get('[data-test="remove-sauce-labs-onesie"]').should("be.visible");
      cy.get('.shopping_cart_badge').should("have.text",2);


      cy.get('.shopping_cart_link').click();

      //Assertionthat ensures that the correct products have been clicked on correctly
      cy.get('.inventory_item_name').should("contain","Sauce Labs Backpack");
      cy.get('.inventory_item_name').should("contain","Sauce Labs Onesie");
      cy.get('.inventory_item_name').should("have.length",2);
    })
  });