class CartPage

{

    elements = {
      sub_email_box: "#susbscribe_email",
      sub_email_submit_btn: "#subscribe",
      sub_email_success_txt: "//div[@class='alert-success alert']",     //xpath
      cart_list_product1: "a[href='/product_details/1']",
      cart_list_product2: "a[href='/product_details/2']",
      product_quantity: "//button[normalize-space()='4']",     //xpath

      };
   
      subEmail(email) {
        cy.get(this.elements.sub_email_box).type(email);
        cy.get(this.elements.sub_email_submit_btn).click();
        cy.xpath(this.elements.sub_email_success_txt).should('exist');
      }

      verifyTCsPage() {
        cy.xpath(this.elements.test_cases_txt).should('exist');
      }

      verifyCartProducts() {
        cy.get(this.elements.cart_list_product1).should('exist');
        cy.get(this.elements.cart_list_product2).should('exist');
      }

      verifyCartProductQuantity() {
        cy.xpath(this.elements.product_quantity).should('exist');
      }

}

export default CartPage;