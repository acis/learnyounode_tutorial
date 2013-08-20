/**
 Write an HTTP server that serves JSON data when it receives a GET
 request to the path '/api/parsetime'. Expect the request to contain a
 query string with a key 'iso' and an ISO-format time as the value.
 For example:

 /api/parsetime?iso=2013-08-10T12:10:15.474Z

 The JSON response should contain only 'hour', 'minute' and 'second'
 properties. For example:

 {
	"hour": 14
	"minute": 23
	"second": 15
}

 Add second endpoint for the path '/api/unixtime' which accepts the
 same query string but returns UNIX epoch time under the property
 'unixtime', rounded down to the nearest second. For example:

 {
	"unixtime": 1234567000
}

 Your server should listen on port 8000.

 ----------------------------------------------------------------------
 HINTS:

 The `request` object from an HTTP server has a `url` property that
 you will need to use to "route" your requests for the two endpoints.

 You can parse the URL and query string using the Node core 'url'
 module. `url.parse(request.url, true)` will parse content of
 request.url and provide you with an object with helpful properties.
 For example, on the command prompt, type:

 node -pe "require('url').parse('/test?q=1', true)"

 Documentation on the `url` module can be found by pointing your
 browser here:
 /home/anca/lib/node_modules/learnyounode/node_apidoc/url.html

 You should also be a good web citizen and set the Content-Type
 properly:

 res.writeHead(200, { 'Content-Type': 'application/json' })

 The JavaScript `Date` object can print dates in ISO format, e.g.
 `new Date().toISOString()`. It can also parse this format if you pass
 the string into the `Date` constructor. `Date#getTime()` will also
 come in handy.

 ----------------------------------------------------------------------
 */

var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {

	var reqUrl = url.parse(req.url, true);
	var date = new Date(reqUrl.query['iso']);

	var body;

	if (reqUrl.pathname == "/api/parsetime") {
		body={};
		body.hour = date.getHours();
		body.minute = date.getMinutes();
		body.second = date.getSeconds();
		res.end(JSON.stringify(body));
	}
	else if (reqUrl.pathname == "/api/unixtime") {
		body={};
	 	body.unixtime = Date.parse(date);
	}

	if(body){
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(body));
	} else{
		res.writeHead(404);
		res.end();
	}
}).listen(8000);


