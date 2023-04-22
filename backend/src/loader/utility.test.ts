import assert = require("node:assert");
import { test } from "node:test";
import { getTodayDDMMYY } from "./utility";

test("getTodayDDMMYY returns today's date as DDMMYY", () => {
    const date = new Date()
    console.log(date)
    const res = getTodayDDMMYY(new Date())
    ///
    assert.strictEqual(res, "220423")
})