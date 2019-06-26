const {Selector} = require('testcafe');

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.DeliveryInformation = {
    continue: function(){
        return select ('#tdb6');
    }
};