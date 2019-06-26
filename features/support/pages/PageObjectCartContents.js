const {Selector} = require('testcafe');

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.CardContents = {
    cartQuantity: function() {
        return Selector('input').withAttribute('name','cart_quantity[]')
            .with({boundTestRun: testController});
    },
    updateCartQuantity: function() {
        return select('#tdb4');
    },
    checkoutButton: function(){
        return select ('#tdb5');
    }
};