import LoginPage from "../Ecom_POM_Files/LoginPagePOM";
import HomePage from "../Ecom_POM_Files/HomePagePOM";
import HostedPage from "../Ecom_POM_Files/HomePagePOM";
import SocialsPage from "../Ecom_POM_Files/HomePagePOM";


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

  it("Register user with existing email Test", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    dp.openLoginPage(); // open login page

    const lp = new LoginPage();
    lp.verifyLoginPage(); // Verify login page is visible successfully
    lp.signup('xyz', 'ossoftwaretest@gmail.com'); // Login to app 
    lp.verifyExistingUser(); // Verify user already exists


  });





});