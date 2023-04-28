import { render, screen } from "@testing-library/react"
import { RetrieveForm } from "../src/RetrieveForm/RetrieveForm"
import { userAgent } from "next/server"
import userEvent from "@testing-library/user-event"

describe("RetrieveForm", () => {
    it("renders the retrieve form", async () => {
        const user = userEvent.setup()
        const mockRetrieveTimeString = jest.fn(() => "1111")
        render(<RetrieveForm retrieveTimeString={mockRetrieveTimeString} />)
        const retrieveButton = screen.getByLabelText("retrieve-time-string")
        await user.click(retrieveButton)
        const retrievedTimeString = screen.getByLabelText("retrieved-time-string")
        expect(retrievedTimeString.textContent).toBe("1111")
        expect(mockRetrieveTimeString).toBeCalled()
    })
})