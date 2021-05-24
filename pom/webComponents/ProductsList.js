import { Selector } from 'testcafe'

export default class productList {
    constructor(listLocator){
        this.list = Selector(`${listLocator}`)
    }

    async getCount(){
        return this.list.count
    }

    async getList(){
        return this.list
    }

    async searchProduct(productNameToSearch){
        for(let i = 0; i < await this.getCount(); i++){
            this.element = (await this.getList()).nth(i)
            let productName = await this.element.find('.inventory_item_name').textContent
            if (productName == productNameToSearch){
                return true
            }
        }
        return false
    }
}