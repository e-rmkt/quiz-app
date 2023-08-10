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

// ANSWER BUTTON TOGGLE ////////////////////////

const answerButton = document.querySelector(".answer-button");
const answerBox = document.querySelector(".answer-button__answer-box");

// function to toggle answer box class hidden

function toggleAnswer() {
  answerBox.classList.toggle("hidden");
}

// eventListener for the click event on button
answerButton.addEventListener("click", () => {
  toggleAnswer();
  if (!answerBox.classList.contains("hidden")) {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textContent = "Show Answer";
  }
});
