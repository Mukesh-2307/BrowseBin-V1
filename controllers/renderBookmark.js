export default function renderBookmark() {
    const bookmarkDataContainer = document.querySelector('.bookmark-data-container');

    bookmarkDataContainer.innerHTML = "";

    const remoteBookmark = JSON.parse(localStorage.getItem('allBookmarks'));

    let html = '';
    (remoteBookmark || []).forEach((bookmark, index) => {
        html += `<div class="grid grid-cols-6 col-span-6 my-4">`;
        html += `<div class="div col-span-2">${bookmark.title}</div>`;
        html += `<div class="div col-span-2">${bookmark.URL}</div>`;
        html += `<div class="div col-span-2 flex gap-4"><button class="btn" id="edit-btn" data-index=${index}>edit</button><button class="btn" id="delete-btn">delete</button></div></div>`;
    })
    bookmarkDataContainer.innerHTML = html;
}