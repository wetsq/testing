import get from "../src/get";

// Mock data
const object = {
  'a': [{
    'b': {
      'c': 3,
      'd': null,
      'e': undefined
    }
  }],
  'f': 0,
  'g': '',
  'h': false,
};

describe('get', () => {
  it('should retrieve a deep property value using dot and bracket notation', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  it('should retrieve a deep property value using an array of path segments', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });
  
  it('should return the default value when the resolved value is undefined', () => {
    expect(get(object, 'a[0].b.c.d', 'default')).toBe('default');
  });

  it('should return the default value when the path is not found (undefined result)', () => {
    expect(get(object, 'x.y.z', 'Path not found')).toBe('Path not found');
  });

  it('should return undefined when the path is not found and no default value is provided', () => {
    expect(get(object, 'x.y.z')).toBeUndefined();
  });

  it('should return undefined when the path is not found and no default value is provided', () => {
    expect(get(object, 'x.y.z')).toBeUndefined();
  });
})