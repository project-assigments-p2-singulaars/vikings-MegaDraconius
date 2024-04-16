import { Viking } from "./Viking";
import { Saxon } from "./Saxon";

export class War {
  vikingArmy: Viking[] = [];
  saxonArmy: Saxon[] = [];

  constructor(vikingArmy: Viking[] = [], saxonArmy: Saxon[] = []) {
    this.vikingArmy = vikingArmy;
    this.saxonArmy = saxonArmy;
  }

  addViking(viking: Viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon: Saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);

    let randomSaxon = this.saxonArmy[randomSaxonNumber];
    let randomViking = this.vikingArmy[randomVikingNumber];

    randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonNumber, 1);
    }
    return "A Saxon has died in combat";
  }

  saxonAttack() {
    let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);

    let randomSaxon = this.saxonArmy[randomSaxonNumber];
    let randomViking = this.vikingArmy[randomVikingNumber];

    let result = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingNumber, 1);
    }
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
