import assert from "assert"
import { submitTimeString } from "../src/SubscribeForm/submitTimeString"

describe("integration tests", () => {
    it("submission successful", async () => {
        let response = await submitTimeString("1010")
        assert.equal(response, "OK")
    })

    it("submission unsuccessful", async () => {
        let response = await submitTimeString("1a1a")
        assert.equal(response, "NOT OK")
    })
})