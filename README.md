# Wizeline_Challenge1
Wizeline Academy - Challenge 1: Front End Test automation  using TestCafe

**Required Libraries**

Dependencies:
  - dotenv
  - testcafe
  - testcafe-reporter-html

To install all the dependencies open a terminal in the project folder and run:
  
    npm install
 
**Run Project**

The test cases are structured in 3 different files:
  1. Login.test.js (Scenarios 1, 2 and 3)
  2. ShoppingCart.test.js (Scenarios 4, 5 and 6)
  3. Checkout.test.js (Scenarios 7, 8, 9 and 10)

Four npm scripts are defined to run the set of test cases:
  - To run Login scenarios: 
        
        npm run test-login-multi-browser
  - To run Shopping cart scenarios: 
        
        npm run test-shoppingCart-multi-browser
  - To run Checkout scenarios: 
        
        npm run test-checkout-multi-browser
  - To run the complete set: 
        
        npm run test-all-multi-browser

**Test Execution Reports**

The execution will create an html report in folder ./reports
  - Login scenarios will generate:
  
        report_login_{timestamp}.html
        
  - Shopping cart scenarios will generate:
 
        report_shoppingCart_{timestamp}.html
        
  - Checkout scenarios will generate:
  
        report_checkout_{timestamp}.html
        
  - All scenarios will generate: 
  
        report_all_{timestamp}.html

