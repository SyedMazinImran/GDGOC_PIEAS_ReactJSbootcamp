import Books from "./books.mjs";
const displayHighlyRated = () => {
    const highRatedBooks = Books.filter(book => book.rating > 4.5);
    highRatedBooks.forEach(book => console.log(book.title));
};
const displayBookDetails = () => {
    Books.forEach(({ title, author, rating, genre }) => {
        console.log(`Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`);
    });
};

const displayFictional = () => {
    const fictionBooks = Books.filter(book => book.genre === "Fiction");
    fictionBooks.forEach(book => console.log(`following are fictional books , ${book.title}`));
};
const displayBookAuthors = () => {
    const authors = Books.map(book => book.author);
    console.log(authors);
};
displayHighlyRated();
displayBookDetails();
displayFictional();
displayBookAuthors();