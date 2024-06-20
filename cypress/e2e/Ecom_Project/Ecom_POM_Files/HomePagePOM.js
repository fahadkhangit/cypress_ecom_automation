class HomePage

{

    elements = {
        homne_btn: "header[id='header'] li:nth-child(1) a:nth-child(1)",
        products_btn: "a[href='/products']",
        cart_btn: "body > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)",
        login_btn: "a[href='/login']",
        logout_btn: "a[href='/logout']",
        contact_btn: "",
        logged_in_as_txt: "li:nth-child(10) a:nth-child(1)",
        contact_btn: "a[href='/contact_us']",
        test_cases_btn: "//a[contains(text(),'Test Cases')]",     // xpath
        products_btn: "a[href='/products']",
        sub_email_box: "#susbscribe_email",
        sub_email_submit_btn: "#subscribe",
        sub_email_success_txt: "//div[@class='alert-success alert']",     //xpath

        
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

      subEmail(email) {
        cy.get(this.elements.sub_email_box).type(email);
        cy.get(this.elements.sub_email_submit_btn).click();
        cy.xpath(this.elements.sub_email_success_txt).should('exist');
      }

      openCartPage() {
        cy.get(this.elements.cart_btn).click();
      }


}

export default HomePage;