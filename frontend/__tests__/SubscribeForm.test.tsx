import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SubscribeForm } from '../src/SubscribeForm/SubscribeForm'

describe('SubscribeForm', () => {
    it('irenders the subscribe form', async () => {
        const user = userEvent.setup()
        const mockSubmitTimeString = jest.fn()
        render(<SubscribeForm submitTimeString={mockSubmitTimeString} />)
        const timeInput = screen.getByRole("textbox")
        await user.type(timeInput, "YYYYYYYYYYYY")
        // fireEvent.change(timeInput, { target: { value: "YYYYY" } })
        // await user.click(screen.getByRole("textbox"))
        // console.log(screen.getByRole("textbox"))
        // expect(screen.getByRole("textbox")).toHaveValue("test")
        // it user.click(screen.getByTestId("submit-button"))
        // expect(mockSubmitTimeString).lastCalledWith("test")
    })
})