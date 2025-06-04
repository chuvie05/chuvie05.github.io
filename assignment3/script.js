const openBtn = document.getElementById("openPack");// Button to open the card pack
const resetBtn = document.getElementById("resetPack");// Button to reset/open another pack
const cards = document.querySelectorAll(".card");// The two card elements that will flip
const backImages = document.querySelectorAll(".card-back img");// Images on the back side of each card
const cardContainer = document.querySelector(".card-container");// Container holding the cards
// all the cards
const cardImages = [
  "images/tohecard.png",
  "images/aodaicard.png",
  "images/lotuscard.png",
  "images/nonlacard.png",
  "images/caphephincard.png",
  "images/banhmicard.png"
];

openBtn.addEventListener("click", () => {
  // Randomly shuffle the cardImages array and pick the first 2 cards
  // This simulates drawing a random pack of 2 cards from the 6
  const shuffled = [...cardImages].sort(() => 0.5 - Math.random()).slice(0, 2);
  backImages[0].src = shuffled[0];
  backImages[1].src = shuffled[1];
// Make sure the card container is visible (remove "hidden" class)
  cardContainer.classList.remove("hidden");
// Animate the cards: fade in and flip one after another with delay
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = 1;// Fade the card in by setting opacity to 1
      card.classList.add("flip");// Add class to trigger CSS flip animation
    }, 300 * index);// Delay each card flip by 300ms multiplied by its index
  });

  // Disable open button
  openBtn.disabled = true;
  openBtn.classList.remove("pulse");
  openBtn.style.opacity = 0.5;

// After 1 second (enough for flip animations), show the reset button
  setTimeout(() => {
    resetBtn.classList.remove("hidden");
  }, 1000);
});
// Event listener for clicking the "Reset" button to open another pack
resetBtn.addEventListener("click", () => {
// Reset each card by removing the flip class and hiding it (opacity to 0)
  cards.forEach(card => {
    card.classList.remove("flip");
    card.style.opacity = 0;
  });

// Hide the card container again by adding the "hidden" class
  cardContainer.classList.add("hidden");
 // Hide the reset button
  resetBtn.classList.add("hidden");
// Re-enable the open button and restore its pulsing animation and opacity
  openBtn.disabled = false;
  openBtn.classList.add("pulse");
  openBtn.style.opacity = 1;
});
