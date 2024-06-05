class TCsPage

{

    elements = {
      test_cases_txt: "//b[normalize-space()='Test Cases']",    // xpath
      };
   

      verifyTCsPage() {
        cy.xpath(this.elements.test_cases_txt).should('exist');
      }

}

export default TCsPage;