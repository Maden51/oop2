import Swordsman from '../Swordsman';

test('should create a Swordsman', () => {
  const newPlayer = new Swordsman('Aragorn');
  const expected = {
    name: 'Aragorn',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(newPlayer).toEqual(expected);
});
