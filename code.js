let myLibrary = [];
var num = 0;
const bookshelf = document.querySelector(".bookshelf");
function Book(title, author, pages, read, num) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.num = num;
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;
  if (title == "" || author == "" || pages == "") {
    document.getElementById("validation").style.visibility = "visible";
    return;
  }
  if (read == "on") {
    read = "Read";
    document.getElementById("read").click();
  } else {
    read = "Unread";
  }
  document.querySelector(".float").style.visibility = "hidden";
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  ++num;
  return addToBookshelf(new Book(title, author, pages, read, num));
}

function addToBookshelf(Book) {
  let book = document.createElement("div" + num);
  book.classList.add("book");
  book.style.width = "100%";
  book.style.height = "60px";
  book.style.display = "grid";
  book.style["grid-template-columns"] = "3fr 2fr 1fr 1fr 1fr";
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
  return myLibrary.push(Book);
}

//New Book modal
const cancel = document.getElementById("cancel");
const newBook = document.getElementById("new");
const float = document.querySelector(".float");
cancel.addEventListener("click", () => {
  float.style.visibility = "hidden";
});
newBook.addEventListener("click", () => {
  float.style.visibility = "visible";
});
