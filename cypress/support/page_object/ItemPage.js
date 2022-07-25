export class ItemPage{

    clickAddItemToCart(){
        cy.contains('[type="submit"]','Add to Cart',{timeout:8000}).click()
    }

    clickGoToCart(){
        cy.contains('button','Go to Cart',{timeout:8000}).click()
    }

    setProductQuantotyByValue(quantity){
        cy.get('[name="quantity"]').clear().type(quantity)
    }

    getProductInfo(){
        return cy.get('.productPage__stickyForm')
    }

    getProductPrice(){
        cy.find('div:nth-child(6) div span:nth-child(2)')
    }

    getProductName(){
        cy.find('div div')
    }

}

export const onItemPage = new ItemPage()