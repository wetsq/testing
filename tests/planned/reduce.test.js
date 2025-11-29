import reduce from "../../src/reduce";

describe('reduce', () => {
  it('should reduce an array with an initial value', () => {
    const collection = [10, 20, 30]
    const iteratee = (sum, n) => sum + n
    const accumulator = 0
    expect(reduce(collection, iteratee, accumulator)).toBe(60)
  })

  it('should reduce an array without an initial value', () => {
    const collection = [10, 20, 30]
    const iteratee = (sum, n) => sum + n
    expect(reduce(collection, iteratee)).toBe(60)
  })

  it('should reduce an array into an object', () => {
    const collection = ['fruit', 'veg', 'fruit']
    const iteratee = (counts, category) => {
      counts[category] = (counts[category] || 0) + 1
      return counts
    }
    const accumulator = {}
    expect(reduce(collection, iteratee, accumulator)).toEqual({ fruit: 2, veg: 1 })
  })

  it('should reduce an object with an initial value', () => {
    const collection = { a: 1, b: 2, c: 3 }
    const iteratee = (sum, value) => sum + value
    const accumulator = 100
    expect(reduce(collection, iteratee, accumulator)).toBe(106)
  })

  it('should reduce an object without an initial value', () => {
    const collection = { a: 5, b: 8, c: 10 }
    const iteratee = (max, value) => Math.max(max, value)
    expect(reduce(collection, iteratee)).toBe(10)
  })

  it('should provide correct keys to the iteratee for object collections', () => {
    const collection = { 'prod1': 10, 'prod2': 20 }
    const iteratee = (result, value, key) => {
      result.push(`${key}:${value}`)
      return result
    }
    const accumulator = []
    expect(reduce(collection, iteratee, accumulator)).toEqual(['prod1:10', 'prod2:20'])
  })

  it('should return the accumulator for an empty array', () => {
    const collection = []
    const iteratee = (sum, n) => sum + n
    const accumulator = 123
    expect(reduce(collection, iteratee, accumulator)).toBe(123)
  })

  it('should return undefined for an empty array without an initial accumulator', () => {
    const collection = []
    const iteratee = (sum, n) => sum + n
    expect(reduce(collection, iteratee)).toBeUndefined()
  })

  it('should return the accumulator for an empty object', () => {
    const collection = {}
    const iteratee = (sum, n) => sum + n
    const accumulator = { status: 'empty' }
    expect(reduce(collection, iteratee, accumulator)).toEqual({ status: 'empty' })
  })

  it('should return undefined for an empty object without an initial accumulator', () => {
    const collection = {}
    const iteratee = (sum, n) => sum + n
    expect(reduce(collection, iteratee)).toBeUndefined()
  })

  it('should return the accumulator for null input', () => {
    const collection = null
    const iteratee = (sum, n) => sum + n
    const accumulator = 50
    expect(reduce(collection, iteratee, accumulator)).toBe(50)
  })

  it('should return undefined for undefined input without an initial accumulator', () => {
    const collection = undefined
    const iteratee = (sum, n) => sum + n
    expect(reduce(collection, iteratee)).toBeUndefined()
  })
})