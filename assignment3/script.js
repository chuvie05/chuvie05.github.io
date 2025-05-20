const allCards = [
  { name: "Fire Dragon", image: "https://via.placeholder.com/100?text=🔥+Fire+Dragon" },
  { name: "Water Sprite", image: "https://via.placeholder.com/100?text=💧+Water+Sprite" },
  { name: "Earth Golem", image: "https://via.placeholder.com/100?text=🌍+Earth+Golem" },
  { name: "Wind Falcon", image: "https://via.placeholder.com/100?text=🌬+Wind+Falcon" },
  { name: "Shadow Mage", image: "https://via.placeholder.com/100?text=🌑+Shadow+Mage" },
  { name: "Light Angel", image: "https://via.placeholder.com/100?text=🌟+Light+Angel" },
];

const openPackBtn = document.getElementById('openPackBtn');
const packResultsDiv = document.getElementById('packResults');
const collectionDiv = document.getElementById('collection');

// Load existing collection from localStorage
let collection = JSON.parse(localStorage.getItem('collection')) || [];

function displayCards(container, cards) {
  container.innerHTML = '';
  cards.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');
    cardEl.innerHTML = `
      <img src="${card.image}" alt="${card.name}" />
      <p>${card.name}</p>
    `;
    container.appendChild(cardEl);
  });
}

function openPack() {
  const shuffled = [...allCards].sort(() => 0.5 - Math.random());
  const pack = shuffled.slice(0, 3);

  // Update collection
  pack.forEach(card => {
    if (!collection.find(c => c.name === card.name)) {
      collection.push(card);
    }
  });

  // Save collection to localStorage
  localStorage.setItem('collection', JSON.stringify(collection));

  // Display results
  displayCards(packResultsDiv, pack);
  displayCards(collectionDiv, collection);
}

// Initial render
displayCards(collectionDiv, collection);

openPackBtn.addEventListener('click', openPack);
