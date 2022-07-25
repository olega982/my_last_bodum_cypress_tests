export class SubCategoryItems{

    addProductToCartByOrder(order){
        cy.get('.simpleCardInfo').eq(order).realHover('mouse')
        cy.contains('button','Add to Cart').should('be.visible').click({force:true})
    }


    grabItemInfoByOrder(order){
       return  cy.get('.simpleCardInfo').eq(order).realHover('mouse')
    }

}
export const onSubCategoryItems = new SubCategoryItems()