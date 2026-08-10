exports.LoginPage = 
class LoginPage {

    // Constructor = whenever you create object for this class, 
    // <Constructor> is automatically invoked 

    // 1- constructor having all attributes of elements

    constructor(page) {
        //(page) - fixture as parameter and same used in everywhere
        this.page = page
        this.loginLink = "#login2"
        this.usernameInput = '#loginusername' 
        // locator of username with <usernameInput> attribute
        this.passwordInput = '#loginpassword' 
        // locator of password with <passwordInput> attribute
        this.loginButton = '//button[normalize-space() = "Log in"]'
        // locator of login button with <loginButton> attribute
    }

    // 2- Here we are writting coresponding methods and actions, and those
    //    used above attributes to locate an elements 

    async gotoLoginPage(){ // Our first <gotoLoginPage()> method
        await this.page.goto('https://www.demoblaze.com/index.html')
        // this.page = refering to fixture and goto link
        // this will lunch your application
    }

    async login(username, password) { // login(username, password) -> test
        // this is another login() comes with 2 parameters (username, password)

        // this.page = fixture(already defined), this.loginLink(already define) = 
        // inside <Constructor> 
        await this.page.locator(this.loginLink).click()
        await this.page.locator(this.usernameInput).fill(username)
        await this.page.locator(this.passwordInput).fill(password)
        await this.page.locator(this.loginButton).click()
    }
}