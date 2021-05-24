import { Selector, t } from 'testcafe'
import header from '../webComponents/Header'

class CheckoutInfoPage{
    constructor(){
        this.header = header
        this.pageTitle = Selector('.title').withText('CHECKOUT: YOUR INFORMATION')
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.zipCodeField = Selector('#postal-code')
        this.errorMessage = Selector('h3[data-test="error"]')
        this.cancelButton = Selector('#cancel')
        this.continueButton = Selector('#continue')
    }

    async submitCheckoutInfoForm(firstName, lastName, zipCode){
        if(firstName != null){
            await t.typeText(this.firstNameField, firstName, {paste:true})
        }
        if(lastName != null){
            await t.typeText(this.lastNameField, lastName, {paste:true})
        }
        if(zipCode != null){
            await t.typeText(this.zipCodeField, zipCode, {paste:true})
        }
        await t.click(this.continueButton)
    }
    
}

export default new CheckoutInfoPage()