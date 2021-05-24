import { Selector } from 'testcafe'
import header from '../webComponents/Header'
import productList from '../webComponents/ProductsList'

class ShoppingCartPage {
    constructor(){
        this.header = header
        this.pageTitle = Selector('.title').withText('YOUR CART')
        this.productList = new productList('.cart_list .cart_item')
        this.continueShoppingButton = Selector('#continue-shopping')
        this.checkoutButton = Selector('#checkout')
    }
    
}

export default new ShoppingCartPage()