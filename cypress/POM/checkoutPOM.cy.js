export class CheckoutPOM{
    enterFirstName(name){
        cy.get('#first-name').type(name);
    }
    enterLastName(name){
        cy.get('#last-name').type(name);
    }
    enterPostalCode(postalCode){
        cy.get('#postal-code').type(postalCode);
    }
    clickContinue(){
        cy.contains('Continue').click();
    }
    clickFinish(){
        cy.contains('Finish').click();
    }
    confirmCheckoutComplete(){
        cy.contains('Thank you for your order!').should('exist');
    }

    clickBackHome(){
        cy.get('#back-to-products').click();
    }
}