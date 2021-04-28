let books = [
    // {
    //     id: 1,
    //     title: 'Some Book',
    //     author: 'Adam'
    // }
];
let id = 2;

module.exports = {
    getBooks: (req, res) =>{
        res.status(200).send(books);
    },
    addBook: (req, res) =>{
        const {title, author} = req.body;
        (title && author) && (books = [...books, {title, author, id}]);
        id ++;
        res.status(200).send(books);
    },
    deleteBook: (req, res) =>{
        const {id} = req.params
        books = books.filter(book => book.id !== +id)
        res.status(200).send(books);
    },
    editBook: (req, res) => {
        const {title, author} = req.body;
        const {id} = req.params;
        const index = books.findIndex(book=>book.id === +id)
        books[index] = {
            title: title || books[index].title,
            author: author || books[index].author,
            id: +id
        }
        res.status(200).send(books);
    }
}