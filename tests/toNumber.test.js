import toNumber from "../src/toNumber";

describe('toNumber', () => {
  it('should convert string integer to number', () => {
    expect(toNumber('1')).toBe(1);
  })

  it('should convert string float to number', () => {
    expect(toNumber('3.2')).toBe(3.2);
  })

  it('should convert limit value to number', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
  })

  it('should convert Infinity to number', () => {
    expect(Infinity).toBe(Infinity);
  })

  it('should convert binary string to number', () => {
    expect(toNumber('0b101')).toBe(5);
  })

  it('should convert octal string to number', () => {
    expect(toNumber('0o10')).toBe(8);
  })

  it('should return NaN for bad hex string', () => {
    expect(Number.isNaN(toNumber('-0x1A'))).toBe(true);
  })

  it('should return NaN for invalid string', () => {
    expect(Number.isNaN(toNumber('abc'))).toBe(true);
  })

  it('should return integer as is', () => {
    expect(toNumber(2)).toBe(2);
  })

  it('should return float as is', () => {
    expect(toNumber(3.2)).toBe(3.2);
  })
})