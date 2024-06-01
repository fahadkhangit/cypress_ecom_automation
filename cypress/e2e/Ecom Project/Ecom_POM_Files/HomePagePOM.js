class HomePage

{

    elements = {
        homne_btn: "header[id='header'] li:nth-child(1) a:nth-child(1)",
        products_btn: "a[href='/products']",
        cart_btn: "",
        login_btn: "a[href='/login']",
        contact_btn: "",
        logged_in_as_txt: "li:nth-child(10) a:nth-child(1)",
        homne_btn: "",
        homne_btn: "",
      };

      verifyHomePage() {
        cy.get(this.elements.products_btn).should('exist');
      }

      openLoginPage() {
        cy.get(this.elements.login_btn).click();
      }
   
      verifyLogin() {
        cy.get(this.elements.logged_in_as_txt).should('exist');
      }

      verifyNegLogin() {
        cy.get(this.elements.IcorrectCreds_txt).should('exist');
      }

      navigateToHostedPage() {
        cy.get(this.elements.left_menu_hosted_btn).click();
      }

      accessEmbedSetting() {
        cy.get(this.elements.left_menu_embed_btn).click();
        cy.get(this.elements.player_setting_txt).should('exist');
      }

      accessSocials() {
        cy.get(this.elements.left_menu_socials_btn).click();
      }

}

export default HomePage;