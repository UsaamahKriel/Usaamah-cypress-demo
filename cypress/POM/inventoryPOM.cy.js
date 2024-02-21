export class InventoryPOM{
    addSauceLabsBackpack(){
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    }

    goToCart(){
        cy.get('#shopping_cart_container').click();
    }

    logout(){
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    }
}