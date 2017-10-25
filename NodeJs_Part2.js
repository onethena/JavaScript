/** Node.js Tutorial Part2 **/

/** 11. Web server example **/
	var http = require('http');
	var fs = require('fs');
	var url = require('url');
	var server = http.createServer(function(request, response)
	{
		var pathName = url.parse(request.url).pathname;
		console.log("Request received for "+ pathName);
		fs.readFile(pathName.substring(1), function(error, data)	//data is the content of the file requested
		{
			if(error)
			{
				console.log(error);
				/** 404 - Page not found error **/
				response.writeHead(404, {'Content-Type' : 'text/html'});
			}
			else
			{
				/** 200 - Page found **/
				response.writeHead(200, {'Content-Type' : 'text/html'});
				/** Write the content of the file to response body (basically send the html page) **/
				console.log(data.toString());
				response.write(data.toString(), function(error)
				{
					if(error)
						console.log(error.stack);
					response.end();
				});			
			}
		})
	}).listen(8081);	// Basically  any request to the localhost IP - 127.0.0.1:8081 will now receive response from this file
	console.log("Server is running on 127.0.0.1:8081...")
/** web_server.js ends here **/

/** client for web server example - note that client and the following html page are independant of eachother **/
	var http = require('http');
	var options =
	{
		localhost: 'localhost',
		port: '8081',
		path: '/index.html'	
	}
	var responsecallback = function(response)
	{
		var body = "";
		response.on('data', function(data)
		{
			console.log("receiving data");
			body += data;
		});
		response.on('end', function()
		{
			console.log(body);
		});
	}
	var request = http.request(options, responsecallback);
	request.end();
/** web_server_client.js ends here **/

<!-- html sample file for web server example -->
<html>
	<head>
		<title>
			sample html page
		</title>
	</head>
	<body>
		hello, world!
	</body>
</html>
<!-- index.html file ends here -->
	
/** passing function as an input parameter **/
	function operations(arg1, arg2)
	{	
		if(typeof arg2 == "function")
			arg2(arg1);
		else
			console.log(arg1 + arg2);
	}
	function square(arg1)
	{
		console.log(arg1*arg1);
	}
	operations(2,3);
	operations(4, square);

/** 12. express example **/
/** hello world app **/
	var express = require("express");
	var app = express();
	/*  '/' means homepage = ip adress 127.0.0.1:8081 in this case. it can be followed by page name ex: - /index.html   */
	/** app.get(url, callback) and app is your server responding to get request **/
	/** homepage **/
	app.get('/', function(request, response)	
	{
		response.send("hello, world!");
	});
	/** list_user page **/
	app.get('/list_user', function(request, response)
	{
		console.log("request received for list_user");
		response.send("page listing");
	});
	/**abkcd, ab9cd, ... **/
	app.get('/ab*cd', function(request, response)
	{
		console.log("request received for ""ab*cd"" pattern");
		response.send("found pattern matching");
	});
	/**abcd, acd**/
	app.get('/ab?cd', function(request, response)
	{
		console.log("request received for ""ab?cd"" pattern");
		response.send("found pattern matching");
	});
	/**abc, abbc**/
	app.get('/ab+c', function(request, response)
	{
		console.log("request received for ""ab+c"" pattern");
		response.send("found pattern matching");
	});
	/** inception, completion **/
	app.get('/*tion$', function(request, response)
	{
		console.log("request received for ""*tion$"" pattern");
		response.send("found pattern matching");
	});
	/** any path with /user/ in route **/
	app.get('/user/', function(request, response)
	{
		console.log("request received for ""*/user/"" pattern");
		response.send("found in route");
	});
	var server = app.listen(8081, function()
	{
		var host = server.address().address;
		var port = server.address().port;
		console.log(host, port);
	});	
	/** import example for router using router-example.js file **/
	var router = require('./router_example.js');
	/** responds to 127.0.0.1:8081/about **/
	app.use('/about', router);
	/** responds to 127.0.0.1:8081/index **/
	app.use('/index', router);
	
	
	