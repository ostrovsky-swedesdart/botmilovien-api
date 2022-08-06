'use strict';

const request = require('prequest');

const method = {

get: function (id) {
return request(`https://botmilovien.ru/api/users.get:${id)`).then(x => x.json()).then(x => x);
}

};

module.exports = method;