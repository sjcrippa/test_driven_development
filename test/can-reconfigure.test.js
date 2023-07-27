import { describe, expect, it } from 'vitest'

const canReconfigure = (from, to) => {
  // if (from === undefined) throw new Error('from is required')
  if (typeof from !== 'string') throw new Error('from is not a string')
  if (typeof to !== 'string') throw new Error('to is not a string')

  const isSameLenght = from.length === to.length
  if (!isSameLenght) return false

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size // este metodo solo registra valores que NO se repiten, entonces si tenes: "aaaa", el set().size te va a devolver 1. Porque solo hay 1 valor unico.

  if (!hasSameUniqueLetters) return false

  const transformations = {} // aca voy a almacenar las transformaciones realizadas en el codigo.
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformations[fromLetter] // aca estamos viendo si la letra guardada en las transformaciones en esa posicion, es la misma que ya teniamos antes, asegurandonos de que el orden es correcto.
    if (storedLetter && storedLetter !== toLetter) return false // si se cumple esta condicion de que tenemos la letra y ademas esa letra es diferente al toLetter, significa que no sigue el mismo orden

    transformations[fromLetter] = toLetter
  }

  return true
}

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
