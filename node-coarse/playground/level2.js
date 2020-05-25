// Normal Funtion
// const event = {
//     name:'birthday party',
//     printGuestList: function () {
//         console.log('Here is the list for' + this.name)
//     }
// }

// Arrow Function
// const event = {
//     name: 'birthday party',
//     // Arrow Function doesnt have access to method properties that uses this
//     printGuestList: () => {
//         // Undefined
//         console.log('Here is the list for ' + this.name)
//     }
// }

const event = {
    name: 'birthday party',
    guestlist: ['Andrew', 'Jen', 'Disen'],
    // ES6 method definition Syntax
    printGuestList() {
        console.log('Here is the list for ' + this.name)

        // Switching funtion to Arrow Function
        this.guestlist.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        }
        ) 
    }
}

event.printGuestList()