/// <reference types = 'cypress'/>

export class subMenuPage{

    clickeSubMenuSection(sectionName){
        cy.get('.megaMenuList__list').contains(sectionName).click()
    }

}

export const onSubMenuPage = new subMenuPage()