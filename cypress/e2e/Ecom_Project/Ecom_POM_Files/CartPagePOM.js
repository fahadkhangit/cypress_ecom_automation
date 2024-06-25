class CartPage

{

    elements = {
      sub_email_box: "#susbscribe_email",
      sub_email_submit_btn: "#subscribe",
      sub_email_success_txt: "//div[@class='alert-success alert']",     //xpath
      cart_list_product1: "a[href='/product_details/1']",
      cart_list_product2: "a[href='/product_details/2']",
      product_quantity: "//button[normalize-space()='4']",     //xpath
      proceed_checkout: "//a[normalize-space()='Proceed To Checkout']",     //xpath
      register_login_btn: "//u[normalize-space()='Register / Login']",     //xpath
      continue_on_cart_btn: "//button[normalize-space()='Continue On Cart']",     //xpath
      checkout_msg_box: "//textarea[@name='message']",          //xpath
      pleace_order_btn: "//a[normalize-space()='Place Order']",     //xpath
      payment_card_name: "input[name='name_on_card']",
      payment_card_number: "input[name='card_number']",
      payment_card_cvc: "input[placeholder='ex. 311']",
      payment_card_expiry: "input[placeholder='MM']",
      payment_card_year: "input[placeholder='YYYY']",
      payment_submit_btn: "#submit",
      order_placed_txt: "//b[normalize-space()='Order Placed!']",   //xpath

      };
   
      subEmail(email) {
        cy.get(this.elements.sub_email_box).type(email);
        cy.get(this.elements.sub_email_submit_btn).click();
        cy.xpath(this.elements.sub_email_success_txt).should('exist');
      }

      verifyCartPage() {
        cy.xpath(this.elements.proceed_checkout).should('exist');
      }

      verifyCartProducts() {
        cy.get(this.elements.cart_list_product1).should('exist');
        cy.get(this.elements.cart_list_product2).should('exist');
      }

      verifyCartProductQuantity() {
        cy.xpath(this.elements.product_quantity).should('exist');
      }

      proceedCheckout() {
        cy.xpath(this.elements.proceed_checkout).click();   
      }

      registerUser() {
        cy.xpath(this.elements.register_login_btn).click();
      }

      continueOnCart() {
        cy.xpath(this.elements.continue_on_cart_btn).click();
      }

      addCheckoutMessage(message) {
        cy.xpath(this.elements.checkout_msg_box).type(message);
      }

      placeOrder(name, number, cvc, expiry, year) {
        cy.xpath(this.elements.pleace_order_btn).click();
        cy.get(this.elements.payment_card_name).type(name);
        cy.get(this.elements.payment_card_number).type(number);
        cy.get(this.elements.payment_card_cvc).type(cvc);
        cy.get(this.elements.payment_card_expiry).type(expiry);
        cy.get(this.elements.payment_card_year).type(year);
        cy.get(this.elements.payment_submit_btn).click();
      }

      verifyOrderPlaced() {
        cy.xpath(this.elements.order_placed_txt).should('exist');
      }

}

export default CartPage;