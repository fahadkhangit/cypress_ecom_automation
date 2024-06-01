class SocialsPage

{

    elements = {
      how_connect_socials_txt: "//span[normalize-space()='How to connect social destinations']",
      };
   
      createHostedPage() {
        cy.get(this.elements.create_hosted_btn).click();
        cy.get(this.elements.create_btn).click();

      }

      verifySocialsPage() {
        cy.xpath(this.elements.how_connect_socials_txt).should('exist');
      }

}

export default SocialsPage;