import LoginPage from "../Ecom_POM_Files/LoginPagePOM";
import HomePage from "../Ecom_POM_Files/HomePagePOM";
import HostedPage from "../Ecom_POM_Files/HomePagePOM";
import SocialsPage from "../Ecom_POM_Files/HomePagePOM";


describe("Automation Exercise Web Test Suite", () => {



  it.skip("Register User", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

  });


  it("Login Positive Test", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    dp.openLoginPage(); // open login page

    const lp = new LoginPage();
    lp.verifyLoginPage(); // Verify login page is visible successfully
    lp.login('ossoftwaretest@gmail.com', '123'); // Login to app
    
    dp.verifyLogin(); // Verify login on the dashboard page

  });


  it.skip("Create Hosted Page", () => {
    
    cy.visit('https://app.onestream.live/'); // Visit the website login page

    const dp = new DashboardPage(); // Create an instance of DashboardPage
    dp.navigateToHostedPage(); // Verify login on the dashboard page

    const hp = new HostedPage(); // Create an instance of HostedPage
    hp.createHostedPage(); // Perform actions on the Hosted page (e.g., create new page)

  });


  it.skip("Access Embed Setting", () => {
   
    cy.visit('https://app.onestream.live/'); // Visit the website login page
   
    const dp = new DashboardPage(); // Create an instance of DashboardPage
    dp.accessEmbedSetting(); // Access Embed Setting and verify

  });


  it.skip("Access Socials Page", () => {
   
    cy.visit('https://app.onestream.live/'); // Visit the website login page 
   
    const dp = new DashboardPage(); // Create an instance of DashboardPage
    dp.accessSocials(); // Access Socails Page

    const sp = new SocialsPage(); // Create an instance of Socials Page
    sp.verifySocialsPage(); // Verify Socails Page is accessible

  });



});