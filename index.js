import renderBookmark from "./controllers/renderBookmark.js";
import addBookmark from "./controllers/addBookmark.js";
import { editBookmark, updateBookmark } from "./controllers/updateBookmark.js";
import deleteBookmark from "./controllers/deleteBookmark.js";

// Wire up the bookmark buttons
const addButton = document.getElementById('add-btn');
if (addButton) {
  addButton.addEventListener('click', addBookmark);
}

const updateButton = document.querySelector('#update-btn')
if (updateButton) {
  updateButton.addEventListener('click', updateBookmark);
}

renderBookmark();

const editButton = document.querySelector('#edit-btn')
if (editButton) {
  editButton.addEventListener('click', editBookmark);
}

const deleteButton = document.querySelector('#delete-btn')
if (deleteButton) {
  deleteButton.addEventListener('click', deleteBookmark);
}

