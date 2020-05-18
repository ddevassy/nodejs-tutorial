
const yargs = require('yargs')

notes = require('./notes.js')

// console.log(yargs.argv)
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Node Title',
            demandOption: 'true',
            type: 'string'
        },
        body: {
            describe: 'Node Title',
            demandOption: 'true',
            type: 'string'
        }
    },
    handler: function (argv) {
        // console.log(argv.body)
        // console.log(argv.title)
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'get',
    describe: 'Get the notes',
    handler: function (argv) {
        // console.log(argv.body)
        // console.log(argv.title)
        data = notes.getNotes()
        console.log(data)

    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove the note',
    builder: {
        title : {
            describe: 'Node Title',
            demandOption: 'true',
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNotes(argv.title)
    }
})

yargs.parse()