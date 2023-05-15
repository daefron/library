let myLibrary = [];
const bookshelf = document.querySelector(".bookshelf");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//testing consts
function addBookToLibrary() {
  //get inputs
  return myLibrary.push(new Book(title, author, pages, read));
}


function addToBookshelf(Book) {
  let book = document.createElement('div');
  book.classList.add("book");
  book.style.width = "100%";
  book.style.display = 'flex';
  book.style['justify-content'] = 'space-between';
  bookshelf.appendChild(book);
  title = document.createElement("p");
  title.classList.add("title");
  title.textContent = Book.title;
  book.appendChild(title);
  author = document.createElement("p");
  author.classList.add("author");
  author.textContent = Book.author;
  book.appendChild(author);
  pages = document.createElement("p");
  pages.classList.add("pages");
  pages.textContent = Book.pages;
  book.appendChild(pages);
  read = document.createElement("p");
  read.classList.add("read");
  read.textContent = Book.read;
  book.appendChild(read);
}

let title = "TITLE";
let author = "AUTHOR";
let pages = "300";
let read = "READ";
addBookToLibrary();
title = "TITLE2";
author = "AUTHOR2";
pages = "301";
read = "READ2";
addBookToLibrary();
addBookToLibrary();
console.log(myLibrary);
myLibrary.forEach(addToBookshelf);
