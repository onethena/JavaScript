/** Code studied on tutorialspoint.com **/

/** 1. Log string **/
	console.log("Hello, World");

/** 2. Local host - Request-Response **/
	var http = require("http");
	http.createServer(function(request,response)
	{
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Hello, World');
	}).listen(8081);

	console.log('Http Server running');

/** 3. Synchronous call - using API File System(fs) **/
/** Need to install fs locally(in this module), before using this **/
/** Browse to the foler containing this file in command prompt and run - npm install fs (installed locally by default) **/
/** Check using - npm ls **/
	var fs = require("fs");
	var data = fs.readFileSync("input.txt");
	console.log(data.toString());
	console.log("Program Ended");

/** 4. Asynchronous call - using API File System(fs) **/
	var fs = require("fs");
	var data = fs.readFile("input.txt", function(err, data)
	{
		if(err)
			return console.error(err);
		console.log(data.toString());	
	});
	console.log("Program Ended");

/** 5. Using Node.js Event loops **/
/** Need to install events locally(in this module), before using this **/
/** Browse to the foler containing this file in command prompt and run - npm install events (installed locally by default) **/
/** Check using - npm ls **/
	var events = require("events");
	/* Create an event emitter object */
	var eventEmitter = new events.EventEmitter();
	/* Create a handler */
	var connectHandler = function connected()
	{
		console.log("Connection Succesful");
		eventEmitter.emit('data-received');
	}
	/* Bind connection event from Node.js with this handler */
	eventEmitter.on('connection', connectHandler);
	/* Bind data-received event from Node.js to a funciton */
	eventEmitter.on('data-received', function()
	{
		console.log("Data received");
	});
	/* Fire connection event */
	eventEmitter.emit('connection');

/** 6. Frequently used emitter events **/
	var events = require("events");
	var emitter = new events.EventEmitter();
	var listener1 = function listener1()
	{
		console.log("Listner 1");
	}
	var listener2 = function listener2()
	{
		console.log("Listener 2");
	}
	emitter.addListener('connection', listener1);
	emitter.addListener('connection', listener2);
	/* Note that listener count is being accessed like a static function and not using emitter object */
	var count = events.EventEmitter.listenerCount(emitter, 'connection');
	console.log(count + " Listener(s) for connection event");
	emitter.emit('connection');
	emitter.removeListener('connection', listener1);
	count = events.EventEmitter.listenerCount(emitter, 'connection');
	console.log(count + " Listener(s) for connection event");
	emitter.emit('connection');
	console.log("Program Ended");

/** 7. Global class Buffer **/
	var buff1 = new Buffer(256); /*Initialising for array size = 256 */
	var buff2 = new Buffer("Initialising buffer", "utf-8"); /* Initialising with string and encoding type */
	console.log(buff2.toString());
	var buff3 = new Buffer(26);
	for(var i = 0 ; i < 26; i++)
		buff3[i] = i + 97;
	console.log(buff3);
	var json = buff3.toJSON();
	console.log(json);
	
/** 8. STREAMS **/
/* Read stream **/
	var fs = require('fs');
	var data = '';
	var streamReader = fs.createReadStream('input_stream.txt');
	streamReader.setEncoding('UTF-8');
	// streamReader is an EventEmitter object and it has 4 events - data, end, error and finish
	// Set callbacks for these events	
	streamReader.on('data', function(iData)
	{
		data += iData;
	});
	streamReader.on('end', function()
	{
		console.log(data);
	});
	streamReader.on('error', function(error)
	{
		console.log(error.stack);
	});
	console.log("Program ended");
/** Write stream **/
	var fs = require('fs');
	var data = "This is input data to be written on a specified output file";
	var streamWriter = fs.createWriteStream('output_stream.txt');
	streamWriter.write(data, 'UTF-8');
	streamWriter.end();
	streamWriter.on('finish', function()
	{
		console.log("Finished writing file");
	}
	);
	streamWriter.on('error', function(error)
	{
		console.log(error.stack);
	}
	)
	console.log("Program ended");
