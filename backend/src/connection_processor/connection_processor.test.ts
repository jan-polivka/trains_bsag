import * as fs from 'fs'
import { test } from "node:test";
import { extractZerothConnection, isConnectionCancelled, isConnectionDelayed } from "./connection_processor";
import assert = require("node:assert");
import { cwd } from "node:process";

test("connection is not cancelled", () => {
    const connection: Connection = { id: "0", departure: { canceled: "0", delay: "0", time: "123" } }
    const result = isConnectionCancelled(connection)
    assert.equal(result, false)
})

test("connection is cancelled", () => {
    const connection: Connection = { id: "0", departure: { canceled: "1", delay: "0", time: "123" } }
    const result = isConnectionCancelled(connection)
    assert.equal(result, true)
})

test("connection is not delayed", () => {
    const connection: Connection = { id: "0", departure: { canceled: "0", delay: "0", time: "123" } }
    const result = isConnectionDelayed(connection)
    assert.equal(result, false)
})

test("extract the zeroth connection", () => {
    const path = `${cwd()}/resources/test/connection.json`
    const file = fs.readFileSync(path)
    const parsed: Connections = JSON.parse(file.toString())
    const connection = extractZerothConnection(parsed)
    assert.equal(connection.id, "0")
})