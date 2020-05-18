const fs = require('fs')

fs.open('message.txt', 'a+', (err, fd) => {
    if (err) throw err;
    fs.appendFile(fd, 'New data to append', 'utf8', (err) => {
        fs.close(fd, (err) => {
            if (err) throw err;
        });
        if (err) throw err;
    });
});