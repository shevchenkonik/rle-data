let RLe = require('../src/')

let data = {
  toEncode: {
    numbers: [0, 0, 0, 0, 0, 1, 0],
    strings: ["a", "a", "a", "b"],
    stringValue: "aaab"
  },

  toDecode: {
    numbers: [5, 0, 1, 1, 1, 0],
    strings: [3, "a", 1, "b"],
  }
};

describe("Encode", () => {
  it("Numbers", () => {
    let encodedData = RLe.encode(data.toEncode.numbers);

    expect(encodedData).toEqual(data.toDecode.numbers);
  })

  describe("Strings", () => {
    let encodedData = RLe.encode(data.toEncode.strings);
    let encodedDataString = RLe.encode(data.toEncode.stringValue);

    it("Array of strings", () => {
      expect(encodedData).toEqual(data.toDecode.strings);
    })

    it("String value", () => {
      expect(encodedDataString).toEqual(data.toDecode.strings)
    })
  })
})

describe("Decode", () => {
  it('Numbers', () => {
    let decodedData = RLe.decode(data.toDecode.numbers);

    expect(decodedData).toEqual(data.toEncode.numbers);
  })

  it('Strings', () => {
    let decodedData = RLe.decode(data.toDecode.strings);

    expect(decodedData).toEqual(data.toEncode.strings);
  })
})
