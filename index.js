// BOOKMARK TOGGLE

const bookmarkButton = document.querySelector(".question-card__bookmark");
const bookmarkSaved = document.querySelector(
  ".question-card__bookmark-img--saved"
);
const bookmarkUnsaved = document.querySelector(
  ".question-card__bookmark-img--unsaved"
);

const bookmarkSavedStyle = bookmarkSaved.classList;
const bookmarkUnsavedStyle = bookmarkUnsaved.classList;

bookmarkButton.addEventListener("click", () => {
  if (bookmarkSavedStyle.contains("hidden")) {
    bookmarkUnsavedStyle.add("hidden");
    bookmarkSavedStyle.remove("hidden");
  } else {
    bookmarkUnsavedStyle.remove("hidden");
    bookmarkSavedStyle.add("hidden");
  }
});
