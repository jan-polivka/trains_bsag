import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import { SubscribeForm } from '../src/SubscribeForm'
import '@testing-library/jest-dom'

describe('SubscribeForm', () => {
    it('renders the subscribe form', () => {
        render(<SubscribeForm />)

        expect(screen.getByText('Enter time in the format HHMM:XW')).toBeInTheDocument()
    })
})