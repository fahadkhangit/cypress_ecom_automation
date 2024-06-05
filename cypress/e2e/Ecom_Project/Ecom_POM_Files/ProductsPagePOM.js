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

}

export default ProductsPage;