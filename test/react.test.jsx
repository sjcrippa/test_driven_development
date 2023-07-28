import React, { useState } from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

const operations = ['+', '-', '*', '/']
const equalSign = '='

const Calculator = () => {
  const [value, setValue] = useState('')

  const createHandleNumber = number => () => setValue(value.concat(number))
  // aqui arriba, en el setValue, estamos sobreescribiendo la info constantemente, entonces para resolver el test de los "several numbers" agregamos el metodo concat()

  return (
    <section>
      <h1>Calculator</h1>
      <input value={value} readOnly />
      <div role='grid'>
        {rows.map((row, idx) => (
          <div key={idx} role='row'>
            {row.map(number =>
              <button onClick={createHandleNumber(number)} key={number}>
                {number}
              </button>
            )}
          </div>
        ))}
        {
          operations.map(operation => (
            <span key={operation}>{operation}</span>
          ))
        }
        <span>{equalSign}</span>
      </div>
    </section>
  )
}

describe('Calculator', () => {
  afterEach(cleanup) // para que no se dupliquen los renderizados. (Metodo de vitest)

  it('should render component', () => {
    render(<Calculator />)
  })

  it('should render title correctly', () => {
    render(<Calculator />)
    screen.getByText('Calculator')
    // aca no vamos a necesitar un expect porque el throw error ocurre automaticamente si no se puede cumplir el render.
  })

  it('should render numbers', () => {
    render(<Calculator />)
    numbers.forEach(number => {
      screen.getByText(number)
    })
  })

  it('should render 4 rows', () => {
    render(<Calculator />)

    const rows = screen.getAllByRole('row') // este test fallaba porque ne vez de poner ('row'), estaba puesto ('rows') !!!!!!!!!!!!!!!! ATENTI
    expect(rows.length).toBe(4)
  })

  it('should render operations', () => {
    render(<Calculator />)

    operations.forEach(operation => {
      screen.getByText(operation)
    })
  })

  it('should render equal sign', () => {
    render(<Calculator />)
    screen.getByText('Calculator')
  })

  it('should render an input', () => {
    render(<Calculator />)
    screen.getByRole('textbox')
  })

  it('show user input after clicking a number', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    fireEvent.click(one)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1')
  })

  it('show user input after clicking several numbers', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    fireEvent.click(one)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const three = screen.getByText('3')
    fireEvent.click(three)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('123')
  })
})
