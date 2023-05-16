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
  let read = document.getElementById("read").checked;
  if (title == "" || author == "" || pages == "") {
    document.getElementById("validation").style.visibility = "visible";
    return;
  }
  else {
    document.getElementById("validation").style.visibility = "hidden";
  }
  if (read == true) {
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
  let book = document.createElement("div");
  let del = num;
  book.id = "n" + num;
  book.classList.add("book");
  book.style.width = "100%";
  book.style.height = "60px";
  book.style.display = "grid";
  book.style["grid-template-columns"] = "3fr 2fr 80px 60px 20px 100px";
  book.style.gap = "10px";
  book.style["align-items"] = "center";
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
  read.id = "r" + num;
  read.textContent = Book.read;
  book.appendChild(read);

  check = document.createElement("input");
  check.classList.add("check");
  check.id = "c" + num;
  check.setAttribute("type", "checkbox");
  check.setAttribute("onclick", "checkedRead('r' + this.id.slice(1), this.id);");
  if (read.textContent == "Read") {
    check.setAttribute("checked", "true");
  }
  checkedI = check.id;
  book.appendChild(check);

  del = document.createElement("button");
  del.classList.add("delete");
  del.id = num;
  del.textContent = "Delete";
  del.setAttribute("onclick", "delBook('n' + this.id);");
  book.appendChild(del);
  
  return myLibrary.push(Book);
}

function checkedRead(check, checkedI) {
  if (document.getElementById(checkedI).checked == false) {
  document.getElementById(check).textContent = "Unread";
  }
  else {
  document.getElementById(check).textContent = "Read";
  }
}

function delBook(num1) {
  document.getElementById(num1).remove();
}
//New Book modal
const cancel = document.getElementById("cancel");
const newBook = document.getElementById("new");
const float = document.querySelector(".float");
const validation = document.getElementById('validation');
cancel.addEventListener("click", () => {
  float.style.visibility = "hidden";
  validation.style.visibility = "hidden";
});
newBook.addEventListener("click", () => {
  float.style.visibility = "visible";
});
