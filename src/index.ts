interface Data {
  (data: number[]): number[];
  map: any;
}

/**
 * Encode data
 * @param data
 */
function encode(data: Data) {
  let encoding: number[] = [];
  let previous = data[0];
  let count = 1;

  for (let i = 1; i < data.length; i++) {
    if (data[i] !== previous) {
      encoding.push(count, previous);
      count = 1;
      previous = data[i];
    } else {
      count++;
    }
  }

  /**
   * Add a last pair
   */
  encoding.push(count, previous);

  return encoding;
}

/**
 * Decode data
 * @param data
 */
function decode(data: Data) {
  let uncompressed: number[] = [];

  /**
   * Create a new array with decoded data
   */
  data.map((element: any, ind: number) => {
    if (ind % 2 === 0) {
      /**
       * Polyfill
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
       */
      if (!Array.prototype.fill) {
        function fillPolyfill (value: any, len: number) {
          for (let i = 0; i < len; i++) {
            uncompressed.push(value);
          }
        }

        fillPolyfill(data[ind + 1], element);
      } else {
        /**
         * ES6 solution but Internet Explorer doesn't support
         */
        uncompressed.push(...Array(element).fill(data[ind + 1]));
      }
    }
  });

  return uncompressed;
}

module.exports = {
  encode: encode,
  decode: decode
};
