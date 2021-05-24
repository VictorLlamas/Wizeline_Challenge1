
import { Selector, t } from 'testcafe'

export default class DropDownButton {
    constructor(selectLocator, optionLocator){
        this.select = Selector(`${selectLocator}`),
        this.option = this.select.find(`${optionLocator}`)
    }

    async selectOption(option){
        await t.click(this.select)
        await t.click(this.option.withText(option))
    }
};