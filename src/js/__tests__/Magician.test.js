import Magician from '../Magician';

test('should create a Magician', () => {
  const newPlayer = new Magician('Gandalf');
  const expected = {
    name: 'Gandalf',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(newPlayer).toEqual(expected);
});
