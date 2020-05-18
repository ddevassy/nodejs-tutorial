fs = require('fs')

const book = {
    title: 'Ego is enemy',
    author: 'Ryan Holiday'
}

const json_book = JSON.stringify(book)

fs.open('jsonfile.json', 'a+', (err, fd) => {
    if (err) throw err;
    fs.appendFile(fd, json_book, 'utf8', (err) => {
        fs.close(fd, (err) => {
            if (err) throw err;
        });
        if (err) throw err;
    });
});