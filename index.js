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

if (!localStorage.getItem("masterBookmark")) {
  localStorage.setItem("masterBookmark", JSON.stringify(masterBookmark));
}

const bookmarkTitleElement = document.getElementById("bookmark-title");
const bookmarkURLElement = document.getElementById("bookmark-url");
const bookmarkCategoryElement = document.getElementById("bookmark-category");

let bookmarkTitle,
  bookmarkURL,
  bookmarkCategory = null;

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

// input form open and close handle
const addBtn = document.getElementById("add-btn");
const closeBtn = document.getElementById("close-btn");
const inputFormWrapper = document.getElementById("input-form-wrapper");

const setCardVisible = () => {
  inputFormWrapper.classList.remove("hidden");
};
const setCardHidden = () => {
  inputFormWrapper.classList.add("hidden");
};

addBtn.addEventListener("click", setCardVisible);
closeBtn.addEventListener("click", setCardHidden);

// saving input values to the array
const saveBtnElement = document.getElementById("save-btn");

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