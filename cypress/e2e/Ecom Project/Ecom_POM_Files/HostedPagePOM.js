class HostedPage

{

    elements = {
      create_hosted_btn: '#os-120',
      create_btn: '#os-51',
      };
   
      createHostedPage() {
        cy.get(this.elements.create_hosted_btn).click();
        cy.get(this.elements.create_btn).click();

      }

      verifyPage() {
        cy.get(this.elements.IcorrectCreds_txt).should('exist');
      }

}

export default HostedPage;