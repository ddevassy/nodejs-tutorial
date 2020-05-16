var validator = require('validator');
const chalk = require('chalk');
const name = require('./util.js')

console.log('val is ' + name)
const result = validator.isEmail(name);

console.log('email ID Status is ' + result)

const new_result = validator.isBoolean(name)

console.log('Boolean Status is ' + result)

console.log(chalk.green('Hello world!'));
console.log(chalk.red('Hello world!'));