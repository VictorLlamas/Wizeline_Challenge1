import { Selector } from 'testcafe'

export default class Product {
    constructor(imageLocator, titleLocator, descLocator, priceLocator, addBtnLocator, removeBtnLocator){
        this.image = Selector(`${imageLocator}`),
        this.title = Selector(`${titleLocator}`)
        this.description = Selector(`${descLocator}`),
        this.price = Selector(`${priceLocator}`)
        this.addToCardButton = Selector(`${addBtnLocator}`),
        this.removeButton = Selector(`${removeBtnLocator}`)
    }
}