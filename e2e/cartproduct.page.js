const sauce_backpack = '[data-test="add-to-cart-sauce-labs-backpack"]';
const sauce_bikelight = '[data-test="add-to-cart-sauce-labs-bike-light"]';
const sauce_fleecejacket = '[data-test="add-to-cart-sauce-labs-fleece-jacket"]';

class Cartproductpage {
    
    static addCartBackpack () {
        cy.get(sauce_backpack).click();
    }

    static addCartBikelight () {
        cy.get(sauce_bikelight).click();
    }

    static addCartFleecejacket () {
        cy.get(sauce_fleecejacket).click();
    }

}

export default Cartproductpage;