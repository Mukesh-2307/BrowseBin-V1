import { allBookmarks } from "../data/bookmark.js";
import renderBookmark from "./renderBookmark.js";

export function editBookmark(index) {

    document.querySelector('.update-forum').classList.remove('hide-update-forum')
    document.querySelector('.update-forum').classList.add('open-update-forum');

    const updateTitle = document.getElementById('update-title-input');
    const updateURL = document.getElementById('update-url-input');

    // Populate the input fields with current bookmark data
    updateTitle.value = allBookmarks[index].title;
    updateURL.value = allBookmarks[index].URL;

    // Store the index for the update function
    updateTitle.dataset.editIndex = index;
}

export function updateBookmark() {
    const updateTitle = document.getElementById('update-title-input');
    const updateURL = document.getElementById('update-url-input');

    // Get the index of the bookmark being edited
    const editIndex = parseInt(updateTitle.dataset.editIndex);

    // Update the bookmark with new values
    allBookmarks[editIndex].title = updateTitle.value;
    allBookmarks[editIndex].URL = updateURL.value;

    // Clear the input fields
    updateTitle.value = '';
    updateURL.value = '';

    localStorage.setItem('allBookmarks', JSON.stringify(allBookmarks));
    document.querySelector('.update-forum').classList.add('hide-update-forum');
    renderBookmark();
}