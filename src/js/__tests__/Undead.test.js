import Undead from '../Undead';

test('should create a Undead', () => {
  const newPlayer = new Undead('Dracula');
  const expected = {
    name: 'Dracula',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(newPlayer).toEqual(expected);
});
