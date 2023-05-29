const nameDisplay = document.querySelector("#name");
const imageDisplay = document.querySelector("#image");
const hungerDisplay = document.querySelector("#hunger");
const happinessDisplay = document.querySelector("#happiness");
const messageDisplay = document.querySelector("#message");
const feedButton = document.querySelector("#feed");
const playButton = document.querySelector("#play");

function updateStats(tamagotchi) {
  const nameElement = document.querySelector("#name");
  const hungerElement = document.querySelector("#hunger");
  const happinessElement = document.querySelector("#happiness");

  nameElement.innerText = tamagotchi.name;
  hungerElement.innerText = tamagotchi.hunger;
  happinessElement.innerText = tamagotchi.happiness;
}

function displayMessage(message) {
  console.log("Displaying message");
  messageDisplay.textContent = message;
}

function updateImage(tamagotchi) {
  console.log("Updating image");
  if (tamagotchi.happiness === 0 || tamagotchi.hunger === 10) {
    const imgUrl = new URL("./../../img/dead.webp", import.meta.url);
    imageDisplay.src = imgUrl.href;
    messageDisplay.textContent = "Oh no! Your Tamagotchi has died!";
  } else if (tamagotchi.hunger >= 7 || tamagotchi.happiness <= 3) {
    const imgUrl = new URL("./../../img/sad.jpg", import.meta.url);
    imageDisplay.src = imgUrl.href;
  } else if (
    tamagotchi.hunger >= 4 &&
    tamagotchi.hunger <= 6 &&
    tamagotchi.happiness >= 4 &&
    tamagotchi.happiness <= 6
  ) {
    const imgUrl = new URL("./../../img/neutral.png", import.meta.url);
    imageDisplay.src = imgUrl.href;
  } else {
    const imgUrl = new URL("./../../img/happy.png", import.meta.url);
    imageDisplay.src = imgUrl.href;
  }
}

export { updateStats, displayMessage, updateImage, feedButton, playButton };
