import loginPage from '../pages/LoginPage'
import productPage from '../pages/ProductsPage'
import { STANDARD_USER } from '../data/Roles'
import { URLS, CREDENTIALS, MESSAGES, PAGE_TITLE } from '../data/Constants'
import { MENU_OPTIONS } from '../data/Options'

fixture('Login feature tests')
    .page(`${URLS.LOGIN_PAGE}`)

test('Login with a valid user', async t => {
    await t.useRole(STANDARD_USER)
    await t.expect(productPage.pageTitle.textContent).eql(PAGE_TITLE.PRODUCT)
})

test('Login with an invalid user', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(loginPage.errorMessage.innerText).eql(MESSAGES.ERROR_MESSAGES.INVALID_LOGIN)
})

test('Logout from products page', async t => {
    await t.useRole(STANDARD_USER)
    await productPage.header.menuButton.selectOption(MENU_OPTIONS.LOGOUT)
    await t.expect(loginPage.userNameField.exists).ok()
    await t.expect(loginPage.passwordField.exists).ok()
    await t.expect(loginPage.loginButton.exists).ok()
})
