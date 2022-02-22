const writeFile = require('./writeFile.js');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'functionName',
      message: 'What is the name of your component?',
      validate: answer => {
        if (answer.length < 1) {
          return 'You must enter at least one character!';
        }
        return true;
      },
    },
    {
      type: 'checkbox',
      name: 'fileTypes',
      message: 'Which file types should be created?',
      choices: ['component', 'spec', 'stories'],
      validate: answer => {
        if (answer.length < 1) {
          return 'You must select at least one type!';
        }
        return true;
      },
    },
  ])
  .then(answers => {
    answers.fileTypes.forEach(type => {
      writeFile(answers.functionName, type);
    });
  });