/** Pipe Streams - pass data from onw stream to another**/
	var fs = require('fs');
	var streamReader = fs.createReadStream('input_stream.txt')
	var streamWriter = fs.createWriteStream('piped_output_stream.txt');
	streamReader.pipe(streamWriter);
	streamWriter.on('finish', function()
	{
		console.log("Finished writing file");
	});
	console.log("Program Ended");
/** Compress and Decompress a file **/
/** Node.js now has built-in support for zlib, no need to install **/
	var fs = require('fs');
	var zlib = require('zlib');
	//Zip
	fs.createReadStream('input_stream.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input_stream.txt.zip')); //chaining
	console.log("File compressed");
	//Unzip
    fs.createReadStream('input_stream.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('unzipped_input_stream.txt'));
	console.log("File de-compressed");
	
/** FILE SYSTEM **/
/** Open File **/
	var fs = require('fs');
	fs.open('input.txt', 'r+', function(error, fd) // r+ is read/write flag
	{
		if(error)
			return console.log(error.stack);
		console.log(fd);
		console.log("File opened successfully!");			
	});
/** Get file information */
/** fs.stat is a function used to retrieve file info. It takes two parameters - 1. Filename/path 2. Callback
Callback function returns 1. error 2. stats - file information object **/
	var fs = require('fs');
	fs.stat('input_stream.txt', function(error, stats)
	{
		if(error)
			return console.log(error.stack);
		console.log(stats);
		console.log("Is File? ", stats.isFile());
		console.log("Is Directory?", stats.isDirectory());
	}
	);
/** Write data to file **/
	var fs = require('fs');
	var data = "This is an example file for fs.writeFile function";
	fs.writeFile('output_fswrite.txt', data, "utf-8", function(error)
	{
		if(error)
			return console.log(error.stack);
		console.log("Finished writing to file");
	}
	);
/** Read and store in buffer **/
	var fs = require('fs');
	var buff = new Buffer(256);
	fs.open("input_stream.txt", "r+", function(error, fd)
	{
		if(error)
			return console.log(error.stack);
		console.log("File opened successfully, reading file data ...");
		fs.read(fd, buff, 0, buff.length, 0, function(error, bytes)
		{
			if(error)
				return console.log(error.stack)
			if(bytes > 0)
			{
				console.log(buff.slice(0, bytes).toString());
				console.log(buff.slice(0, bytes));
			}
			else
				console.log("File empty!")
		});
	});
/** Make a directory and read files in directory **/
	var fs = require('fs');
	console.log("Creating a directory ...");
	fs.mkdir('./Created_Directory', function(error)
	{
		if(error)
			return console.log(error.stack);
		console.log("Directory created successfully");
	}
	);
	fs.readdir("./Created_Directory", function(error, files)
	{
		if(error)
			return console.log(error.stack);
		console.log("Listing files ...");
		files.forEach(function(file)
		{
			console.log(file);
		});		
	});
	fs.mkdir('./To_Delele', function(error)
	{
		if(error)
			return console.log(error.stack);
		console.log("Directory To_Delete created successfully");
	}
	);
	fs.rmdir('./To_Delele', function(error)
	{
		if(error)
			return console.log(error.stack);
		console.log("Directory To_Delete deleted successfully");
	}
	);
	
/** GLOBAL OBJECTS **/
/** Global objects can be modules, functions, objects, etc. **/
/** Global object - console **/
	console.log(__filename);  // Logs path of the current file being executed
	console.log(__dirname); //Logs path of the directory in which file being executed is present
	function print(){
		console.log("Test global function setTimeout");
	};
	var t = setTimeout(print, 2000);
	/** In this case nothing will be printed. It stops the previously created timer in setTimeout and hence nothing is executed **/
	//clearTimeout(t); 
	/** Console methods **/
	var obj = 
	{
		key : "value"
	}
	console.time("Logging started") //Starts a time with "Logging started" as l
	console.log("Logged using console");
	console.warn("This is a warning");
	console.error("This is an error");
	console.dir(obj);	//prints the object details
	console.timeEnd("Logging started");
	console.assert(true, "This is not printed as first argument returns true");
	console.assert(false, "This is thrown as first argument returns false");

/** Global Object - Process : an instance of EventEmitter **/
	process.on('exit', function(code)
	{
		The following code will never execute - as time starts after exit
		setTimeout( function(){console.log("This is never printed")}, 0);
		
		console.log(process.execPath);  // Node exe path
		console.log(process.platform);	// win32
		console.log(process.version); 	// Node version
		console.log(process.arch); 		// architecture
		console.log(process.versions);	// versions of Node.js and its dependencies
		console.log(process.env);		// environment varaibles
		console.log(process.config);
		console.log("Program ended with code - ", code);
	});
	process.stdout.write("Use stdout to write to console\n");
	/** Prints all the command line arguments 
	    First argument is always - node exe path
		Second arfument - main.js path
	**/
	/** "function(val, index){"  can also be written as - "(val, index) => {} **/
	process.argv.forEach( function(val, index)
	{
		console.log(`${index}: ${val}`);
	});
	
	process.stdin.setEncoding('utf-8');
	process.stdin.on('data', function()
	{
		var input = process.stdin.read();
		if(input !== null)
		{
			process.stdout.write("Input : ", input);
		}
	}
	);
	/** SIGINT is used instead of end as it recognises Ctrl + C event **/
	process.on('SIGINT', function() 
	{
		process.stdout.write("Input ended \n ");
		process.exit(0);	// exit with code 0
	});
	console.log(process.memoryUsage());

/** REPL  example **/
/** Note : Run - npm install repl**/
	const repl = require('repl');	//const should be used if the variable does not change in the lifetime of program
	const r = repl.start({prompt: 'Type here > ', eval: myEval, writer: myWriter});
	function myEval(cmd, context, filename, callback)	//cmd is th input typed
	{
	  callback(null, cmd);	//empty callback
	}
	function myWriter(output) 
	{
	  return output.toUpperCase();	//output = cmd
	}

/** "let" keyword example in JavaScript - used to define private scope **/
	"use strict";		// Required for using let keyword
	var classA;
/** The curly braces have been included to restrict the scope of privateObject **/
	{
		let privateScope = {};	// Empty privateScope object
		classA = function classA(iData)				// Constructor for classA, var becomes a class here
		{
			this.publicData = iData;
			privateScope.data = "Private Data";
		};
		classA.prototype.showPublicData = function()
		{
			console.log(this.publicData);
		}
		classA.prototype.showPrivateData = function()
		{
			console.log(this.privateScope.data);
		}
	}
	var object = new classA("data"); 	// Do not miss 'new' keyword
	object.showPublicData();
	object.showPrivateData();		// This line gives error
	
/** Real time use of "let" for module CRYPTO" **/
	"use strict";
	{
		let myCrypto;
		try
		{
			myCrypto = require("crypto");
			console.log("Crypto support available");
		}
		catch(e)
		{
			console.log("Crypto support is disbaled!", e);
		}
		const passwordKey = "abcdef123"
		const encryptionAlgo = 'sha256';
		var myPassword = 'This is my password';
		var hmac = myCrypto.createHmac('sha256', passwordKey);
		console.dir(hmac);
		var hash = hmac.update(myPassword);
		hash = hash.digest('hex');
		console.log(hash);
	}
		
/** 10. UTILITY MODULES **/
/** 1. os (Operating System) module **/
	var os = require('os');
	console.log(os.endianness());	// Endianness - order used to interpret range of bytes
	console.log(os.type());
	console.log(os.platform());
	console.log(os.totalmem());
	console.log(os.freemem());
/** 2. path **/
	var path = require("path");
	var filepath1 = "Folder1//Folder2/\Folder3/fileName.ext"
	var filepath2 = "RootDirectory/Home";
	console.log(path.normalize(filepath1));			// Removes extra slashes, wrong slashes
	console.log(path.join(filepath2,filepath1));	// Normalizes and joins
	console.log(path.resolve('main.js'));
	console.log(path.extname(filepath1));
/** 3. net **/
/** Local server example - server.js**/
	var net = require('net');
	var server = net.createServer(function(connection)
	{
		console.log("Client connected"); 			// Printed when client connects
		connection.on('end', function()
		{
			console.log("Client disconnected");		// Printed on client.end();
		});
	connection.write("Server running...");
	connection.pipe(connection); 	// echo server - writes what it reads, returns what it receives
	});
	server.listen('8080', function()
	{
		console.log("Server is listening to port 8080...")	// Printed on running server.js
	});
/** server.js ends **/
/** Local client example - client.js **/
	var net = require('net');
	var client = net.connect({port: 8080}, function()
	{
		console.log("Connected to server...");
	});
	client.on('data', function(data)		// data = "Server is running..."
	{
		console.log(data.toString());
		client.end();
	});
	client.on('end', function()
	{
		console.log("Client diconnected...");
	});
/** client.js ends here **/
/** 4. dns **/
	var dns = require('dns');
	dns.lookup("www.google.com", function onLookup(error, address, family)
	{
		console.log(address);		//IPv4 address for google.com
		dns.reverse(address, function(error, hostnames)
		{
			if(error)
			{
				console.log(error.stack);
				return;
			}
			console.dir(hostnames);
			console.log(JSON.stringify(hostnames));			//hostnames is a JSON array
		});
	});
/** 5. domain **/
	var domain = require('domain');
	var events = require('events');
	/* Create an emitter */
	var emitter1 = new events.EventEmitter();
	/* Create a domain */
	var domain1 = domain.create();
	/* Add error listener to domain1 */
	domain1.on('error', function(error)
	{
		console.log("This was handled by domain1 on emitter1 ("+error.message+")");
	});
	/** Explicit binding **/
	domain1.add(emitter1);
	/* Add a listener to the 'error' event for emitter1 */
	emitter1.on('error', function(error)
	{
		console.log("This was handled by event listener on emitter1 ("+error.message+")");
		// Notice how varaible is merged in string by enclosing between "+...+"	
	});
	/* Now send error with a message */
	emitter1.emit('error', new Error("Handled by listener on emitter1"));
	/* Remove all listeners for error on emitter1 */
	emitter1.removeAllListeners('error');
	/* Now send event again, this will be handled by domain */
	emitter1.emit('error', new Error("Handled by domain1"));
	
	/* Create new domain */
	var domain2 = domain.create();
	/* Handle 'error' event */
	domain2.on('error', function(error)
	{
		console.log("This was handled by domain2 on emitter2 ("+error.message+")");
	});
	/** Implicit Binding **/
	domain2.run(function()
	{
		var emitter2 = new events.EventEmitter();
		emitter2.emit('error', new Error("Handled by domain2"));
	});
	/* Exception case in explicit binding */
	domain1.remove(emitter1);
	emitter1.emit('error', new Error("This is unhadled exception"));	// Program will crash here

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
	}).listen(8081);	// Basically  any request to the localhost IP - 127.0.0.1 will now receive response from this file
	console.log("Server is running on 127.0.0.1:8081...")
/** web_server.js ends here **/

/** Client for web server example **/
	var http = require('http');
	var options =
	{
		localhost: 'localhost',
		port: '8081',
		path: '/index.html'	
	}
	var responseCallback = function(response)
	{
		var body = "";
		response.on('data', function(data)
		{
			console.log("Receiving data");
			body += data;
		});
		response.on('end', function()
		{
			console.log(body);
		});
	}
	var request = http.request(options, responseCallback);
	request.end();
/** web_server_client.js ends here **/

<!-- HTML Sample file for Web Server example -->
<html>
	<head>
		<title>
			Sample HTML Page
		</title>
	</head>
	<body>
		Hello, World!
	</body>
</html>
<!-- index.html file ends here -->
	
/** Passing function as an input parameter **/
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

/** 12. Express example **/
/** Hello World app **/
	var express = require("express");
	var app = express();
	/*  '/' means homepage = IP adress 127.0.0.1:8081 in this case. It can be followed by page name ex: - /index.html   */
	/** app.get(url, callback) and app is your server responding to get request **/
	app.get('/', function(request, response)	
	{
		response.send("Hello, World!");
	});
	var server = app.listen(8081, function()
	{
		var host = server.address().address;
		var port = server.address().port;
		console.log(host, port);
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	







