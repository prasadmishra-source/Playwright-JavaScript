import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/Homepage'
import { CartPage } from '../pages/CartPage'

test('POM Test', async ({ page }) => {

// ***Login*** // 

    // let's create an objects for <Login> page

    const login = new LoginPage(page)
    // we have create loginpage object
    await login.gotoLoginPage()
    // entering the URL
    await login.login('pavanol', 'test@123')
    // Entering username, password and click on login button 

    await page.waitForTimeout(3000)
    // it will execute fast so we are adding time of 3 seconds

// ***Home*** //

    const home = new HomePage(page)
    await home.addProductToCart("Nexus 6")
    // selected the product and add into cart

    await page.waitForTimeout(3000)
    // it will execute fast so we are adding time of 3 seconds

    await home.gotoCart();
    // navigating to cart - a link

// ***Cart*** //

    const cart = new CartPage(page)
    await page.waitForTimeout(3000)

    const status = await cart.checkProductInCart('Nexus 6')
    expect(status).toBeTruthy()

    

})