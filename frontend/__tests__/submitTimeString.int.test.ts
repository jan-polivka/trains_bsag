import assert from "assert"
import { submitTimeString } from "../src/SubscribeForm/submitTimeString"

describe("integration tests", () => {
    it("submission successful", async () => {
        let response = await submitTimeString("10", "01")
        assert.equal(response, "OK")
    })

    it("submission unsuccessful", async () => {
        let response = await submitTimeString("1a", "a1")
        assert.equal(response, "NOT OK")
    })
})