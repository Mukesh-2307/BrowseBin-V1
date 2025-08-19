import renderBookmark from "./renderBookmark.js";
import { allBookmarks } from "../data/bookmark.js";

export default function addBookmark() {
    console.log('inside add bookmark func')

    const bookmarkTitle = document.getElementById('title-input');
    const bookmarkURL = document.getElementById('url-input');

    const newBookmark = { title: bookmarkTitle.value, URL: bookmarkURL.value };

    allBookmarks.push(newBookmark);
    localStorage.setItem('allBookmarks', JSON.stringify(allBookmarks))

    bookmarkTitle.value = "";
    bookmarkURL.value = "";
    renderBookmark();
}