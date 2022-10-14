import { onAccountPage } from "../support/page_object/bodum/accountPage"
import { onBasicPage } from "../support/page_object/bodum/basicPage"
import { onCartPage } from "../support/page_object/bodum/cartPage"
import { onItemsPage } from "../support/page_object/bodum/itemsPage"
import { onSubMenuPage } from "../support/page_object/bodum/subMenuPage"
import { onMainPage } from "../support/page_object/MainPage"


describe('Bodum test2',() => {
    beforeEach('openWEbsite and close cookies',()=>{
        cy.visit('https://www.bodum.com/gb/en/')
        onMainPage.closeTheCookies()
        // onMainPage.closeDiscountForm()
    })

it.only('User add product to the cart and check the final price',() => {
    onBasicPage.clickMenuSection('Kitchen')
    onSubMenuPage.clickeSubMenuSection('Bar Utensils')
    onItemsPage.addToCartItemByOrder(0)
    onItemsPage.grabModalVindowItemPrice().then(itemPrice => {
        onItemsPage.grabModalVindowItemName().then(itemName =>{
            onItemsPage.clickModalButtonGoToCart()
            onCartPage.checkItemPriceByName(itemName,itemPrice)
        })
    })
})

it('User check products via search',()=>{
    onBasicPage.typeIntoSearch('tea')
    onBasicPage.verifySearchResults('tea')

})

it('User login> add product> logout> login and check the selected product',()=>{
    onBasicPage.clickAccounfIcon()
    onBasicPage.enterAccountEmailAndPassword('hakasz@mailto.plus','user_1')
    onBasicPage.verifySuccessLoginMessage()
    //loggedin
    onBasicPage.clickMenuSection('Kitchen')
    onSubMenuPage.clickeSubMenuSection('Bar Utensils')
    onItemsPage.addToCartItemByOrder(0)
    onItemsPage.grabModalVindowItemPrice().then(itemPrice => {
        onItemsPage.grabModalVindowItemName().then(itemName =>{
            onItemsPage.clickModalButtonContinueShopping()
            onBasicPage.clickAccounfIcon()
            onAccountPage.clickLogout()
            onBasicPage.clickAccounfIcon()
            onBasicPage.enterAccountEmailAndPassword('hakasz@mailto.plus','user_1')
            onBasicPage.verifySuccessLoginMessage()
            onBasicPage.clickCartIcon()
            onCartPage.checkItemPriceByName(itemName,itemPrice)
            onCartPage.deleteItemByValue(itemName)

        })
    })

})

})