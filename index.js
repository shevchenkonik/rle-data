module.exports = {
  encode: function encode(arr) {
    let encoding = [],
      previous,
      count;

    for (count = 1, previous = arr[0], i = 1; i < arr.length; i++) {
      if (arr[i] !== previous) {
        encoding.push(count, previous);
        count = 1;
        previous = arr[i];
      } else {
        count++;
      }
    }

    /**
     * Add a last pair
     */
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
        /**
         * ES6 solution but Internet Explorer doesn't support
         */
        uncompressed.push(...Array(element).fill(encoded[ind + 1]));

        /**
         * Polyfill for Internet Explorer
         * @param {number} value
         * @param {number} len
         *
          let es5CreateArr = (value, len) => {
            let arr = [];

            for (let i = 0; i < len; i++) {
              arr.push(value);
            }

            return arr;
          }
         */
      }
    });

    return uncompressed;
  }
};
