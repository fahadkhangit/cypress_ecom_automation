import LoginPage from "../Ecom_POM_Files/LoginPagePOM";
import HomePage from "../Ecom_POM_Files/HomePagePOM";
import ContactPage from "../Ecom_POM_Files/ContactPagePOM";
import TCsPage from "../Ecom_POM_Files/TCsPagePOM";
import ProductsPage from "../Ecom_POM_Files/ProductsPagePOM";
import CartPage from "../Ecom_POM_Files/CartPagePOM";


describe("Automation E2E Web Test Suite", () => {



  it.skip("1. Register User", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    dp.openLoginPage(); // open login page

    const lp = new LoginPage();
    lp.signup(username, email);

  });


  it("2. Login Positive Test", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    dp.openLoginPage(); // open login page

    const lp = new LoginPage();
    lp.verifyLoginPage(); // Verify login page is visible successfully
    lp.login('ossoftwaretest@gmail.com', '123'); // Login to app changes 
    
    dp.verifyLogin(); // Verify login on the dashboard page

  });

  it.skip("3. Login Negative Test", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    dp.openLoginPage(); // open login page

    const lp = new LoginPage();
    lp.verifyLoginPage(); // Verify login page is visible successfully
    lp.login('ossoftwaretest@gmail.com', 'incorrectpass'); // Login to app
    
    lp.verifyNegLogin(); // Verify incorrect pass or email text is visible

  });

  it.skip("4. Logout Test", () => {
   
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

  it.skip("5. Register user with existing email Test", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    dp.openLoginPage(); // open login page

    const lp = new LoginPage();
    lp.verifyLoginPage(); // Verify login page is visible successfully
    lp.signup('xyz', 'ossoftwaretest@gmail.com'); // Login to app 
    lp.verifyExistingUser(); // Verify user already exists


  });


  it.skip("6. Contact Us Form Test", () => {
   
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


  it.skip("7. Test Cases Page", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    dp.openTCsPage(); // open login page

    const tp = new TCsPage();
    tp.verifyTCsPage(); // Verify test cases page is visible successfully

  });


  it.skip("8. Verify All Products and product details Test", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    dp.openProductsPage(); // open products page

    const pp = new ProductsPage();
    pp.verifyProductsPage(); // Verify products page is visible successfully
    pp.viewProduct(); // view product details
    pp.verifyProductsDetails() // verify product details are visible

  });


  it.skip("9. Search Product Test", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    dp.openProductsPage(); // open products page

    const pp = new ProductsPage();
    pp.verifyProductsPage(); // Verify products page is visible successfully
    pp.searchProduct("Men Tshirt"); // view product details
    pp.verifySearchProduct() // verify searched product is visible

  });

  
  it.skip("10. Subscribe Email on Home Page Test", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    cy.scrollTo('bottom');
    dp.subEmail("test@mail.com");

  });


  it.skip("11. Subscribe Email on Cart Page Test", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    dp.CartPage();

    const cc = new CartPage();
    cy.scrollTo('bottom');
    cc.subEmail("test@mail.com");

    

  });


  it.skip("12. (draft) Add Products to Cart Test", () => {
   
    cy.visit('http://automationexercise.com/'); // Visit the website login page

    const dp = new HomePage(); // Create an instance of DashboardPage
    dp.verifyHomePage(); // Verify home page is visible successfully
    dp.openProductsPage();

    const pp = new ProductsPage();
    pp.verifyProductsPage(); // Verify products page is visible successfully
    pp.addProductsToCart(); // 

    const cc = new CartPage();
    cc.verifyCartProducts();


      });

      it.skip("13. Verify Product quantity in Cart Test", () => {
   
        cy.visit('http://automationexercise.com/'); // Visit the website login page
    
        const dp = new HomePage(); // Create an instance of DashboardPage
        dp.verifyHomePage(); // Verify home page is visible successfully
        dp.openProductsPage(); // open products page
    
        const pp = new ProductsPage();
        pp.verifyProductsPage(); // Verify products page is visible successfully
        pp.searchProduct("Men Tshirt"); // view product details
        pp.verifySearchProduct() // verify searched product is visible
        pp.viewProduct(); // view product details
        pp.buyProductinQuantity(4);
        pp.openCartPage();

        const cp = new CartPage();
        cp.verifyCartProductQuantity();
    
      });


      it.skip("14. (draft) Place Order: Register while Checkout Test", () => {
   
        cy.visit('http://automationexercise.com/'); // Visit the website login page
    
        const dp = new HomePage(); // Create an instance of DashboardPage
        dp.verifyHomePage(); // Verify home page is visible successfully
        dp.openProductsPage();
    
        const pp = new ProductsPage();
        pp.verifyProductsPage(); // Verify products page is visible successfully
        pp.searchProduct("Men Tshirt"); // view product details
        pp.verifySearchProduct() // verify searched product is visible
        pp.viewProduct(); // view product details
        pp.buyProductinQuantity(4);
        pp.openCartPage();
    
        const cc = new CartPage();
        cc.verifyCartPage();
        cc.proceedCheckout();
        cc.registerUser();

        const lp = new LoginPage();
        lp.signup('xyz', 'ossoftwaretest@gmail.com');
        
      });


      it.skip("15. Place Order: Register before Checkout Test", () => {
   
        cy.visit('/'); // Visit the website login page
    
        const dp = new HomePage(); // Create an instance of DashboardPage
        dp.verifyHomePage(); // Verify home page is visible successfully
        dp.openLoginPage(); // open login page
    
        const lp = new LoginPage();
        lp.verifyLoginPage(); // Verify login page is visible successfully
        lp.login('ossoftwaretest@gmail.com', '123'); // Login to app
        
        dp.verifyLogin(); // Verify login on the dashboard page
        dp.openProductsPage();
    
    
        const pp = new ProductsPage();
        pp.verifyProductsPage(); // Verify products page is visible successfully
        pp.searchProduct("Men Tshirt"); // view product details
        pp.verifySearchProduct() // verify searched product is visible
        pp.viewProduct(); // view product details
        pp.buyProductinQuantity(4);     // buy 4 products
        pp.openCartPage();      // continue to cart page
    
        const cc = new CartPage();
        cc.verifyCartPage();
        cc.proceedCheckout();
        cc.addCheckoutMessage('Please also add proper bubble wrap');
        cc.placeOrder('xyz', '123', '123', '12', '1234');
        cc.verifyOrderPlaced();
        
      });
    
  

    

    





});