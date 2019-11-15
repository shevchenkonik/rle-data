let RLe = require('../')

it('RLE encodes', () => {
  let encodedData = RLe.encode([0, 0, 0, 0, 0, 1]);

  expect(encodedData).toEqual([5, 0, 1, 1]);
})

it('RLE decodes', () => {
  let decodedData = RLe.decode([5, 0, 1, 1, 5, 0, 1, 0]);

  expect(decodedData).toEqual([0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]);
})
