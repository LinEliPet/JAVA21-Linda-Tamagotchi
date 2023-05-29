import Tamagotchi from "/src/modules/tamagotchi.js";
import {
  updateStats,
  displayMessage,
  updateImage,
  feedButton,
  playButton,
} from "/src/modules/UI.js";

let tamagotchi;

const form = document.querySelector("#tamagotchi-form");
const container = document.querySelector(".container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  container.style.display = "flex";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted");
  const name = form.elements.name.value;
  const type = form.elements.type.value;
  tamagotchi = new Tamagotchi(name, type);
  tamagotchi.start();
});

feedButton.addEventListener("click", () => {
  tamagotchi.feed();
  updateStats(tamagotchi);
  updateImage(tamagotchi);
});

playButton.addEventListener("click", () => {
  tamagotchi.play();
  updateStats(tamagotchi);
  updateImage(tamagotchi);
});
