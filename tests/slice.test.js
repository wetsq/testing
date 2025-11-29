import slice from "../src/slice";

describe('slice', () => {
  const array = [1, 2, 3, 4, 5, 6];

  it('should return a slice starting from the specified index', () => {
    expect(slice(array, 2)).toEqual([3, 4, 5, 6]);
  });

  it('should return a slice between start and end indices', () => {
    expect(slice(array, 1, 4)).toEqual([2, 3, 4]);
  });

  it('should return a shallow copy of the entire array if no arguments are provided', () => {
    const result = slice(array);
    expect(result).toEqual(array);
    // Make sure it's a shallow copy, not the same reference
    expect(result).not.toBe(array);
  });
  
  it('should treat an end index greater than length as array.length', () => {
    expect(slice(array, 1, 100)).toEqual([2, 3, 4, 5, 6]);
  });

  it('should return an empty array if start is greater than end', () => {
    expect(slice(array, 4, 2)).toEqual([]);
  });

  it('should handle a negative start index as an offset from the end', () => {
    expect(slice(array, -3)).toEqual([4, 5, 6]);
  });
  
  it('should handle a negative end index as an offset from the end', () => {
    expect(slice(array, 1, -2)).toEqual([2, 3, 4]);
  });

  it('should return an empty array when the input array is null', () => {
    expect(slice(null, 1, 3)).toEqual([]);
  });

  it('should return an empty array when the input array is undefined', () => {
    expect(slice(undefined, 1, 3)).toEqual([]);
  });

  it('should return a dense array even if the source array is sparse', () => {
    const sparseArray = [1, , 3]; // [1, empty, 3] - length is 3
    sparseArray[5] = 6; // [1, empty, 3, empty, empty, 6] - length is 6
    
    // slice(sparseArray, 0, 6)
    // The missing elements are undefined in the result
    // This is the main difference from native Array#slice
    expect(slice(sparseArray, 0, 6)).toEqual([1, undefined, 3, undefined, undefined, 6]);
  });
})