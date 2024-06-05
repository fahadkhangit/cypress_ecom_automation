import LoginPage from "../Ecom_POM_Files/LoginPagePOM";
import HomePage from "../Ecom_POM_Files/HomePagePOM";
import ContactPage from "../Ecom_POM_Files/ContactPagePOM";
import TCsPage from "../Ecom_POM_Files/TCsPagePOM";
import ProductsPage from "../Ecom_POM_Files/ProductsPagePOM";


describe("Automation Exercise Web Test Suite", () => {



  it.skip("Register User", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

  });


  it.skip("Login Positive Test", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    dp.openLoginPage(); // open login page

    const lp = new LoginPage();
    lp.verifyLoginPage(); // Verify login page is visible successfully
    lp.login('ossoftwaretest@gmail.com', '123'); // Login to app
    
    dp.verifyLogin(); // Verify login on the dashboard page

  });

  it.skip("Login Negative Test", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    dp.openLoginPage(); // open login page

    const lp = new LoginPage();
    lp.verifyLoginPage(); // Verify login page is visible successfully
    lp.login('ossoftwaretest@gmail.com', 'incorrectpass'); // Login to app
    
    lp.verifyNegLogin(); // Verify incorrect pass or email text is visible

  });

  it.skip("Logout Test", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    dp.openLoginPage(); // open login page

    const lp = new LoginPage();
    lp.verifyLoginPage(); // Verify login page is visible successfully
    lp.login('ossoftwaretest@gmail.com', '123'); // Login to app
    
    dp.verifyLogin(); // Verify login on the dashboard page
    dp.logout(); // logout from the website
    dp.verifyLogout(); // verify logged in as [user] text is not visible

  });

  it.skip("Register user with existing email Test", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    dp.openLoginPage(); // open login page

    const lp = new LoginPage();
    lp.verifyLoginPage(); // Verify login page is visible successfully
    lp.signup('xyz', 'ossoftwaretest@gmail.com'); // Login to app 
    lp.verifyExistingUser(); // Verify user already exists


  });


  it.skip("Contact Us Form Test", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    dp.openContactPage(); // open contact us page

    const cp = new ContactPage();
    cp.verifyContactPage(); // Verify contact us page is visible successfully
    cp.fillContactForm('xyz', 'test@gmail.com', 'xyz', 'xyz', 'test_file'); // fill the contact us form
    cp.gotoHomePage(); // go to home page again

    dp.verifyHomePage(); // Verify home page is visible successfully


  });


  it.skip("Test Cases Page", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    dp.openTCsPage(); // open login page

    const tp = new TCsPage();
    tp.verifyTCsPage(); // Verify test cases page is visible successfully

  });


  it("Verify All Products and product details Test", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    dp.openProductsPage(); // open products page

    const pp = new ProductsPage();
    pp.verifyProductsPage(); // Verify products page is visible successfully
    pp.viewProduct(); // view product details
    pp.verifyProductsDetails() // verify product details are visible

  });



});