const fs = require('fs'); // import fs from 'fs'

module.exports = function writeFile(name, fileType) {
  try {
    const fileName =
      fileType === 'component' ? `./${name}.js` : `./${name}.${fileType}.js`;

    // write file with given name and pattern
    fs.writeFileSync(
      fileName,
      `function ${name}() {
  
}`
    );
  } catch (error) {
    console.error(error.message);
  }
};
