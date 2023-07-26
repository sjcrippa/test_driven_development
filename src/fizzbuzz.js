/* Escribir una funcion que al pasarle un numero:
    - Muestre fizz si es multiplo de 3
    - Muestre bazz si es multiplo de 5
    - Muestre fizzbuzz si es multiplo de ambos
    - Muestre el nro si no es multiplo de ninguno */

export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('parameter provided must be a number')
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number')

  // el algoritmo siguiente va a permitir la escalabilidad del codigo, ya que si tengo que agregar un nuevo parametro (en este caso woff), con solo agregarlo al multiplies, y escribiendo el test, funcionara. En cambio si estuvise hecho con ifs, seria mucho mas complejo de escalar al ir agregando parametros.

  const multiplies = { 3: 'fizz', 5: 'buzz', 7: 'woff' }

  let output = ''

  Object
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if (number % multiplier === 0) output += word
    })

  if (number % 15 === 0) return 'fizzbuzz' // multiplo de 3 y 5

  if (number % 5 === 0) return 'buzz' // multiplo de 5

  if (number % 3 === 0) return 'fizz' // multiplo de 3

  return output === '' ? number : output
}
