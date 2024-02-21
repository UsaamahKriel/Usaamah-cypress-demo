export class LoginPOM{
    enterUserName(username){
        cy.get('#user-name').type(username);
    }
    enterPassword(password){
        cy.get('#password').type(password);
    }
    clickLogin(){
        cy.get('#login-button').click();
    }
}