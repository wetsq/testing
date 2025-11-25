import isDate from "../src/isDate";

describe('isDate', () => {
  it('should return true for new Date', () => {
    expect(isDate(new Date())).toBe(true);
  })

  it('should return false for date string', () => {
    expect(isDate('Mon April 23 2012')).toBe(false);
  })
  
  it('should return false for non-date objects', () => {
    expect(isDate({})).toBe(false);
    expect(isDate([])).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate(123)).toBe(false);
    expect(isDate('hello')).toBe(false);
  })
})