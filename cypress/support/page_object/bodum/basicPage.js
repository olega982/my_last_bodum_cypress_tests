/// <reference types = 'cypress'/>

export class basicPage{

    clickMenuSection(sectionName){
        cy.get('.menu').contains(sectionName).click()
    }

    typeIntoSearch(text){
        cy.get('.searchTriggerCategory').type(text)
    }

    verifySearchResults(text){
        cy.get('.suggestionItem').each(item =>{
            cy.wrap(item).should('contain',text.toUpperCase())
        })
    }

    clickAccounfIcon(){
        cy.get('.userPanel_customer').click()
    }
    enterAccountEmailAndPassword(email,password){
        cy.get('[placeholder="Email"]').type(email)
        cy.get('[placeholder="Password"]').type(password)
        cy.get('.modalLoginForm__btn').click()
    }
    verifySuccessLoginMessage(){
        cy.contains('You have successfully logged in')
    }

    clickCartIcon(){
        cy.get('.userPanel_cart').click()
    }

    










     

}

export const onBasicPage = new basicPage()