import assert = require("node:assert");
import { test } from "node:test";
import { getTodayDDMMYY } from "./utility";

test("getTodayDDMMYY returns today's date as DDMMYY", () => {
    const date = new Date('2023-04-22T06:44:00.298Z')
    const res = getTodayDDMMYY(date)
    assert.strictEqual(res, "220423")
})