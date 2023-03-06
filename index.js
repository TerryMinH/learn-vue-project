// Pass in a string literal
var url = new URL("https://example.com?foo=1&bar=2");
// Retrieve from window.location
// var url2 = new URL(window.location);

// Retrieve params via url.search, passed into ctor
var params = new URLSearchParams(url.search);
// var params2 = new URLSearchParams(url2.search);

// Pass in a sequence
var params3 = new URLSearchParams([
  ["foo", 1],
  ["bar", 2],
]);

// Pass in a record
var params4 = new URLSearchParams({ foo: 1, bar: 2 });
console.log(params,params3,params4);