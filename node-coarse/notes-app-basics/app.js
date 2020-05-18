const fs = require('fs')

// write into a file
fs.writeFileSync('notes.txt', 'this file is created by Node JS by Disen', (err) => {
    if (err) throw err;
    console.log('The "WRITE DATA" to file!');
});

// fs.appendFileSync('notes.txt', 'Appending new data\n')

fs.appendFile('notes.txt', 'Appending new data', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
});