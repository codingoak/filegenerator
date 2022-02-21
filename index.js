const writeFile = require('./writeFile.js');

const readline = require('readline'); // import * as readline from 'node:readline';
const { stdin: input, stdout: output } = require('process'); // Destructering to input and output

const rl = readline.createInterface({ input, output }); // Without the destructering above its easier to read

rl.question('What is the name of your function? ', answer => {
  // Call writeFile function to create a new file with answer
  writeFile(answer);
  console.log(answer);

  rl.close(); // Close the readline
});
