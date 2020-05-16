// const argv = require('yargs').argv
const yargs = require('yargs')

// if (argv.ships > 3 && argv.distance < 53.5) {
//     console.log('Plunder more riffiwobbles!')
// } else {
//     console.log('Retreat from the xupptumblers!')
// }

console.log(yargs.argv)
yargs.command({
    command: 'list',
    describe: 'List your params',
    handler: function () {
        console.log('yargs List of commands')
    }
})