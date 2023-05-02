import { beforeEach, expect, test } from "@jest/globals";
import { loadConfig } from "../config_loader/config_loader";
import { persistInFile, retrieveFromFile } from "./file_persistence";
import { readFileSync, rmSync } from "fs";

test("file persistence integration test", async () => {
    const time = { hour: "11", minute: "11" }
    const parsedYaml = await loadConfig("config_test.yaml")
    const filePath = parsedYaml['file']
    await persistInFile(time, filePath)
    let file = JSON.parse(readFileSync(filePath, 'utf-8'))
    expect(file).toBe(time)
    rmSync(filePath)
})


test("persisted file gets retrieved", async () => {
    const time = { hour: "11", minute: "11" }
    const parsedYaml = await loadConfig("config_test.yaml")
    const filePath = parsedYaml['file']
    await persistInFile(time, filePath)
    const readTimeString = await retrieveFromFile(filePath)
    expect(readTimeString).toBe(time)
    rmSync(filePath)
})

test("retrieval fails", async () => {
    const filePath = '/fake/path/to/file'
    let res = await retrieveFromFile(filePath)
    expect(res).toBe(undefined)
})