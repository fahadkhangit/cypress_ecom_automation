class ProductsPage

{

    elements = {
      all_products_txt: "//h2[normalize-space()='All Products']",    // xpath
      view_product2_btn: "a[href='/product_details/2']",
      product_name_txt: "//h2[normalize-space()='Men Tshirt']",    // xpath
      product_category_txt: "//p[normalize-space()='Category: Men > Tshirts']",    // xpath
      product_price_txt: "//span[normalize-space()='Rs. 400']",    // xpath
      product_availability_txt: "//b[normalize-space()='Availability:']",    // xpath
      product_condition_txt: "//b[normalize-space()='Condition:']",    // xpath
      product_brand_txt: "//b[normalize-space()='Brand:']",    // xpath
      search_product_box: "#search_product",
      search_product_submit_btn: "#submit_search",
      prod1_add_to_cart: "body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)",
      prod2_add_to_cart: "body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)",
      continue_shopping_btn: ".btn.btn-success.close-modal.btn-block",
      view_cart: "//u[normalize-space()='View Cart']",    //xpath 
      set_product_quantity: "//input[@id='quantity']",    //xpath 
      add_to_cart_btn: "//button[normalize-space()='Add to cart']",    //xpath 

      };
   

      verifyProductsPage() {
        cy.xpath(this.elements.all_products_txt).should('exist');
      }

      viewProduct() {
        cy.get(this.elements.view_product2_btn).click();
      }

      verifyProductsDetails() {
        cy.xpath(this.elements.product_name_txt).should('exist');
        cy.xpath(this.elements.product_category_txt).should('exist');
        cy.xpath(this.elements.product_price_txt).should('exist');
        cy.xpath(this.elements.product_availability_txt).should('exist');
        cy.xpath(this.elements.product_condition_txt).should('exist');
        cy.xpath(this.elements.product_brand_txt).should('exist');
      }

      searchProduct(product_name) {
        cy.get(this.elements.search_product_box).type(product_name);
        cy.get(this.elements.search_product_submit_btn).click();
      }

      verifySearchProduct() {
        cy.get(this.elements.view_product2_btn).should('exist');
      }

      addProductsToCart() {
        cy.get(this.elements.prod1_add_to_cart).click();
        cy.get(this.elements.continue_shopping_btn).click();
        cy.get(this.elements.prod2_add_to_cart).click();
        cy.xpath(this.elements.view_cart).click();
      }

      buyProductinQuantity(value) {
        cy.xpath(this.elements.set_product_quantity).clear().type(value);
        cy.xpath(this.elements.add_to_cart_btn).click();
        cy.xpath(this.elements.view_cart).click();
      }

      addToCart() {
        
      }

}

export default ProductsPage;