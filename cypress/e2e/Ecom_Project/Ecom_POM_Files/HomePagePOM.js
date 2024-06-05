class HomePage

{

    elements = {
        homne_btn: "header[id='header'] li:nth-child(1) a:nth-child(1)",
        products_btn: "a[href='/products']",
        cart_btn: "",
        login_btn: "a[href='/login']",
        logout_btn: "a[href='/logout']",
        contact_btn: "",
        logged_in_as_txt: "li:nth-child(10) a:nth-child(1)",
        contact_btn: "a[href='/contact_us']",
        test_cases_btn: "//a[contains(text(),'Test Cases')]",     // xpath
        products_btn: "a[href='/products']",
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

      logout() {
        cy.get(this.elements.logout_btn).click();
      }

      verifyLogout() {
        cy.get(this.elements.logged_in_as_txt).should('not.exist');
      }

      openContactPage() {
        cy.get(this.elements.contact_btn).click();
      }
    
      openTCsPage() {
        cy.xpath(this.elements.test_cases_btn).click();
      }

      openProductsPage() {
        cy.get(this.elements.products_btn).click();
      }

}

export default HomePage;