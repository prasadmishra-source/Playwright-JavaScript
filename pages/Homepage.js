exports.HomePage = 
class HomePage{

    constructor(page){

        this.page = page
        this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a'
        this.addToCartbtn = '//a[normalize-space()="Add to cart"]'
        this.cart='#cartur'
    }

    async addProductToCart(productName){
        // this method name will get all products in the page
        // and search for our products
        const productList = await this.page.$$(this.productList)
        // capture all products into variable
        for (const product of productList){
            // read each and every product
            if(productName === await product.textContent()){
                // productname is same as our productname
                // whatever product passed earlier
                await product.click()
                // if it is equal then click on the prodcut
                // and break the loop
                break

                //if it is not equal then pick another product,
                //check if it is equal or not and continue previus steps
                // ***repeat multiple products until match is found.*** //


            }
        }

        await this.page.on('dialog', async dialog => {

            if(dialog.message().includes('added')){
                await dialog.accept()
            }

        })

        await this.page.locator(this.addToCartbtn).click()
    }

    async gotoCart() {
        await this.page.locator(this.cart).click()
    }
}