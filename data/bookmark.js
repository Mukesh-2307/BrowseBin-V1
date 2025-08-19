export let allBookmarks = [];

if (localStorage.getItem('allBookmarks')) {
    allBookmarks = JSON.parse(localStorage.getItem('allBookmarks'));
} else {
    localStorage.setItem('allBookmarks', JSON.stringify(allBookmarks));
}