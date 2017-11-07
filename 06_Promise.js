'use strict';

var request = require('request');

var promise1 = new Promise(function (reject, resolve)
{
    var options = {
        uri: 'https://api.github.com/repos/onethena/JavaScript/commits',
        method: 'GET',
        headers: {'user-agent': 'node.js'}
    };
    request(options, function (error, response)
    {
        if(response)
            resolve(response.body);
        else
            reject("No data found");     
    });
});

var promise2 = new Promise(function (reject, resolve)
{
    var options = {
        uri: 'https://api.github.com/users/onethena/repos',
        method: 'GET',
        headers: {'user-agent': 'node.js'}
    };
    request(options, function (error, response)
    {
        if(response)
            resolve(response.body);
        else
            reject("No data found");     
    });
});

var promises = [];
promises.push(promise1,promise2);

Promise.all(promises).then(function(data)
{
    console.log(data);
}).catch(function(error){
    console.log("Error", error)
});
