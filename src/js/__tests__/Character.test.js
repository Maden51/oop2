/* eslint-disable no-new */
import Character from '../Character';

test('should throw error for name less than 2 symbols', () => {
  expect(() => { new Character('y', 'Bowman'); }).toThrow('Имя должно быть от 2 до 10 символов');
});

test('should throw error for unknown type', () => {
  expect(() => { new Character('Oleg', 'someone'); }).toThrow('неверный класс');
});

test('should create a Character', () => {
  const newPlayer = new Character('Oleg', 'Bowman', 25, 25);
  const expected = {
    name: 'Oleg',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(newPlayer).toEqual(expected);
});

test('should throw error when trying levelup with 0 hp', () => {
  const newPlayer = new Character('Oleg', 'Bowman', 25, 25);
  newPlayer.health = 0;
  expect(() => { newPlayer.levelUp(); }).toThrow('Нельзя повысить уровень умершего');
});

test('should lvlup and increase stats', () => {
  const newPlayer = new Character('Igor', 'Swordsman', 40, 10);
  newPlayer.health = 80;
  newPlayer.levelUp();
  const expected = {
    name: 'Igor',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };
  expect(newPlayer).toEqual(expected);
});

test('should leave 18 health', () => {
  const newPlayer = new Character('Bodya', 'Zombie', 40, 10);
  newPlayer.damage(20);
  const expected = newPlayer.health;
  expect(expected).toBe(18);
});
