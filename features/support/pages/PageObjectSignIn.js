const {Selector} = require('testcafe');

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.SignIn = {
    emailAddress: function() {
        return Selector('input').withAttribute('name','email_address')
            .with({boundTestRun: testController});
    },
    password: function() {
        return Selector('input').withAttribute('name','password')
            .with({boundTestRun: testController});
    },
    signInButton: function(){
        return select ('#tdb1');
    }
}; 