import React, { useState } from 'react'
import { evaluate } from 'mathjs'

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

export const operations = ['+', '-', '*', '/']
export const equalSign = '='

export const Calculator = () => {
  const [value, setValue] = useState('')

  const createHandleClick = op => () => setValue(value.concat(op))
  // aqui arriba, en el setValue, estamos sobreescribiendo la info constantemente, entonces para resolver el test de los "several numbers" agregamos el metodo concat()

  return (
    <section>
      <h1>Calculator</h1>
      <input value={value} readOnly />
      <div role='grid'>
        {rows.map((row, idx) => (
          <div key={idx} role='row'>
            {row.map(number =>
              <button onClick={createHandleClick(number)} key={number}>
                {number}
              </button>
            )}
          </div>
        ))}

        {
          operations.map(operation => (
            <button onClick={createHandleClick(operation)} key={operation}>{operation}</button>
          ))
        }

        <button onClick={() => setValue(evaluate(value))}>{equalSign}</button>
      </div>
    </section>
  )
}
