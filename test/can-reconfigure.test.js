import { describe, expect, it } from 'vitest'

const canReconfigure = (from, to) => {
  // if (from === undefined) throw new Error('from is required')
  if (typeof from !== 'string') throw new Error('from is not a string')
  if (typeof to !== 'string') throw new Error('to is not a string')

  if (from.length !== to.length) return false

  return true
}

describe('canReconfigure', () => {
  /* it('should be a function', () => {
    expect(canReconfigure).toBeTypeOf('function')
  }) */

  it('should throw if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow()
  })

  it('should throw if first parameter is not a string', () => {
    expect(() => canReconfigure(2)).toThrow()
  })

  it('should throw if second parameter is not a string', () => {
    expect(() => canReconfigure('a')).toThrow()
  })

  it('should return a boolean', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
  })

  it('should return false if strings provided have different lenght', () => {
    expect(canReconfigure('abc', 'de')).toBe(false)
  })
})
