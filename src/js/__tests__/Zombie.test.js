import Zombie from '../Zombie';

test('should create a Zombie', () => {
  const newPlayer = new Zombie('mmm');
  const expected = {
    name: 'mmm',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(newPlayer).toEqual(expected);
});
