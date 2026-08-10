const {test, expect} = require('@playwright/test');
// test & expect-> these two are packages, 
// test-> require to create our test, expect - require to add validations
//require-> function comes from node JS
// @playwright/test-> this the module, require('@playwright/test') -> this module we're importing

//Now we need to write 'test' block with ananyomous function -> below
//ananyomous function-> ' ()=> ' -> open bracket and arrow function
//fixture-> 'page' represent with the fixture, and we need to pass inside ananyomous function with {} bracket
//all commands available in playwright
//and using 'page' fixture we have to access all commands
test('Home page', async ({page})=> {

    // 'async' used before the function return a 'Promise'
    // 'await' keywords makes the function wait for 'Promise'

    await page.goto('https://www.demoblaze.com/');
    
    // JavaScript is asyncronized programming language - multiple line of codes executes parallely
    // So we are using 'Promise' to load page before execution

    const pageTitle = await page.title();
    console.log('Page title is:', pageTitle);

    //to verify Title, we need to add assertation
    await expect(page).toHaveTitle('STORE');

    const pageURL = page.url();

    console.log('Page URL is: ',pageURL)

    await expect(page).toHaveURL('`https://www.demoblaze.com/`');

    await page.close();


});



