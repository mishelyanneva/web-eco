window.addEventListener("load", (event) => {
  const readMoreBtn = document.querySelector(".read1-more-btn");
  const text = document.querySelector(".text1");

  readMoreBtn.addEventListener("click", (e) => {
    text.classList.toggle("show-more");
    if (readMoreBtn.innerText === "Прочети повече") {
      readMoreBtn.innerText = "Скрий";
    } else {
      readMoreBtn.innerText = "Прочети повече";
    }
  });

  const touchButton = document.querySelector(".float-text");
  const card = document.querySelector(".float-card-info");
  const close = document.querySelector(".close");

  touchButton.addEventListener("click", moveCard);
  close.addEventListener("click", moveCard);

  function moveCard() {
   card.classList.toggle("active");
  }
});