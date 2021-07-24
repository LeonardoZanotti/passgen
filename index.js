#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');
const log = console.log;

program
  .version('1.0.0')
  .description('Simple password generator in NodeJS')
  .option('-l, --length <number>', 'length of the password', '8')
  .option('-s, --save', 'save password to passwords.txt', false)
  .option('-nn, --no-numbers', 'use numbers in the password')
  .option('-ns, --no-symbols', 'use symbols in the password')
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Generate the password
const generatedPassword = createPassword(length, numbers, symbols);
log(chalk.cyan('Generated password: ') + chalk.bold(generatedPassword));

// Copy to clipboard
clipboardy.writeSync(generatedPassword);
log(chalk.yellow('Password copied to clipboard'));

// Save to passwords.txt
if (save) {
  savePassword(generatedPassword);
}
