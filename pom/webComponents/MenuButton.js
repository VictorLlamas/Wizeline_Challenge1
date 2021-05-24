import { Selector, t } from 'testcafe'

class MenuButton {
    constructor(){
        this.menuButton = Selector('#react-burger-menu-btn')
    }

    async selectOption(option){
        await t.click(this.menuButton)
        await t.click(new Selector(option))
    }

}

export default new MenuButton()