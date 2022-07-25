export class UserPannel {
    EMAIL = 'hakasz@mailto.plus'
    PASSWORD = 'user_1'

    login(){
        cy.get('[name="email"][placeholder="Email"]').type(this.EMAIL)
        cy.get('[name="password"]').type(this.PASSWORD)
        cy.get('.modalLoginForm__btn').click()       
    }

    verifySuccessLoginMessage(){
        cy.get('.Toastify__toast-body').should('be.visible')
    }

    logOut(){
        cy.contains('p','Log out').click()
        cy.get('.swiper-slide-active',{timeout:8000}).should('be.visible')
    }

    
}
export const onUserPannel = new UserPannel()