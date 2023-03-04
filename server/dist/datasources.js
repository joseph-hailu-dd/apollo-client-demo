export const books = [
    {
        ibsn: "123",
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        ibsn: "456",
        title: "City of Glass",
        author: "Paul Auster",
    },
];
export class BooksDataSource {
    constructor() {
        // Our example static data set
        this.books = books;
    }
    async getBook({ ibsn }) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const book = books.find((b) => b.ibsn === ibsn);
        // simulate fetching a books
        return {
            code: "200",
            success: true,
            message: "Fetched book!",
            book,
        };
    }
    async listBooks({ limit, offset }) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const slicedbooks = books.slice(offset * limit ?? 0, limit ?? 10);
        // simulate fetching a list of books
        return {
            code: "200",
            success: true,
            message: "Fetched list of books!",
            data: {
                books: slicedbooks,
                limit,
                offset,
                total: books.length,
            },
        };
    }
    // We are using a static data set for this small example, but normally
    // this Mutation would *mutate* our underlying data using a database
    // or a REST API.
    async addBook(bookInput) {
        books.push({ ...bookInput, ibsn: books.length.toString() });
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return {
            code: "200",
            success: true,
            message: "New book added!",
            book: books[books.length - 1],
        };
    }
    // We are using a static data set for this small example, but normally
    // this Mutation would *mutate* our underlying data using a database
    // or a REST API.
    async editBook(bookInput) {
        console.log(bookInput);
        const bookIndex = books.findIndex((b) => b.ibsn === bookInput.ibsn);
        if (bookIndex === -1) {
            return {
                code: "404",
                success: false,
                message: "Book not found!",
            };
        }
        const editedBook = {
            ibsn: books[bookIndex].ibsn,
            title: bookInput.title ?? books[bookIndex].title,
            author: bookInput.author ?? books[bookIndex].author,
        };
        books[bookIndex] = editedBook;
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return {
            code: "200",
            success: true,
            message: "Book edited!",
            book: books[bookIndex],
        };
    }
}
