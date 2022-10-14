/// <reference types = 'cypress'/>
export class accountPage{

    clickLogout(){
        cy.intercept('https://www.bodum.com/gb/en/graphql').as('logoutreq')
        cy.contains('Log out').click()
        cy.wait('@logoutreq')
    }


}

export const onAccountPage = new accountPage()