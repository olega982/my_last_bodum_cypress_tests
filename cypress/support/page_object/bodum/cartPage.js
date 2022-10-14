/// <reference types = 'cypress'/>

export class cartPage{

    checkItemPriceByName(item,price){
        cy.contains('.cartProduct__name',item).parents('.cartProduct').should('contain',price)
    }

    deleteItemByValue(value){
        cy.contains('.cartProduct__name',value).parents('.cartProduct').find('.btnDelete').click()
        cy.contains('Delete').click()
    }
}

export const onCartPage = new cartPage()