import { describe, expect, it } from 'vitest'

import { canReconfigure } from '../src/can-reconfigure'

describe('canReconfigure', () => {
  /* it('should be a function', () => {
    expect(canReconfigure).toBeTypeOf('function')
  }) */

  /*   it('should throw if first parameter is missing', () => {
      expect(() => canReconfigure()).toThrow()
    }) */

  it('should throw if first parameter is not a string', () => {
    expect(() => canReconfigure(2)).toThrow() // number
  })

  it('should throw if second parameter is not a string', () => {
    expect(() => canReconfigure('a')).toThrow() // string
  })

  it('should return a boolean', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean') // misma longitud, diferente letra
  })

  it('should return false if strings provided have different length', () => {
    expect(canReconfigure('abc', 'de')).toBe(false) // diferentes longitudes, diferentes letras
  })

  it('should return false if strings provided have different length even with the same unique letters', () => {
    expect(canReconfigure('aab', 'ab')).toBe(false) // diferentes longitudes, mismas letras unicas
  })

  it('should return false if strings provided have different number of unique letters', () => {
    expect(canReconfigure('abc', 'ddd')).toBe(false) // misma longitud, diferentes letras
  })

  it('should return false if strings has different order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false) // misma longitud, mismas letras unicas, diferente orden
  })
})
