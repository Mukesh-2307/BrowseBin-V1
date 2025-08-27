export default function renderBookmark() {
    const bookmarkDataContainer = document.querySelector('.bookmark-data-container');

    bookmarkDataContainer.innerHTML = "";

    const remoteBookmark = JSON.parse(localStorage.getItem('allBookmarks'));

    let html = '';
    (remoteBookmark || []).forEach((bookmark, index) => {
        html += `<div class="grid grid-cols-6 col-span-6 my-4">`;
        html += `<div class="div col-span-2">${bookmark.title}</div>`;
        html += `<div class="div col-span-2"><a href="${bookmark.URL}" target="_blank">${bookmark.URL}</a></div>`;
        html += `<div class="div flex gap-4"><button class="btn" id="edit-btn" data-index=${index}>edit</button><button class="btn" id="delete-btn">delete</button></div>`;
        html += `<div class="fav-btn"><i class="${bookmark.isFav ? "fa-solid" : "fa-regular"} fa-star fav-btn" data-index=${index}></i></div></div>`
    })
    bookmarkDataContainer.innerHTML = html;
}