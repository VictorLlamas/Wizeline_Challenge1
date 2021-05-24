import { Selector } from 'testcafe'
import menuButton from './MenuButton'

class Header {
    constructor(){
        this.shoppingCartButton = Selector('#shopping_cart_container')
        this.shoppingCartBadge = Selector('.shopping_cart_badge')
        this.menuButton = menuButton
    }
}

export default new Header()