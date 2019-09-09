const chalk = require('chalk');
var figlet = require('figlet');

const greet = require('./greet');



figlet(greet('xola'), function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    const styledMessage = chalk.bgBlack.yellow(data);
    console.log(styledMessage)
});