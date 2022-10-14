/// <reference types = 'cypress'/>

export class itemsPage{

    addToCartItemByOrder(order){
        cy.get('.simpleCard').eq(order).realHover('mouse')
        cy.contains('.button','Add to Cart').should('be.visible').click({force:true})
    }


    //Find the way to select another dom element 
    grabModalVindowItemPrice(){
        cy.get('.modalBody span').then(elements =>{
            if(elements.length>1){
                return  cy.get('.modalBody span:nth-of-type(2)').invoke('text') 
            }
            return cy.get('.modalBody span:nth-of-type(1)').invoke('text')  
        })
    }

    grabModalVindowItemName(){
        return cy.get('.modalBody>div>div:last-child>div:nth-of-type(2)').invoke('text')
    }

    clickModalButtonGoToCart(){
        cy.contains('Go to Cart').click()
    }

    clickModalButtonContinueShopping(){
        cy.contains('Continue Shopping').click()
    }

}

export const onItemsPage = new itemsPage()