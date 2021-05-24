import { Selector } from 'testcafe'
import header from '../webComponents/Header'

class CheckoutCompletePage{
    constructor(){
        this.header = header
        this.pageTitle = Selector('.title').withText('CHECKOUT: COMPLETE!')
        this.completeHeader = Selector('.complete-header')
        this.completeMessage = Selector('.complete-text')
        this.backHomeButton = Selector('#back-to-products')
    }
    
}

export default new CheckoutCompletePage()