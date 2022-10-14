export class MainPage {

    WARNINGMESSAGE = 'Are you sure you want to delete the item?'
    EMPTYCARTTEXT = 'You have no item(s) in your Shopping Cart'

    clickMainMenuTabByOrder(order) {
        cy.get('.menu').find('li').eq(order).click()
    }

    closeTheCookies() {
            cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll').click({force:true})
        }
    closeDiscountForm(){
        cy.get('[data-testid="POPUP"]').find('circle').click({force:true})
    }
    clcikSubCategoryByOrder(itemorder){
        cy.get('.megaMenuList__item').eq(itemorder).click()
    }

    typeTextIntoSearch(text){
        cy.get('.searchTriggerCategory').type(text)
    }
    verifyFirstSearchResult(text){
        cy.get('.suggestionItem').first().should('contain',text)
    }

    clickUserCart(){
        cy.get('.userPanel_cart').click()
    }

    clickUserPannel(){
        cy.get('.userPanel_customer').click()
    }

    }

export const onMainPage = new MainPage()