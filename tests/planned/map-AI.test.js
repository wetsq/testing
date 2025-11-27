import map from '../../src/map.js';

/*
AI generated test suite
Google Antigravity
Model: Gemini 3 Pro (High)

Prompt: Create a comprehensive test suite for map.js in map-AI.test.js
*/

describe('map', () => {
  it('should map values in an array using the iteratee', () => {
    const array = [4, 8];
    const square = (n) => n * n;
    expect(map(array, square)).toEqual([16, 64]);
  });

  it('should provide value, index, and array to the iteratee', () => {
    const array = [1];
    const iteratee = jest.fn();
    map(array, iteratee);
    expect(iteratee).toHaveBeenCalledWith(1, 0, array);
  });

  it('should handle empty arrays', () => {
    const array = [];
    const iteratee = (n) => n;
    expect(map(array, iteratee)).toEqual([]);
  });

  it('should handle null or undefined input array', () => {
    const iteratee = (n) => n;
    expect(map(null, iteratee)).toEqual([]);
    expect(map(undefined, iteratee)).toEqual([]);
  });

  it('should work with different data types', () => {
    const array = [{ 'a': 1 }, { 'a': 2 }];
    const iteratee = (o) => o.a;
    expect(map(array, iteratee)).toEqual([1, 2]);
  });
});
