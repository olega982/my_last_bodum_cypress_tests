export class CartSideMenu{

    EMPTYCARTTEXT = "You have no item(s) in your Shopping Cart"

    verifyCartProductName(shopname,cartname){
        expect(shopname).to.equal(cartname)
    }

    verifyCartProductPrice(shopprice,cartprice){
        expect(shopprice).to.equal(cartprice)
    }


    grabCartProductName(){
        return cy.get('.cartProductCategory').invoke('text')
    }

    grabCartProductPriceForSingleProduct(){
        return cy.get('.cartProductPrice div span:nth-child(2)').invoke('text')
    }

    grabCartProductPriceForMultipleProducts(){
        return cy.get('.cartProductPrice div span').invoke('text')
    }

    removeProductFromCart(itemorder){
        cy.get('.cartProductActions__btnIcon').eq(itemorder).click()
    }

    clickDeleteInTheModal(){
        cy.get('#modal_deleteItem').contains('button','Delete').click()
    }
    verifyEmptyCartText(){
        cy.get('.modalBody').should('contain',this.EMPTYCARTTEXT)
    }

    exitCart(){
        cy.get('.cartClose').click()
    }
}
export const onCartSideMenu = new CartSideMenu()