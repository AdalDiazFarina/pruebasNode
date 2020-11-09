const fs = require('fs');
const file = process.argv[2]
const filePath = './items.txt';

fs.readFile(file, (err, data) => {
  if (err) {
    throw new Error("File doesn't exists")
  }
  const words = String(data).split(" ")

  const content = words.join("\n")

  fs.writeFile(filePath, content, err => {
        if (err) {
            console.error('Error', err);
        } else {
            console.log('Fichero guardado correctamente');
        }
    })
});
