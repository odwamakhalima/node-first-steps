const chalk = require('chalk');

const greet = require('./greet');

const styledMessage = chalk.bgYellow.green(greet('Xola'));
console.log(styledMessage)