import { Selector, t } from 'testcafe'

class LoginPage {
    constructor(){
        this.userNameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('h3[data-test="error"]')
    }

    async submitLoginForm(username, password){
        if (username != null){
            await t.typeText(this.userNameField, username, {paste:true})
        }
        if (password != null){
            await t.typeText(this.passwordField, password, {paste:true})
        }
        await t.click(this.loginButton)
    }
    
}

export default new LoginPage()