const bookmarkInput = document.getElementById("bookmark-input");
const bookmarkOutput = document.getElementById("bookmark-output");

const handleOnChange = (e) => {
  e.preventDefault();
  const inputValue = e.target.value;
  bookmarkOutput.innerHTML = "Your Output Here: " + inputValue;
};