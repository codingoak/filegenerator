const fs = require('fs'); // import fs from 'fs'

module.exports = function writeFile(name) {
  try {
    // write file with given name and pattern
    fs.writeFileSync(
      `./${name}.js`,
      `function ${name}() {
  
}`
    );
  } catch (error) {
    console.error(error.message);
  }
};
