import { allBookmarks } from "../data/bookmark.js";
import renderBookmark from "./renderBookmark.js";

export default function deleteBookmark(e) {
    const btn = e.target.closest('#delete-btn');
    const index = Number(btn.dataset.index);
    console.log(index);

    if (!btn) {
        return;
    }

    allBookmarks.splice(index, 1);
    localStorage.setItem('allBookmarks', JSON.stringify(allBookmarks))
    renderBookmark();
}