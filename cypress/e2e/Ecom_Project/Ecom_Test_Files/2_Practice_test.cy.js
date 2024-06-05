describe('Practice_test', () => {

    it('Practice_test', () => {
      cy.visit('https://automationexercise.com/products');
      cy.get("a[href='/product_details/2']").click();
 

          /*
      cy.get("input[placeholder='Name']").type("qwe");
      cy.get("input[placeholder='Email']").type("test@gmail.com");
      cy.get("input[placeholder='Subject']").type("qwe");
      cy.xpath("//textarea[@id='message']").type("qwe");
      cy.get("input[name='upload_file']").attachFile('test_file');
      cy.wait(5000);

      cy.get("input[value='Submit']").click();

      cy.on('window:alert',(t) => {

          expect (t).to.contains('Press OK to proceed!');

      })

      cy.xpath("//div[@class='status alert alert-success']").should('exist')
      
  
      cy.get("#login_password_input").type("123");
      cy.get("#login_button").click();
      cy.get("#header-primary-btn1",{timeout:20000});
      */

      
    })
  })
