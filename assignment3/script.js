const openBtn = document.getElementById("openPack");
const resetBtn = document.getElementById("resetPack");
const cards = document.querySelectorAll(".card");
const backImages = document.querySelectorAll(".card-back img");
const cardContainer = document.querySelector(".card-container");

const cardImages = [
  "images/tohecard.png",
  "images/aodaicard.png",
  "images/lotuscard.png",
  "images/nonlacard.png",
  "images/caphephincard.png",
  "images/banhmicard.png"
];

openBtn.addEventListener("click", () => {
  const shuffled = [...cardImages].sort(() => 0.5 - Math.random()).slice(0, 2);
  backImages[0].src = shuffled[0];
  backImages[1].src = shuffled[1];

  cardContainer.classList.remove("hidden");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = 1;
      card.classList.add("flip");
    }, 300 * index);
  });

  // Disable open button
  openBtn.disabled = true;
  openBtn.classList.remove("pulse");
  openBtn.style.opacity = 0.5;

  // Show reset button after animation
  setTimeout(() => {
    resetBtn.classList.remove("hidden");
  }, 1000);
});

resetBtn.addEventListener("click", () => {
  // Reset card states
  cards.forEach(card => {
    card.classList.remove("flip");
    card.style.opacity = 0;
  });

  // Hide and reset elements
  cardContainer.classList.add("hidden");
  resetBtn.classList.add("hidden");

  openBtn.disabled = false;
  openBtn.classList.add("pulse");
  openBtn.style.opacity = 1;
});
