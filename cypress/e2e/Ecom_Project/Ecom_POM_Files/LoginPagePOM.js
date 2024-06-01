class LoginPage

{

    elements = {
        login_email_box: "input[data-qa='login-email']",
        login_pass_box: "input[placeholder='Password']",
        login_submit_btn: "button[data-qa='login-button']",
        pass_incorrect_txt: "//p[normalize-space()='Your email or password is incorrect!']",  // xpath
        signup_name_box: "input[placeholder='Name']",
        signup_email_box: "input[data-qa='signup-email']",
        signup_submit_btn: "button[data-qa='signup-button']",
        email_exist_txt: "//p[normalize-space()='Email Address already exist!']", // xpath
      };

      verifyLoginPage() {
        cy.get(this.elements.login_email_box).should('exist');
      }

      login(username, password) {
        cy.get(this.elements.login_email_box).type(username);
        cy.get(this.elements.login_pass_box).type(password);
        cy.get(this.elements.login_submit_btn).click();
      }

      verifyNegLogin() {
        cy.xpath(this.elements.pass_incorrect_txt).should('exist');
      }

      verify_logout() {
        cy.get(this.elements.logout_btn).click();
        cy.get(this.elements.login_to_your_account_txt).should('exist');
      }

      signup(username, email) {
        cy.get(this.elements.signup_name_box).type(username);
        cy.get(this.elements.signup_email_box).type(email);
        cy.get(this.elements.signup_submit_btn).click();
      }
    
      verifyExistingUser() {
        cy.xpath(this.elements.email_exist_txt).should('exist');
      }

      
}

export default LoginPage;