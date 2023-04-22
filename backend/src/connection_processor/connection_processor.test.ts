import { test } from "node:test";
import { isConnectionCancelled } from "./connection_processor";
import assert = require("node:assert");

test("connection is not cancelled", () => {
    const result = isConnectionCancelled()
    assert.equal(result, false)
})

test("extract the zeroth connection", () => {

})