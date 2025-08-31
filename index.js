import renderBookmark from "./controllers/renderBookmark.js";
import addBookmark from "./controllers/addBookmark.js";
import { editBookmark, updateBookmark } from "./controllers/updateBookmark.js";
import deleteBookmark from "./controllers/deleteBookmark.js";
import { addGlobalEventListener } from "./utils/addGlobalEventListener.js";
import { toggleFav } from "./utils/togglefav.js";
addGlobalEventListener

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

const bookmarksContainerElement = document.querySelector('.bookmark-data-container');

addGlobalEventListener('click', '#edit-btn', editBookmark, bookmarksContainerElement)

addGlobalEventListener('click', '#delete-btn', deleteBookmark, bookmarksContainerElement)

addGlobalEventListener('click', '.fav-btn', toggleFav, bookmarksContainerElement)

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addBookmark();
  }
})