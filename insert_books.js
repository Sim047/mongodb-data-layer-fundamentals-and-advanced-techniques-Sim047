// insert_books.js

db = db.getSiblingDB("plp_bookstore");

db.books.insertMany([
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    published_year: 2019,
    price: 15.99,
    in_stock: true,
    pages: 336,
    publisher: "Celadon Books"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 11.98,
    in_stock: true,
    pages: 320,
    publisher: "Penguin Random House"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 7.19,
    in_stock: false,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 6.89,
    in_stock: true,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    published_year: 2018,
    price: 13.99,
    in_stock: true,
    pages: 352,
    publisher: "Random House"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 8.99,
    in_stock: false,
    pages: 310,
    publisher: "George Allen & Unwin"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    published_year: 2018,
    price: 14.99,
    in_stock: true,
    pages: 448,
    publisher: "Crown Publishing Group"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    published_year: 1925,
    price: 10.29,
    in_stock: false,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    published_year: 1988,
    price: 9.49,
    in_stock: true,
    pages: 208,
    publisher: "HarperTorch"
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    published_year: 1965,
    price: 12.50,
    in_stock: true,
    pages: 412,
    publisher: "Chilton Books"
  }
]);
