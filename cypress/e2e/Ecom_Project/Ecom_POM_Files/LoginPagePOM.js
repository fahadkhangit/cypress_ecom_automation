class LoginPage

{

    elements = {
        email_box: "input[data-qa='login-email']",
        pass_box: "input[placeholder='Password']",
        login_submit_btn: "button[data-qa='login-button']",
      };

      verifyLoginPage() {
        cy.get(this.elements.email_box).should('exist');
      }


      login(username, password) {
        cy.get(this.elements.email_box).type(username);
        cy.get(this.elements.pass_box).type(password);
        cy.get(this.elements.login_submit_btn).click();
      }

      verify_logout() {
        cy.get(this.elements.logout_btn).click();
        cy.get(this.elements.login_to_your_account_txt).should('exist');
      }
    

}

export default LoginPage;