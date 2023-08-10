// BOOKMARK TOGGLE ///////////////////////////

const bookmarkButton = document.querySelector(".question-card__bookmark");
const bookmarkSaved = document.querySelector(
  ".question-card__bookmark-img--saved"
);
const bookmarkUnsaved = document.querySelector(
  ".question-card__bookmark-img--unsaved"
);

// function to toggle bookmark class hidden

function toggleButton() {
  bookmarkUnsaved.classList.toggle("hidden");
  bookmarkSaved.classList.toggle("hidden");
}

// eventListener for the click event on button

bookmarkButton.addEventListener("click", () => {
  if (bookmarkSaved.classList.contains("hidden")) {
    toggleButton();
  } else {
    toggleButton();
  }
});
