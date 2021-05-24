import productPage from '../pages/ProductsPage'
import shoppingCartPage from '../pages/ShoppingCartPage'
import checkoutInfoPage from '../pages/CheckoutInfoPage'
import checkoutOverviewPage from '../pages/CheckoutOverviewPage'
import CheckoutCompletePage from '../pages/CheckoutCompletePage'
import { STANDARD_USER } from '../data/Roles'
import { URLS, MESSAGES, PAGE_TITLE, PERSONAL_INFO } from '../data/Constants'

fixture('Checkout feature tests')
    .page(`${URLS.LOGIN_PAGE}`)
    .beforeEach( async t => {
        await t.useRole(STANDARD_USER)
        await t.click(productPage.backpack.addToCardButton)
        await t.click(productPage.header.shoppingCartButton)
        await t.click(shoppingCartPage.checkoutButton)
        await t.expect(checkoutInfoPage.pageTitle.textContent).eql(PAGE_TITLE.CHECKOUT_INFO)
    })

test('Continue with missing mail information', async t => {
    await checkoutInfoPage.submitCheckoutInfoForm(PERSONAL_INFO.FIRST_NAME, PERSONAL_INFO.LAST_NAME, null)
    await t.expect(checkoutInfoPage.errorMessage.innerText).eql(MESSAGES.ERROR_MESSAGES.ZIP_CODE_EMPTY)
})

test('Fill users information', async t => {
    await checkoutInfoPage.submitCheckoutInfoForm(PERSONAL_INFO.FIRST_NAME, PERSONAL_INFO.LAST_NAME, PERSONAL_INFO.ZIP_CODE)
    await t.expect(checkoutOverviewPage.pageTitle.textContent).eql(PAGE_TITLE.CHECKOUT_OVERVIEW)
})

test
    .before(async t => {
        await t.useRole(STANDARD_USER)
    })
    ('Final order items', async t => {
        let productAdded = await productPage.backpack.title.textContent
        await t.click(productPage.backpack.addToCardButton)
        await t.click(productPage.header.shoppingCartButton)
        await t.click(shoppingCartPage.checkoutButton)
        await checkoutInfoPage.submitCheckoutInfoForm(PERSONAL_INFO.FIRST_NAME, PERSONAL_INFO.LAST_NAME, PERSONAL_INFO.ZIP_CODE)
        await t.expect(await checkoutOverviewPage.productList.searchProduct(productAdded)).eql(true)
    })

test('Complete a purchase', async t => {
    await checkoutInfoPage.submitCheckoutInfoForm(PERSONAL_INFO.FIRST_NAME, PERSONAL_INFO.LAST_NAME, PERSONAL_INFO.ZIP_CODE)
    await t.click(checkoutOverviewPage.finishButton)
    await t.expect(CheckoutCompletePage.pageTitle.textContent).eql(PAGE_TITLE.CHECKOUT_COMPLETE)
})