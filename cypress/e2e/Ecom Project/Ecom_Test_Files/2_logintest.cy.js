describe('login_test', () => {

    it('OneStream_login_test', () => {
      cy.visit('https://app.onestream.live/?invalid_token=1')
      cy.get("#login_email_input").type("fahad.khan@onestream.live");
      cy.get("#login_password_input").type("123");
      cy.get("#login_button").click();
      cy.get("#header-primary-btn1",{timeout:20000});
    })
  })