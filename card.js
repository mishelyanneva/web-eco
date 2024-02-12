document.addEventListener("click", function(event) {
  const touchButton = event.target.closest(".float-text");
  const close = event.target.closest(".close");

  if (touchButton) {
    moveCard();
  } else if (close) {
    moveCard();
  }
});

function moveCard() {
  const card = document.querySelector(".float-card-info");
  card.classList.toggle("active");
}
