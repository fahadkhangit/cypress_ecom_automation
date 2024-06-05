class ContactPage

{

    elements = {
      get_in_touch_txt: "//h2[normalize-space()='Get In Touch']",       // xpath
      name_box: "input[placeholder='Name']",
      email_box: "input[placeholder='Email']",
      subject_box: "input[placeholder='Subject']",
      msg_box: "//textarea[@id='message']",             // xpath
      submit_btn: "input[value='Submit']",
      choose_file_btn: "input[name='upload_file']",
      homne_btn: "//span[normalize-space()='Home']",        // xpath
      submitted_success_txt: "//div[@class='status alert alert-success']",

      };

      verifyContactPage() {
        cy.xpath(this.elements.get_in_touch_txt).should('exist');
      }

      fillContactForm(name, email, subject, msg, filename) {
        cy.get(this.elements.name_box).type(name);
        cy.get(this.elements.email_box).type(email);
        cy.get(this.elements.subject_box).type(subject);
        cy.xpath(this.elements.msg_box).type(msg);
        cy.get(this.elements.choose_file_btn).attachFile(filename);
        cy.wait(5000);
        cy.get(this.elements.submit_btn).click();

        cy.on('window:alert',(t) => {
  
            expect (t).to.contains('Press OK to proceed!');
  
        })
  
        cy.xpath(this.elements.submitted_success_txt).should('exist')
      }

      gotoHomePage() {
        cy.xpath(this.elements.homne_btn).click();
      }
   



}

export default ContactPage;