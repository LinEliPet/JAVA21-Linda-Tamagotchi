import { updateStats, updateImage } from "./ui.js";

class Tamagotchi {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.hunger = 4;
    this.happiness = 6;
    this.isDead = false;
    this.interval = null;
  }

  start() {
    this.interval = setInterval(() => {
      this.increaseHunger();
      this.decreaseHappiness();
      this.checkIfDead();
      updateStats(this);
      updateImage(this);
    }, 4000);
  }

  increaseHunger() {
    if (!this.isDead && this.hunger < 10) {
      this.hunger++;
    }
  }

  decreaseHappiness() {
    if (!this.isDead && this.happiness > 0) {
      this.happiness--;
    }
  }

  feed() {
    if (!this.isDead && this.hunger > 0) {
      this.hunger--;
    }
  }

  play() {
    if (!this.isDead && this.happiness < 10) {
      this.happiness++;
    }
  }

  checkIfDead() {
    if (this.hunger >= 10 || this.happiness <= 0) {
      this.isDead = true;
      clearInterval(this.interval);
    }
  }
}

export default Tamagotchi;
