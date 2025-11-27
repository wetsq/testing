import defaultTo from "../src/defaultTo";

describe('defaultTo', () => {
  it('should return number value as is', () => {
    expect(defaultTo(1, 10)).toBe(1);
  })

  it('should return string value as is', () => {
    expect(defaultTo('hello', 'default')).toBe('hello');
  })
  
  it('should return boolean value as is', () => {
    expect(defaultTo(true, false)).toBe(true);
  })

  it('should return default when value is undefined', () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  })

  it('should return default when value is null', () => {
    expect(defaultTo(null, 'default')).toBe('default');
  })

  it('should return default when value is NaN', () => {
    expect(defaultTo(NaN, 10)).toBe(10);
  })
})