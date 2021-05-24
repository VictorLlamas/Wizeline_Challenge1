import { Selector } from 'testcafe'
import { PRODUCTS } from '../data/Products'
import header from '../webComponents/Header'
import dropDownButton from '../webComponents/DropDownButton'
import product from '../webComponents/Product'


class ProductsPage {
    constructor(){
        this.header = header
        this.pageTitle = Selector('.title').withText('PRODUCTS')
        this.sortFilter = new dropDownButton('.product_sort_container', 'option')
        this.backpack = new product(PRODUCTS.BACKPACK.IMG, PRODUCTS.BACKPACK.TITLE, PRODUCTS.BACKPACK.DESC, 
                                PRODUCTS.BACKPACK.PRICE, PRODUCTS.BACKPACK.ADD_BUTTON, PRODUCTS.BACKPACK.REMOVE_BUTTON),
        this.bikeLight = new product(PRODUCTS.BIKE_LIGHT.IMG, PRODUCTS.BIKE_LIGHT.TITLE, PRODUCTS.BIKE_LIGHT.DESC, 
                                PRODUCTS.BIKE_LIGHT.PRICE, PRODUCTS.BIKE_LIGHT.ADD_BUTTON, PRODUCTS.BIKE_LIGHT.REMOVE_BUTTON),
        this.boltTShirt = new product(PRODUCTS.BOLT_T_SHIRT.IMG, PRODUCTS.BOLT_T_SHIRT.TITLE, PRODUCTS.BOLT_T_SHIRT.DESC, 
                                PRODUCTS.BOLT_T_SHIRT.PRICE, PRODUCTS.BOLT_T_SHIRT.ADD_BUTTON, PRODUCTS.BOLT_T_SHIRT.REMOVE_BUTTON),
        this.fleeceJacket = new product(PRODUCTS.FLEECE_JACKET.IMG, PRODUCTS.FLEECE_JACKET.TITLE, PRODUCTS.FLEECE_JACKET.DESC, 
                                    PRODUCTS.FLEECE_JACKET.PRICE, PRODUCTS.FLEECE_JACKET.ADD_BUTTON, PRODUCTS.FLEECE_JACKET.REMOVE_BUTTON),
        this.onesieTShirt = new product(PRODUCTS.ONESIE_T_SHIRT.IMG, PRODUCTS.ONESIE_T_SHIRT.TITLE, PRODUCTS.ONESIE_T_SHIRT.DESC, 
                                    PRODUCTS.ONESIE_T_SHIRT.PRICE, PRODUCTS.ONESIE_T_SHIRT.ADD_BUTTON, PRODUCTS.ONESIE_T_SHIRT.REMOVE_BUTTON),
        this.testAllThingsTShirt = new product(PRODUCTS.TEST_ALL_THINGS_T_SHIRT_RED.IMG, PRODUCTS.TEST_ALL_THINGS_T_SHIRT_RED.TITLE, PRODUCTS.TEST_ALL_THINGS_T_SHIRT_RED.DESC, 
                                        PRODUCTS.TEST_ALL_THINGS_T_SHIRT_RED.PRICE, PRODUCTS.TEST_ALL_THINGS_T_SHIRT_RED.ADD_BUTTON, PRODUCTS.TEST_ALL_THINGS_T_SHIRT_RED.REMOVE_BUTTON)
    }
    
}

export default new ProductsPage()