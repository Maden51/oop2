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
