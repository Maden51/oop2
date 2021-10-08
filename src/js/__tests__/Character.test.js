/* eslint-disable no-new */
import Bowman from '../Bowman';
import Character from '../Character';
import Swordsman from '../Swordsman';
import Zombie from '../Zombie';

test('should throw error for name less than 2 symbols', () => {
  expect(() => { new Character('y', 'Bowman'); }).toThrow('Имя должно быть от 2 до 10 символов');
});

test('should throw error for unknown type', () => {
  expect(() => { new Character('Oleg', 'someone'); }).toThrow('неверный класс');
});

test('should throw error when trying levelup with 0 hp', () => {
  const newPlayer = new Bowman('Oleg');
  newPlayer.health = 0;
  expect(() => { newPlayer.levelUp(); }).toThrow('Нельзя повысить уровень умершего');
});

test('should lvlup and increase stats', () => {
  const newPlayer = new Swordsman('Igor');
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
  const newPlayer = new Zombie('Bodya');
  newPlayer.damage(20);
  const expected = newPlayer.health;
  expect(expected).toBe(18);
});

test('should throw error when trying to damage dead character', () => {
  const newPlayer = new Bowman('Oleg');
  newPlayer.health = 0;
  expect(() => { newPlayer.damage(20); }).toThrow('Нельзя наносить урон мёртвому персонажу');
});
