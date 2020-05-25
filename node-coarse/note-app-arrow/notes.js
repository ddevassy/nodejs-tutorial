const fs = require('fs')

const getNotes = () => {
    return loadNotes()
}

// const filterNotes = function(title, notes) {
//     try {
//         var result = Object.keys(notes).some(v => v == 'Title');
//         return result
//     }
//     catch (e) {
//         console.log('filterNotes Error' + e)
// }
// }


const addNotes = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.Title === title)
    
    if (duplicateNotes.length == 0) {
        notes.push({
            "Title": title,
            "body": body
        }
        )
        console.log(notes)
        saveNotes(notes)
    } else {
        console.log('Duplcate found')
    }

    
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    try {
        fs.writeFileSync('./note.json', dataJson)
        console.log('wrote the Fle with ' + dataJson)
    } catch (e) {
        console.log('saveNotes Error' + e)
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('./note.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
            console.log('loadNotes Error' + e) 
           return []
    }

}

const removeNotes = (title) => {
    try {
        const notes = loadNotes()
        const FoundNotes = notes.filter(function (note) {
            return note.Title !== title
        }
        )
        saveNotes(FoundNotes)

    } catch (e) {
        console.log('removeNotes Error' + e)
        return []
    }
}
module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    removeNotes : removeNotes
}  