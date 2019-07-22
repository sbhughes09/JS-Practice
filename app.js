//Book Class: represents a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI class: handle UI tasks
class UI {
    static displayBooks () {
        const StoredBooks = [
            {
            title: 'War and Peace',
            author: 'Leo Tolstoy',
            isbn: '1400079985'
            }

            {
            title: 'Wuthering Heights',
            author: 'Emily Bronte',
            isbn: '0307455181'
            }
        
        ];
        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }
    
    static addBookToList() {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger delete">X</a></td>
        `;

        list.appendChild(row);
    }
    }

//Store Class: handles storage

//Event: Display Books

//Event: Add a book

//Event: remove a book