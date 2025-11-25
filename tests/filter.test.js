import filter from '../src/filter.js';

describe('filter', () => {
  it('should filter elements based on predicate', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false }
    ]

    const result = filter(users, ({ active }) => active)
    expect(result).toEqual([{ user: 'barney', active: true }])
  })

  it('should return empty array for empty input array', () => {
    const result = filter([], () => true)
    expect(result).toEqual([])
  })

  it('should return empty array if no elements match', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false }
    ]
    const result = filter(users, ({ user }) => user === 'ben')
    expect(result).toEqual([])
  })

  it('should handle null input', () => {
    const result = filter(null, () => true)
    expect(result).toEqual([])
  })

  it('should handle undefined input', () => {
    const result = filter(undefined, () => true)
    expect(result).toEqual([])
  })
});