const {Selector} = require('testcafe');

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.ProductSheet = {
    productName: function(text) {
        return Selector('h1').withText(text)
            .with({boundTestRun: testController});
    },
    addToCartButton: function() {
        return select('#tdb4');
    },
    checkoutButton: function(){
        return select ('#tdb5');
    }
};