# plotly-sdet
Take home assignment - Senior Software Developer in Test

# Task description:
Using website: https://www.cypress.io/
Write test for following test cases:
1. Users are able to visit the website and able to scroll down to “Loved by OSS,
trusted by Enterprise” and see the weekly downloads number.
2. User is able to click on Company and then on “About Cypress”
3. User is able to click on “Install” and then on “npm install cypress” and make sure
the copied text is “npm install cypress --save-dev”
4. User is able to click on “Product” and then “visual review”
Bonus:
● User is able to click on “Product”, then “Smart Orchestration”, then scroll down to
“Test Analytics” and see that the green circle is around “Test Analytics”

# Project structure:
**fixtures**: can contain fixture files (e.g., JSON files) used for test data
**integration**: place for test files, each test case has its own spec file for better organization
**plugins**: cypress plugins directory, can be used to extend or modify Cypress behavior
**support**: contains custom commands and additional configuration
