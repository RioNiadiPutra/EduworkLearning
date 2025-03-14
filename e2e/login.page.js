const url = 'www.saucedemo.com';
const Username = 'input[id="user-name"]';
const Password = 'input[id="password"]';
const signin_button = '.btn_action';

class LoginPage {
    static visit() {
        cy.visit(url);
    }

    static fillusername(username){
        cy.get(Username).type(username);
    }

    static fillpassword (password){
        cy.get(Password).type(password);
    }

    static clicksigninbutton () {
        cy.get(signin_button).click();
    }

}

export default LoginPage;
