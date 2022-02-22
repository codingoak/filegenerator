const fs = require('fs');
const templates = require('./templates');

function writeFile(name, fileType) {
  try {
    const fileName =
      fileType === 'component' ? `./${name}.js` : `./${name}.${fileType}.js`;

    const fileString = templates[fileType](name); // template['component']

    // write file with given name and pattern
    fs.writeFileSync(fileName, fileString);
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = writeFile;
