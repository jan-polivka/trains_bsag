import { render } from "@testing-library/react"
import { RetrieveForm } from "../src/RetrieveForm/RetrieveForm"

describe("RetrieveForm", () => {
    it("renders the retrieve form", () => {
        const mockRetrieveTimeString = jest.fn(() => "1111")
        render(<RetrieveForm retrieveTimeString={mockRetrieveTimeString} />)
        //verify that mock has been called
        //verify that there is a label and it carries the timeString
    })
})