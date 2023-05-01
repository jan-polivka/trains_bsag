import { retrieveTimeString } from "../src/RetrieveForm/retrieveTimeString"
import { submitTimeString } from "../src/SubscribeForm/submitTimeString"

describe("integration tests for retrieveTimeString", () => {
    it("there is a string on the server", async () => {
        let response = await submitTimeString("10", "01")
        console.log(response)
        const retrieved = await retrieveTimeString()
        expect(retrieved).toBe("")
    })
})