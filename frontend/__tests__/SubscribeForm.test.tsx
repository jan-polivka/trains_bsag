import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SubscribeForm } from '../src/SubscribeForm/SubscribeForm'

describe('SubscribeForm', () => {
    it('irenders the subscribe form', async () => {
        const user = userEvent.setup()
        const mockSubmitTimeString = jest.fn()
        render(<SubscribeForm submitTimeString={mockSubmitTimeString} />)
        const timeInput = screen.getByLabelText("time-input")
        // const timeInput = screen.getByTestId("time-input")
        await user.type(timeInput, "test")
        await user.click(screen.getByRole("button"))
        expect(timeInput).toHaveValue("test")
        expect(mockSubmitTimeString).lastCalledWith("test")
        // expect(screen.getByTestId("time-input")).toHaveValue("test")
    })
})

