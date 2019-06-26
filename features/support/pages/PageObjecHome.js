const {Selector} = require('testcafe');

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.principal = {
    url: function() {
        return 'https://demo.oscommerce.com/';
    },
    amsungGalaxyTab: function() {
        return Selector('a').withText('Samsung Galaxy Tab')
            .with({boundTestRun: testController});
    },
    checkOutButton: function() {
        return select('#tdb2');
    },
};
