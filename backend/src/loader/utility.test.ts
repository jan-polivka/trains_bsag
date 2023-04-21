import assert = require("node:assert");
import { test } from "node:test";

test("getTodayDDMMYY returns today's date as DDMMYY", () => {
    const res = getTodayDDMMYY()
    ///
    assert.strictEqual(res, "")
})