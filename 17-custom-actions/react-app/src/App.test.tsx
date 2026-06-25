import { render, screen } from '@testing-library/react'
import App from './App'

test('renders app', () => {
  render(<App />)
  expect(screen.getByText('Get started')).toBeInTheDocument()
})
