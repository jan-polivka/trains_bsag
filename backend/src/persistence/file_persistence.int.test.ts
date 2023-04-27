import { expect, test } from "@jest/globals";
import { loadConfig } from "../config_loader/config_loader";
import { persistInFile, retrieveFromFile } from "./file_persistence";
import { readFileSync, rmSync } from "fs";

test("file persistence integration test", async () => {
    const timeString = "1111"
    const parsedYaml = await loadConfig("config_test.yaml")
    const filePath = parsedYaml['file']
    await persistInFile(timeString, filePath)
    let file = JSON.parse(readFileSync(filePath, 'utf-8'))
    expect(file['timeString']).toBe(timeString)
    rmSync(filePath)
})


test("persisted file gets retrieved", async () => {
    const timeString = "1111"
    const parsedYaml = await loadConfig("config_test.yaml")
    const filePath = parsedYaml['file']
    await persistInFile(timeString, filePath)
    const readTimeString = await retrieveFromFile(filePath)
    expect(readTimeString).toBe(timeString)
    rmSync(filePath)
})

test("retrieval fails", async () => {
    const filePath = '/fake/path/to/file'
    try {
        let res = await retrieveFromFile(filePath)
        // console.log(res)
    } catch (e) {
        console.log(typeof e)
        //     expect(e).toThrowError(typeof Error)
    }
    // expect(async () => await retrieveFromFile(filePath)).toThrow()
})