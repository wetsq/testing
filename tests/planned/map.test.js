import map from '../../src/map.js'

describe('map', () => {
  it('should transform array of numbers', () => {
    const result = map([1, 2, 3], n => n * 2)
    expect(result).toEqual([2, 4, 6])
  })

  it('should transform array of strings', () => {
    const result = map(['hello', 'world'], s => s.toUpperCase())
    expect(result).toEqual(['HELLO', 'WORLD'])
  })

  it('should extract elements from array of objects', () => {
    const items = [
      { id: 1, price: 10 },
      { id: 2, price: 20 }
    ]
    const result = map(items, item => item.price)
    expect(result).toEqual([10, 20])
  })

  it('should use the index argument correctly', () => {
    const result = map(['a', 'b', 'c'], (value, index) => `${value}-${index}`)
    expect(result).toEqual(['a-0', 'b-1', 'c-2'])
  })

  it('should correclty use the original array argument', () => {
    const result = map([1, 2, 3], (val, idx, arr) => val + arr.length)
    expect(result).toEqual([4, 5, 6])
  })

  it('should return empty array for empty input array', () => {
    const result = map([], n => n * 2)
    expect(result).toEqual([])
  })
  
  it('should return empty array for null input', () => {
    const result = map(null, n => n * 2)
    expect(result).toEqual([])
  })

  it('should return empty array for undefined input', () => {
    const result = map(undefined, n => n * 2)
    expect(result).toEqual([])
  })

  it('should not mutate the original array', () => {
    const original = [10, 20, 30]
    const result = map(original, n => n / 10)
    expect(result).toEqual([1, 2, 3])
    expect(original).toEqual([10, 20, 30])
  })

  it('should handle input with different data types', () => {
    const input = [1, 'a', { b: 2 }, null]
    const result = map(input, val => typeof val)
    expect(result).toEqual(['number', 'string', 'object', 'object'])
  })
})