import { filter } from '../src/filter.js';

describe('filter', () => {
  it('should filter elements based on the predicate', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ];

    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([
      { user: 'barney', active: true },
      { user: 'pebbles', active: true },
    ]);
  });

  it('should return an empty array when no elements match the predicate', () => {
    const numbers = [1, 2, 3, 4, 5];

    const result = filter(numbers, (n) => n > 10);
    expect(result).toEqual([]);
  });

  it('should handle an empty array', () => {
    const result = filter([], (n) => n > 0);
    expect(result).toEqual([]);
  });

  it('should handle null or undefined array', () => {
    expect(filter(null, (n) => n > 0)).toEqual([]);
    expect(filter(undefined, (n) => n > 0)).toEqual([]);
  });
});