import { allBookmarks } from "./data/bookmark.js";
import renderBookmark from "./controllers/renderBookmark.js";
import addBookmark from "./controllers/addBookmark.js";
import { editBookmark, updateBookmark } from "./controllers/updateBookmark.js";
import deleteBookmark from "./controllers/deleteBookmark.js";

// Expose functions used by inline onclick handlers
window.editBookmark = editBookmark;
window.deleteBookmark = deleteBookmark;

// Wire up the Add bookmark button
const addButton = document.getElementById('add-btn');
if (addButton) {
  addButton.addEventListener('click', addBookmark);
}

const updateButton = document.querySelector('#update-btn')
if (updateButton) {
  updateButton.addEventListener('click', updateBookmark);
}

renderBookmark();
