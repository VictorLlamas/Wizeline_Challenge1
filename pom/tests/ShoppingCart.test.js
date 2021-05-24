import productPage from '../pages/ProductsPage'
import shoppingCartPage from '../pages/ShoppingCartPage'
import { STANDARD_USER } from '../data/Roles'
import { URLS, PAGE_TITLE } from '../data/Constants'

fixture('Shopping cart feature tests')
    .page(`${URLS.LOGIN_PAGE}`)
    .beforeEach( async t => {
        await t.useRole(STANDARD_USER)
        await t.expect(productPage.pageTitle.textContent).eql(PAGE_TITLE.PRODUCT)
    })

test('Navigate to shopping cart', async t => {
    await t.click(productPage.header.shoppingCartButton)
    await t.expect(shoppingCartPage.pageTitle.textContent).eql(PAGE_TITLE.SHOPPING_CART)
})

test('Add single item to the shopping cart', async t => {
    let productAdded = await productPage.backpack.title.textContent
    await t.click(productPage.backpack.addToCardButton)
    await t.expect(productPage.header.shoppingCartBadge.textContent).eql("1")
    
    await t.click(productPage.header.shoppingCartButton)
    await t.expect(shoppingCartPage.pageTitle.textContent).eql(PAGE_TITLE.SHOPPING_CART)
    await t.expect(await shoppingCartPage.productList.searchProduct(productAdded)).eql(true)
})

test('Add multiple items to the shopping cart', async t => {
    let productAdded1 = await productPage.backpack.title.textContent
    await t.click(productPage.backpack.addToCardButton)
    await t.expect(productPage.header.shoppingCartBadge.textContent).eql("1")

    let productAdded2 = await productPage.boltTShirt.title.textContent
    await t.click(productPage.boltTShirt.addToCardButton)
    await t.expect(productPage.header.shoppingCartBadge.textContent).eql("2")
    
    await t.click(productPage.header.shoppingCartButton)
    await t.expect(shoppingCartPage.pageTitle.textContent).eql(PAGE_TITLE.SHOPPING_CART)
    await t.expect(await shoppingCartPage.productList.searchProduct(productAdded1)).eql(true)
    await t.expect(await shoppingCartPage.productList.searchProduct(productAdded2)).eql(true)
})
