/**
 * Write a program that uses a single asynchronous filesystem operation
 to read a file and print the number of lines it contains to the
 console (stdout).

 The full path to the file to read will be provided as the first
 command-line argument.

 ----------------------------------------------------------------------
 HINTS:

 The solution to this problem is almost the same as the previous
 problem except you must now do it the Node.js way: asynchronous.

 Instead of `fs.readFileSync()` you will want to use `fs.readFile()`
 and instead of using the return value of this method you need to
 collect the value from a callback function that you pass in as the
 second argument.

 Remember that idiomatic Node.js callbacks normally have the signature:

 function (err, data) { ... }

 so you can check if an error occurred by checking whether the first
 argument truthy. If there is no error, you should have your `Buffer`
 object as the second argument. As with `readFileSync()`, you can
 supply 'utf8' as the second argument and put the callback as the third
 argument and you will get a `String` instead of a `Buffer`.

 Documentation on the `fs` module can be found by pointing your browser
 here:
 /home/anca/lib/node_modules/learnyounode/node_apidoc/fs.html

 ----------------------------------------------------------------------
 */
var fs = require('fs');

if(process.argv.length ==3){
	var filename = process.argv[2];

	fs.readFile(filename, 'utf-8', function(err, data){
		if(err){
			throw err;
		}
		console.log(data.split('\n').length);
	});




}