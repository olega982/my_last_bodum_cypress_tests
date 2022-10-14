/// <reference types = 'cypress'/>

export class mainPage{

    clickEnterButton(){
        cy.contains('Вход').click()
    }
    enterEmailAndPassword(login,password){
        cy.get('form .auth-input').eq(0).type(login)
        cy.get('form .auth-input').eq(1).type(password)
        cy.get('form .auth-button').click()
        cy.get('#recaptcha-anchor').click()
    }

    typeAndSelectProductIntoSearch(product){
        cy.get('input[type="text"]').first().type(product)
        cy.get('button[type="submit"]').click()
    }



    selectProductByOrder(order){
        return cy.get('.widget-search-result-container>div>div').eq(order)
    }

    grabTheItemDiscountPrice(item){
       return item.find('[style="--oz-price-strikethrough-color:;"]').contains('BYN').invoke('text')
    }

    grabItemTitle(item){


    }

    AddItemToCart(item){
        item.contains('В корзину').scrollIntoView({ offset: { top: 500, left: 0 } }).click()
    }
    clickCartIcon(){
        cy.get('#stickyHeader').find('[data-widget="headerIcon"]').click()
    }











}
export const onMainPage = new mainPage()