// QUESTION FORM
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const card = document.createElement("section");
  card.classList.add("question-card");
  card.innerHTML = `
  <button class="question-card__bookmark" aria-label="Add bookmark">
  <img
    class="question-card__bookmark-img--unsaved"
    src="./assets/boommark-unsaved.png"
    alt="Click Boomark Icon With A Green Border to add Question to Bookmarks"
    height="50px"
  />
  <img
    class="question-card__bookmark-img--saved hidden"
    src="./assets/bookmark-saved.png"
    alt="Green Bookmark - Question is bookmarked"
    height="50px"
  />
</button>
<h3>${data.question}</h3>
<button class="answer-button">Show Answer</button>
<div class="answer-button__answer-box hidden" aria-label="Answer Box">
${data.answer} <br />
  <span
    ></span
  >
</div>
<aside class="categories">
  <button class="tags">${data.tag}</button>
</aside>`;

  document.body.append(card);
  event.target.reset();
  console.log(data);
});
