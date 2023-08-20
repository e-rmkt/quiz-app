// QUESTION FORM
const form = document.querySelector('[data-js="form"]');

const inputElement = document.querySelectorAll(".input-field");
const amountLeft = document.querySelectorAll(".amountLeft");

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
});

// CHARACTER COUNTER

let charCounter = 0;
const [inputElementQ, inputElementA] = inputElement;
const [amountLeftQ, amountLeftA] = amountLeft;

// QUESTION
const updateAmountLeftQ = (value) => {
  amountLeftQ.innerText = value;
};

updateAmountLeftQ(charCounter);

inputElementQ.addEventListener("input", () => {
  updateAmountLeftQ(charCounter + inputElementQ.value.length);
  amountLeftQ.innerText >= 100
    ? (amountLeftQ.style.color = "red")
    : (amountLeftQ.style.color = "darkslategrey");
});

// ANSWER
const updateAmountLeftA = (value) => {
  amountLeftA.innerText = value;
};

updateAmountLeftA(charCounter);

inputElementA.addEventListener("input", () => {
  updateAmountLeftA(charCounter + inputElementA.value.length);
  amountLeftA.innerText >= 100
    ? (amountLeftA.style.color = "red")
    : (amountLeftA.style.color = "darkslategrey");
});

// console.clear();
// console.log(inputElement, amountLeft);

// let charCounter = 0;

// // function updateAmountLeft(value) {
// //   amountLeft.innerText = value;
// // }
// // updateAmountLeft(charCounter);

// // inputElement.forEach((elements) => {
// //   elements.addEventListener("input", () => {
// //     amountLeft.forEach((element) => {
// //       element.innerText = 0 + elements.innerText.value.length;
// //     });
// //   });
// // });

// // function updateAmountLeft(amount, input) {
// //   amount.innerText = input.value.length;
// // }

// inputElement.forEach((elements) => {
//   elements.addEventListener("input", () => {
//     amountLeft.forEach((element) => {
//       element.innerText = elements.value.length;
//     });
//   });
// });
