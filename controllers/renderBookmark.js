import deleteBookmark from "./deleteBookmark.js";
import { editBookmark } from "./updateBookmark.js";

export default function renderBookmark() {
    const bookmarkDataContainer = document.querySelector('.bookmark-data-container');

    const remoteBookmark = JSON.parse(localStorage.getItem('allBookmarks'));

    let html = '';
    (remoteBookmark || []).forEach((bookmark, index) => {
        html += `<div class="grid grid-cols-6 col-span-6 my-4">`;
        html += `<div class="div col-span-2">${bookmark.title}</div>`;
        html += `<div class="div col-span-2">${bookmark.URL}</div>`;
        html += `<div class="div col-span-2 flex gap-4"><button class="btn" onClick="editBookmark(${index})">edit</button><button class="btn" onClick="deleteBookmark(${index})">delete</button></div></div>`;
    })
    bookmarkDataContainer.innerHTML = html;
}