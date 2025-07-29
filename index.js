let allBookmarks = []

if (localStorage.getItem('allBookmarks')) {
  allBookmarks = JSON.parse(localStorage.getItem('allBookmarks'));
} else {
  localStorage.setItem('allBookmarks', JSON.stringify(allBookmarks));
}

function addBookmark() {
  const bookmarkTitle = document.getElementById('title-input');
  const bookmarkURL = document.getElementById('url-input');

  const newBookmark = { title: bookmarkTitle.value, URL: bookmarkURL.value };

  allBookmarks.push(newBookmark);
  localStorage.setItem('allBookmarks', JSON.stringify(allBookmarks))

  bookmarkTitle.value = "";
  bookmarkURL.value = "";
  renderBookmark();
}

function deleteBookmark(index) {
  allBookmarks.splice(index, 1);
  localStorage.setItem('allBookmarks', JSON.stringify(allBookmarks))
  renderBookmark();
}

function editBookmark(index) {
  document.querySelector('.update-forum').classList.remove('hidden');

  const updateTitle = document.getElementById('update-title-input');
  const updateURL = document.getElementById('update-url-input');

  // Populate the input fields with current bookmark data
  updateTitle.value = allBookmarks[index].title;
  updateURL.value = allBookmarks[index].URL;

  // Store the index for the update function
  updateTitle.dataset.editIndex = index;
}

function updateBookmark() {
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
  renderBookmark();
  document.querySelector('.update-forum').classList.add('hidden');
}

function renderBookmark() {
  const bookmarkDataContainer = document.querySelector('.bookmark-data-container');

  const remoteBookmark = JSON.parse(localStorage.getItem('allBookmarks'));

  let html = '';
  remoteBookmark.forEach((bookmark, index) => {
    html += `<div class="grid grid-cols-6 col-span-6 my-4">`;
    html += `<div class="div col-span-2">${bookmark.title}</div>`;
    html += `<div class="div col-span-2">${bookmark.URL}</div>`;
    html += `<div class="div col-span-2 flex gap-4"><button class="btn" onClick="editBookmark(${index})">edit</button><button class="btn" onClick="deleteBookmark(${index})">delete</button></div></div>`;
  })
  bookmarkDataContainer.innerHTML = html;
}

renderBookmark();