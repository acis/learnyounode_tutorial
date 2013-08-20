/**
 * Write a program that accepts one or more numbers as command-line
 arguments and prints the sum of those numbers to the console (stdout).

 ----------------------------------------------------------------------
 HINTS:

 You can access command-line arguments via the in-built `process`
 object. The `process` object has an `argv` property which is an array
 containing the complete command-line. i.e. `process.argv`.

 However, the first element of this array is always 'node' and
 the second element is always the path to your program.js file. So you
 will need to start at the 3rd element (index 2) when looking for
 additional command-line arguments.

 As an experiment. Try making a program that simply contains:
 console.log(process.argv)
 and then run it with `node myprogram.js` and any number of additional
 arguments.

 Also be aware that all elements of `process.argv` are strings and you
 may need to coerce them into numbers. You can do this by prefixing the
 property with `+` or passing it to `Number()`. e.g. `+process.argv[2]`
 or `Number(process.argv[2])`.

 ----------------------------------------------------------------------
 */

var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
	sum += Number(process.argv[i]);
}

console.log(sum);