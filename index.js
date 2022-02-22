const writeFile = require('./writeFile.js');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'functionName',
      message: 'What is the name of your component?',
      // default: '',
    },
    {
      type: 'checkbox',
      name: 'fileTypes',
      message: 'Which file types should be created?',
      choices: ['component', 'spec', 'stories'],
      // default: '',
    },
  ])
  .then(answers => {
    writeFile(answers.functionName);
  });
