
   exports.makeRequest = function bug_request(name, desc){

    var request = require("request");
    var options = { method: 'POST',
      url: 'https://api.trello.com/1/cards',
      qs: 
      { token: '138e580d52ec5fc373a006614ef328b2e49383c1b70f53c1bcea4e3591362acb',
        key: '065dc4cbee4b49286a1a9ca558d8a634',
        idList: '5d0f6166d0d89c66745954ba',
        name: 'name',
        desc: 'desc' },
      headers: 
      { 'cache-control': 'no-cache',
        Connection: 'keep-alive',
        'content-length': '',
        'accept-encoding': 'gzip, deflate',
        cookie: 'dsc=c9a060cc75a0e07b40bab649caca54c606461fc430246e2e98fd9f6d5617d3e0',
        Host: 'api.trello.com',
        'Postman-Token': '928b7cb2-84c7-453a-b8c6-fd7a3c270f5f,bbb52dde-2d2d-4eec-8fb5-dcfc36417bcf',
        'Cache-Control': 'no-cache',
        Accept: '*/*',
        'User-Agent': 'PostmanRuntime/7.15.0' } };
    
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
      });
  }    




