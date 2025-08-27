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

function addGlobalEventListener(type, selector, callback, parent = document){
  parent.addEventListener(type,e =>{
    if(e.target.matches(selector)){
      callback(e);
    }
  })
}

const bookmarksContainerElement = document.querySelector('.bookmark-data-container');

addGlobalEventListener('click', '#edit-btn', editBookmark, bookmarksContainerElement)

addGlobalEventListener('click', '#delete-btn', deleteBookmark, bookmarksContainerElement)

