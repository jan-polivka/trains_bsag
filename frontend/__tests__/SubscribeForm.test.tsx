import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SubscribeForm } from '../src/SubscribeForm/SubscribeForm'
import { submitTimeString } from '../src/SubscribeForm/submitTimeString'

describe('SubscribeForm', () => {
    it('irenders the subscribe form', async () => {
        const user = userEvent.setup()
        const mockSubmitTimeString = jest.fn()
        render(<SubscribeForm submitTimeString={mockSubmitTimeString} />)
        const timeInput = screen.getByTestId("time-input")
        await user.type(timeInput, "test")
        await user.click(screen.getByTestId("submit-button"))
        console.log(timeInput)
        // expect(timeInput).toHaveValue("test")
        // expect(mockSubmitTimeString).lastCalledWith("test")
    })
})