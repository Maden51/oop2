import Daemon from '../Daemon';

test('should create a Daemon', () => {
  const newPlayer = new Daemon('Lucifer');
  const expected = {
    name: 'Lucifer',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(newPlayer).toEqual(expected);
});
