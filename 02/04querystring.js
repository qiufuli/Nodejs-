const querystring = require('querystring');

console.log(querystring.parse('a=12&b=11&c=11')); //{ a: '12', b: '11', c: '11' }
console.log(querystring.stringify({ a: '12', b: '11', c: '11' })) //a=12&b=11&c=11