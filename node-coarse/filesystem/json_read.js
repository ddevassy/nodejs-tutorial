
const book = {
    title: 'Ego is enemy',
    author: 'Ryan Holiday'
}

const json_book = JSON.stringify(book)

console.log(json_book)

const parsed_data = JSON.parse(json_book)

console.log(parsed_data.author)    