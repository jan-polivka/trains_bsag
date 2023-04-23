import { fireEvent, render, screen } from '@testing-library/react'
import Home from '../pages/index'
import { SubscribeForm } from '../src/SubscribeForm/SubscribeForm'
import '@testing-library/jest-dom'
import { submitTimeString } from '../src/SubscribeForm/submitTimeString'
import userEvent from '@testing-library/user-event'

describe('SubscribeForm', () => {
    it('irenders the subscribe form', async () => {
        const user = userEvent.setup()
        const mockSubmitTimeString = jest.fn()
        render(<SubscribeForm submitTimeString={submitTimeString} />)
        await user.type(screen.getByLabelText("time-input"), "test")
        await user.click(screen.getByLabelText("submit-button"))
        expect(mockSubmitTimeString).lastCalledWith("test")
    })
})