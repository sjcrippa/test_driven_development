import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'

const Calculator = () => { }

describe('Calculator', () => {
  it('should render component', () => {
    render(<Calculator />)
  })

  it('should render title correctly', () => {
    render(<Calculator />)

    screen.getByText('Calculator')
  })
})
