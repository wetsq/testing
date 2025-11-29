import reduce from "../../src/reduce";

/*
AI-generated test suite
Google AI Studio
Model: Gemini 3 Pro Preview (High)

Prompt: Create a test suite for reduce.js in reduce-AI.test.js
*/

describe('reduce', () => {
  
  describe('Array Collections', () => {
    it('should reduce an array with an explicit initial accumulator', () => {
      const array = [1, 2, 3];
      const result = reduce(array, (sum, n) => sum + n, 0);
      expect(result).toBe(6);
    });

    it('should reduce an array without an initial accumulator (use first element)', () => {
      const array = [1, 2, 3];
      // 1 is taken as accumulator, starts iterating at 2
      const result = reduce(array, (sum, n) => sum + n);
      expect(result).toBe(6);
    });

    it('should handle an empty array with an initial accumulator', () => {
      const array = [];
      const result = reduce(array, (sum, n) => sum + n, 0);
      expect(result).toBe(0);
    });
  });

  describe('Object Collections', () => {
    it('should reduce an object to a new object', () => {
      const collection = { 'a': 1, 'b': 2, 'c': 1 };
      const result = reduce(collection, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
      }, {});

      // Note: Order is not guaranteed in objects, but structural equality checks handle this
      expect(result).toEqual({ '1': ['a', 'c'], '2': ['b'] });
    });

    it('should reduce an object to a single value (sum)', () => {
      const collection = { 'a': 10, 'b': 20 };
      const result = reduce(collection, (sum, value) => sum + value, 0);
      expect(result).toBe(30);
    });
  });

  describe('Iteratee Arguments', () => {
    it('should invoke the iteratee with (accumulator, value, index, collection) for arrays', () => {
      const array = [10];
      const iteratee = jest.fn((acc, val) => acc + val);
      
      reduce(array, iteratee, 0);

      // Expectation: acc=0, value=10, index=0, collection=array
      expect(iteratee).toHaveBeenCalledWith(0, 10, 0, array);
    });

    it('should invoke the iteratee with (accumulator, value, key, collection) for objects', () => {
      const object = { 'a': 1 };
      const iteratee = jest.fn((acc, val) => acc + val);

      reduce(object, iteratee, 0);

      // Expectation: acc=0, value=1, key='a', collection=object
      expect(iteratee).toHaveBeenCalledWith(0, 1, 'a', object);
    });
  });

  describe('Accumulator Initialization Logic', () => {
    /**
     * The code specifically uses `arguments.length < 3` to determine if 
     * the accumulator is initial. This implies a distinction between 
     * passing `undefined` vs not passing an argument at all.
     */

    it('should treat an explicit `undefined` accumulator as the initial value', () => {
      const array = [1, 2];
      // If treated as "no accumulator", result would be 3 (1+2).
      // If treated as "undefined accumulator", result starts at undefined.
      // undefined + 1 = NaN in JS.
      const result = reduce(array, (acc, n) => acc + n, undefined);
      
      expect(result).toBeNaN(); 
    });

    it('should use the first element as accumulator if 3rd argument is missing', () => {
      const array = ['a', 'b', 'c'];
      // Should result in 'abc'
      const result = reduce(array, (acc, char) => acc + char);
      expect(result).toBe('abc');
    });
  });
});