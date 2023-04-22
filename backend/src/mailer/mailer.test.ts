import { test } from "node:test";
import { loadConfig } from "./mailer";
import assert = require("node:assert");

test("yaml file parsing", async () => {
    const result = await loadConfig("config_test.yaml")
    assert.equal(result.host, "smtp.fakeserver.org")
})