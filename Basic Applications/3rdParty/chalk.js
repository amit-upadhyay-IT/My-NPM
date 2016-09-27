// till now we were using console.log() to print something on console and
// things are getting printed in black and white color, so lets not bring
// a little color to our application.
// chalk is a third party library which is available on npm and it allows
// you to write your log in colors.

var chalk = require("chalk");
console.log(chalk.green.bgYellow.bold("Hello"));

// So the String "Hello" will be converted to green color with yellow bg
// bold style and all then the string will get print on console.
