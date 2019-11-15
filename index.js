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
    encoded.forEach((element, ind) => {
      if (ind % 2 === 0) {
        uncompressed.push(new Array(element).fill(encoded[ind + 1]));
      }
    });

    /**
     * Create a new array with all sub-array elements concatenated into it recursively up to specified depth
     * @param {array} arr
     */
    let flatArray = uncompressed.reduce((acc, value) => acc.concat(value), []);

    return flatArray;
  }
};
