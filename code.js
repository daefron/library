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
  book.style.height = '60px';
  book.style.display = 'grid';
  book.style['grid-template-columns'] = '3fr 2fr 1fr 1fr'
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

let title = "This is a long book title";
let author = "Short Name";
let pages = "300";
let read = "READ";
addBookToLibrary();
title = "Short Title";
author = "Very long Name Here";
pages = "301";
read = "NOT READ";
addBookToLibrary();
addBookToLibrary();
console.log(myLibrary);
myLibrary.forEach(addToBookshelf);

const cancel = document.getElementById("cancel");
const newBook = document.getElementById("new");
const float = document.querySelector(".float");
cancel.addEventListener('click', () => {
  float.style.visibility = 'hidden';
})
newBook.addEventListener('click', () => {
  float.style.visibility = 'visible';
})