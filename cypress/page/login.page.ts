class LoginPage {
    private usernameInput: string;
    private passwordInput: string;
    private loginButton: string;
    private errorMsg: string;

    constructor() {
        this.usernameInput = "#user-name";
        this.passwordInput = "#password";
        this.loginButton = "#login-button";
        this.errorMsg = "[data-test='error']";
    }

    public login(email: string, password: string) {
        cy.get(this.usernameInput).type(email);
        cy.get(this.passwordInput).type(password);
        cy.get(this.loginButton).click();
    }

    public getErrorMsg() {
        return cy.get(this.errorMsg);
    }
}

export { LoginPage }