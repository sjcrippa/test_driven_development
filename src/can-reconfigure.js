export const canReconfigure = (from, to) => {
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
