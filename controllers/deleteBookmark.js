import { allBookmarks } from "../data/bookmark.js";
import renderBookmark from "./renderBookmark.js";

export default function deleteBookmark(index) {
    allBookmarks.splice(index, 1);
    localStorage.setItem('allBookmarks', JSON.stringify(allBookmarks))
    renderBookmark();
}