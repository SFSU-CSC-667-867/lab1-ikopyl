const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'hello.txt'), { encoding: 'utf8' }, (err, txt) => {
  // this triggers when the read is complete
  if (err) return console.log(err);
  console.log(txt);
});
// This triggers directly after asking to read the file
console.log('Just asked for file');