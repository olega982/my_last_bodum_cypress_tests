import { onCartSideMenu } from "../support/page_object/CartSideMenu"
import { onItemPage } from "../support/page_object/ItemPage"
import { onMainPage } from "../support/page_object/MainPage"
import { onSubCategoryItems } from "../support/page_object/SubCategoryItems"
import { onUserPannel } from "../support/page_object/UserPannel"

describe('My basic tests for the bodum website', () => {
  const SEARCHPRODUCT = 'tea'
  const QUANTITY = 5

  beforeEach('Open the website',()=>{
    cy.visitBoumWebsite()
    onMainPage.closeTheCookies()

  })

  it.only('User search specific product',()=>{
    onMainPage.typeTextIntoSearch(SEARCHPRODUCT)
    onMainPage.verifyFirstSearchResult(SEARCHPRODUCT)
  })

})