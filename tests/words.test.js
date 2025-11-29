import words from "../src/words";

describe('words', () => {
  it('should split a string using the default word pattern, excluding punctuation', () => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  });

  it('should handle strings with multiple spaces and special ASCII characters', () => {
    expect(words('Hello World! This is a test string (v1.0) with numbers.')).toEqual([
      'Hello', 'World', 'This', 'is', 'a', 'test', 'string', 'v1', '0', 'with', 'numbers'
    ]);
  });
  
  it('should handle strings with mixed casing and numbers (relying on internal logic)', () => {
    expect(words('fooBar-baz_123')).toEqual(['fooBar', 'baz', '123']);
  });

  it('should split a string using a provided custom RegExp pattern', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
  });

  it('should return an empty array if the input string is empty', () => {
    expect(words('')).toEqual([]);
  });

  it('should return an empty array if no matches are found with the default pattern', () => {
    expect(words('   -.-!@#$   ')).toEqual([]);
  });
  
  it('should return an empty array if no matches are found with a custom pattern', () => {
    expect(words('abc', /\d+/g)).toEqual([]);
  });
});