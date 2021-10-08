export default class Character {
  static types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть от 2 до 10 символов');
    } else {
      this.name = name;
    }
    if (!(Character.types.includes(type))) {
      throw new Error('неверный класс');
    } else {
      this.type = type;
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего');
    } else {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health = points * (1 - this.defence / 100);
    } else {
      throw new Error('Нельзя наносить урон мёртвому персонажу');
    }
  }
}
