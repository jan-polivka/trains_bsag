import * as fs from 'fs'
import { test } from "node:test";
import { extractZerothConnection, isConnectionCancelled } from "./connection_processor";
import assert = require("node:assert");
import { cwd } from "node:process";

test("connection is not cancelled", () => {
    const result = isConnectionCancelled()
    assert.equal(result, false)
})

test("extract the zeroth connection", () => {
    const path = `${cwd()}/resources/test/connection.json`
    const file = fs.readFileSync(path)
    const parsed: Connections = JSON.parse(file.toString())
    const connection = extractZerothConnection(parsed)
})