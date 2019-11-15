module.exports = {
  encode: function encode(arr) {
    let encoding = [];
    let previous, count, i;

    for (count = 1, previous = arr[0], i = 1; i < arr.length; i++) {
      if (arr[i] !== previous) {
        encoding.push(count, previous);
        count = 1;
        previous = arr[i];
      } else {
        count++;
      }
    }

    encoding.push(count, previous);
    return encoding;
  },

  decode: function decode(encoded) {
    let uncompressed = [];

    /**
     * Create a new array with decoded data
     */
    encoded.map((element, ind) => {
      if (ind % 2 === 0) {
        uncompressed.push(...[...Array(element).fill(encoded[ind + 1])]);
      }
    });

    return uncompressed;
  }
};
