import { Selector } from 'testcafe'
import header from '../webComponents/Header'
import productList from '../webComponents/ProductsList'

class CheckoutOverviewPage{
    constructor(){
        this.header = header
        this.pageTitle = Selector('.title').withText('CHECKOUT: OVERVIEW')
        this.productList = new productList('.cart_list .cart_item')
        this.paymentInfo = Selector('.summary_info_label').withText('Payment').find('..summary_value_label')
        this.shippingInfo = Selector('.summary_info_label').withText('Shipping').find('..summary_value_label')
        this.itemTotal = Selector('.summary_subtotal_label')
        this.tax = Selector('.summary_tax_label')
        this.total = Selector('.summary_total_label')
        this.cancelButton = Selector('#cancel')
        this.finishButton = Selector('#finish')
    }
    
}

export default new CheckoutOverviewPage()