const chalk = require("chalk")
const validator = require("validator")

// console.log(chalk.green.underline.italic.inverse("True"))


const res = validator.isEmail("hk12@hk.co.in");

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
