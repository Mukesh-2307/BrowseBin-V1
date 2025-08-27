import renderBookmark from "../controllers/renderBookmark.js";
import { allBookmarks } from "../data/bookmark.js";

export function toggleFav(e) {
    const btn = e.target.closest('.fav-btn');
    const index = Number(btn.dataset.index);
    console.log(index);

    if (!btn) {
        return;
    }

    if (allBookmarks[index].isFav) {
        // console.log('inside the if statement')
        allBookmarks[index].isFav = false;
        localStorage.setItem('allBookmarks', JSON.stringify(allBookmarks))
    } else {
        // console.log('inside the else statement')
        allBookmarks[index].isFav = true;
        localStorage.setItem('allBookmarks', JSON.stringify(allBookmarks))
    }

    renderBookmark();
}