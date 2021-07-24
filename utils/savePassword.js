const fs = require('fs');
const path = require('path');
const os = require('os');
const chalk = require('chalk');
const log = console.log;

const savePassword = (password) => {
  fs.open(
    path.join(__dirname, '../', 'passwords.txt'),
    'a',
    0o666, // octal
    (err, id) => {
      if (err) log(chalk.red('Open file error: ', err));
      fs.write(id, password + os.EOL, null, 'utf8', (err) => {
        if (err) log(chalk.red('Write file error: ', err));
        fs.close(id, (err) => {
          if (err) log(chalk.red('Close file error: ', err));
          log(chalk.green('Password saved to passwords.txt'));
        });
      });
    }
  );
};

module.exports = savePassword;
