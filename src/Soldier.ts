export class Soldier {
  health: number;
  strength: number;

  constructor(health: number, strength: number) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage: number) {
    damage = this.health -= damage;
  }
}
