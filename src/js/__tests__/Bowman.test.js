import Bowman from '../Bowman';

test('should create a Bowman', () => {
  const newPlayer = new Bowman('Legolas');
  const expected = {
    name: 'Legolas',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(newPlayer).toEqual(expected);
});
