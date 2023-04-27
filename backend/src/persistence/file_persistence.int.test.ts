import { expect, test } from "@jest/globals";
import { loadConfig } from "../config_loader/config_loader";
import { persistInFile } from "./file_persistence";
import { fsync, readFileSync, rmSync } from "fs";

test("simple test that shouldn't run", async () => {
    const timeString = "1111"
    const parsedYaml = await loadConfig("config_test.yaml")
    const filePath = parsedYaml['file']
    await persistInFile(timeString, filePath)
    let file = readFileSync(filePath, 'utf-8')
    console.log(file)
    expect(file['timeString']).toBe(timeString)
    rmSync(filePath)
})