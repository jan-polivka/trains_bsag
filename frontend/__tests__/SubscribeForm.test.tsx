import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SubscribeForm } from '../src/SubscribeForm/SubscribeForm'
import { submitTimeString } from '../src/SubscribeForm/submitTimeString'

describe('SubscribeForm', () => {
    it('irenders the subscribe form', async () => {
        const user = userEvent.setup()
        const mockSubmitTimeString = jest.fn()
        render(<SubscribeForm submitTimeString={mockSubmitTimeString} />)
        const timeInput = screen.getByTestId("time-input")
        user.type(timeInput, "test")
        user.click(screen.getByTestId("submit-button"))
        // expect(screen.getByTestId("time-input")).toHaveValue("test")
        // expect(mockSubmitTimeString).lastCalledWith("test")
    })
})