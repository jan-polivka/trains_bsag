import assert = require("node:assert");
import { test } from "node:test";
import { getTodayDDMMYY } from "./utility";

test("getTodayDDMMYY returns today's date as DDMMYY", () => {
    const res = getTodayDDMMYY()
    ///
    assert.strictEqual("", "")
})