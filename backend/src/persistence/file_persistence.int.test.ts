import { expect, test } from "@jest/globals";
import { loadConfig } from "../config_loader/config_loader";
import { persistInFile } from "./file_persistence";
import { readFileSync, rmSync } from "fs";

test("file persistence integration test", async () => {
    const timeString = "1111"
    const parsedYaml = await loadConfig("config_test.yaml")
    const filePath = parsedYaml['file']
    persistInFile(timeString, filePath)
    let file = JSON.parse(readFileSync(filePath, 'utf-8'))
    expect(file['timeString']).toBe(timeString)
    rmSync(filePath)
})