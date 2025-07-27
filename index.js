// master bookmark array that stores objects
const masterBookmark = [
  {
    categoryName: "daily",
    subBookmarks: [],
  },
  {
    categoryName: "learning",
    subBookmarks: [],
  },
  {
    categoryName: "music",
    subBookmarks: [],
  },
  {
    categoryName: "gaming",
    subBookmarks: [],
  },
];

// uploading the masterbookmark array only if it is not present in the local storage at all
if (!localStorage.getItem("masterBookmark")) {
  localStorage.setItem("masterBookmark", JSON.stringify(masterBookmark));
}

// accessing the input elements
const bookmarkTitleElement = document.getElementById("bookmark-title");
const bookmarkURLElement = document.getElementById("bookmark-url");
const bookmarkCategoryElement = document.getElementById("bookmark-category");


let bookmarkTitle,
  bookmarkURL,
  bookmarkCategory;

// handling input changes
const handleTitleChange = (e) => {
  e.preventDefault();
  bookmarkTitle = e.target.value;
};

bookmarkTitleElement.addEventListener("change", handleTitleChange);

const handleUrlChange = (e) => {
  e.preventDefault();
  bookmarkURL = e.target.value;
};

bookmarkURLElement.addEventListener("change", handleUrlChange);

const handleCategoryChange = (e) => {
  e.preventDefault();
  bookmarkCategory = e.target.value;
  console.log(bookmarkCategory);
};

bookmarkCategoryElement.addEventListener("change", handleCategoryChange);

// accessing the button elements
const addBtn = document.getElementById("add-btn");
const closeBtn = document.getElementById("close-btn");
const inputFormWrapper = document.getElementById("input-form-wrapper");

// handling form open and close
const setCardVisible = () => {
  inputFormWrapper.classList.remove("hidden");
};
const setCardHidden = () => {
  inputFormWrapper.classList.add("hidden");
};

addBtn.addEventListener("click", setCardVisible);
closeBtn.addEventListener("click", setCardHidden);

// saving input values to the array

// accessing the save button
const saveBtnElement = document.getElementById("save-btn");

// handling the save button
const handleSave = () => {
  const masterBookmark = JSON.parse(localStorage.getItem("masterBookmark"));
  console.log(masterBookmark);
  const currentCategory = masterBookmark.find((category) => {
    return category.categoryName === bookmarkCategory;
  });
  console.log(currentCategory);
  console.log(bookmarkTitle, bookmarkURL);
  const bookmarkData = {
    bookmarkTitle,
    bookmarkURL,
  };
  currentCategory.subBookmarks.push(bookmarkData);
  localStorage.setItem("masterBookmark", JSON.stringify(masterBookmark));
};

saveBtnElement.addEventListener("click", handleSave);
saveBtnElement.addEventListener("click", setCardHidden);

// handling bookmark update
const handelUpdate = (bookmarkTitle, bookmarkURL, bookmarkCategoryName, index) => {
  console.log(bookmarkTitle, bookmarkURL, bookmarkCategoryName);
  bookmarkTitleElement.value = bookmarkTitle;
  bookmarkURLElement.value = bookmarkURL;
  bookmarkCategoryElement.value = bookmarkCategoryName;
  console.log(index);
}

// rendering the bookmarks
const bookmarkCardContainerElement = document.getElementById('bookmark-display-section');

const handleRender = () => {
  const cardData = JSON.parse(localStorage.getItem('masterBookmark'));
  console.log(cardData)
    let html = '';
  cardData.forEach((category) => {
    if (category.subBookmarks.length > 0) {
      html += `<h1 class="my-margin-y">${category.categoryName}</h1>`;
      html += `<div class="bookmark-card-container border-b pb-10 flex gap-4">`;
      category.subBookmarks.forEach((bookmark, index) => {
        html += `
          <div class="bookmark-card border-trbl">
            <div class="flex justify-between">
              <h2 class="bookmark-card-title">${bookmark.bookmarkTitle}</h2>
              <button onClick="
                setCardVisible();
                handelUpdate('${bookmark.bookmarkTitle}', '${bookmark.bookmarkURL}', '${category.categoryName}', ${index});
              ">
                <i class="fa-solid fa-pencil"></i>
              </button>
            </div>
            <p class="bookmark-card-url">${bookmark.bookmarkURL}</p>
            <div class="bookmark-card-btn-container flex justify-between gap-2">
              <button class="btn gap-2">
                <a href="${bookmark.bookmarkURL}" target="_blank">
                  go to link
                </a>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
              <button class="btn"><i class="fa-solid fa-trash-can"></i></button>
            </div>
          </div>
        `;
      });
      html += `</div>`;
    }
  });

bookmarkCardContainerElement.innerHTML = html;
};

handleRender();
