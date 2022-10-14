import { login, password } from "../fixtures/creds"
import { onMainPage } from "../support/page_object/ozon/mainPage"

describe ('Trainig test suite',()=>{

    const itemOreder = 3


    beforeEach('Every test fixture',()=>{
        cy.visit('https://www.bodum.com/gb/en/')
    })


    it('User buy and check the item in the cart',() => {
        onMainPage.typeAndSelectProductIntoSearch('headphones')
        onMainPage.grabTheItemDiscountPrice(onMainPage.selectProductByOrder(itemOreder)).then(itemprice =>{
            onMainPage.AddItemToCart(onMainPage.selectProductByOrder(itemOreder))
            onMainPage.clickCartIcon()

        })
    })


})