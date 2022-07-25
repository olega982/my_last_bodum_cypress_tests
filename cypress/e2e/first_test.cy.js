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

 
  // it('Add single  product to cart and remove it.', () => {
  //   onMainPage.clickMainMenuTabByOrder(1)
  //   onMainPage.clcikSubCategoryByOrder(0)
  //   onSubCategoryItems.addProductToCartByOrder(0)
  //   onItemPage.clickAddItemToCart() 
  //   onItemPage.clickGoToCart()
  //   onCartSideMenu.verifyCartProductName(PRODUCTNAME)
  //   onCartSideMenu.verifyCartProductPrice(PRODUCTPRICE)
  //   onCartSideMenu.removeProductFromCart(0)
  //   onCartSideMenu.clickDeleteInTheModal()
  //   onCartSideMenu.verifyEmptyCartText()
  // })

  it('User adds single product to the cart', () => {
    onMainPage.clickMainMenuTabByOrder(1)
    onMainPage.clcikSubCategoryByOrder(0)
    onSubCategoryItems.grabItemInfoByOrder(0).then(productinfo =>{
      const productname = productinfo.find('.simpleCard__label').text()
      const productprice = productinfo.find('div:nth-child(3)>span:nth-child(2)').text()
      onSubCategoryItems.addProductToCartByOrder(0)
      onItemPage.clickAddItemToCart()
      onItemPage.clickGoToCart()
      onCartSideMenu.grabCartProductName().then(cartproductname=>{
        onCartSideMenu.verifyCartProductName(productname,cartproductname)
      })
      onCartSideMenu.grabCartProductPriceForSingleProduct().then(cartprice=>{
        onCartSideMenu.verifyCartProductPrice(productprice,cartprice)
      })
      onCartSideMenu.removeProductFromCart(0)
      onCartSideMenu.clickDeleteInTheModal()
      onCartSideMenu.verifyEmptyCartText()
    })
  })

  it('User adds multiple products to the cart', () => {
    onMainPage.clickMainMenuTabByOrder(1)
    onMainPage.clcikSubCategoryByOrder(0)
    onSubCategoryItems.addProductToCartByOrder(0)
    onItemPage.setProductQuantotyByValue(QUANTITY)
    onItemPage.getProductInfo().then(productcard=>{
      const productprice = productcard.find('div:nth-child(6) div span:nth-child(2)').text()
      const productname = productcard.find('>div:first-child>div:first-child').text()
      onItemPage.clickAddItemToCart()
      onItemPage.clickGoToCart()
      onCartSideMenu.grabCartProductName().then(cartproductname=>{
        onCartSideMenu.verifyCartProductName(productname,cartproductname)
      })
      onCartSideMenu.grabCartProductPriceForMultipleProducts().then(cartprice=>{
        onCartSideMenu.verifyCartProductPrice(productprice,cartprice)
      })
      onCartSideMenu.removeProductFromCart(0)
      onCartSideMenu.clickDeleteInTheModal()
      onCartSideMenu.verifyEmptyCartText()
    })
  })

  it.only('User search specific product',()=>{
    onMainPage.typeTextIntoSearch(SEARCHPRODUCT)
    onMainPage.verifyFirstSearchResult(SEARCHPRODUCT)
  })

  it('Login> add product> logout> login> verify product> delete product', () => {
    onMainPage.clickUserPannel()
    onUserPannel.login()
    onUserPannel.verifySuccessLoginMessage()
    onMainPage.clickMainMenuTabByOrder(1)
    onMainPage.clcikSubCategoryByOrder(0)
    onSubCategoryItems.grabItemInfoByOrder(0).then(productinfo =>{
      const productname = productinfo.find('.simpleCard__label').text()
      const productprice = productinfo.find('div:nth-child(3)>span:nth-child(2)').text()
      onSubCategoryItems.addProductToCartByOrder(0)
      onItemPage.clickAddItemToCart()
      onItemPage.clickGoToCart()
      onCartSideMenu.grabCartProductName().then(cartproductname=>{
        onCartSideMenu.verifyCartProductName(productname,cartproductname)
      })
      onCartSideMenu.grabCartProductPriceForSingleProduct().then(cartprice=>{
        onCartSideMenu.verifyCartProductPrice(productprice,cartprice)
      })
      onCartSideMenu.exitCart()
      onMainPage.clickUserPannel()
      onUserPannel.logOut()
      onMainPage.clickUserPannel()
      onUserPannel.login()
      onMainPage.clickUserCart()
      onCartSideMenu.grabCartProductName().then(cartproductname=>{
        onCartSideMenu.verifyCartProductName(productname,cartproductname)
      })
      onCartSideMenu.grabCartProductPriceForSingleProduct().then(cartprice=>{
        onCartSideMenu.verifyCartProductPrice(productprice,cartprice)
      })
      onCartSideMenu.removeProductFromCart(0)
      onCartSideMenu.clickDeleteInTheModal()
      onCartSideMenu.verifyEmptyCartText()
    })
  })
})