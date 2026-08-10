exports.CartPage = 
class CartPage{

    constructor(page){
        this.page = page
        //this.noOfProducts = '//tbody[@id="tbodyid"]/tr/td[2]'
        this.noOfProducts = "//*[text()='Nexus 6']"
        // this -> represnts class variable

    }

    async checkProductInCart(productName) {
        // this method name will get all products in the page
        // and search for our products
        
        const productsInCart = await this.page.$$(this.noOfProducts);
        // capture all products into variable

        for (const product of productsInCart) {
            // read each and every product
            // productsInCart - represents multiple products in table
            console.log(await product.textContent())
            // productname will print as message
            if(productName === await product.textContent()) {

                // Comparing the product name and if this is a matched
                // we'll returning True and break this loop
                // If not we'll pick another product, we'll continue
                // the loop until we found or check all products
                // if not found we'll exit the loop

                return true
                break
            }
        }
    }
}