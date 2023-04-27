import { expect, test } from "@jest/globals";
import { loadConfig } from "../config_loader/config_loader";
import { persistInFile } from "./file_persistence";
import { fsync, readFileSync, rmSync } from "fs";

test("simple test that shouldn't run", async () => {
    const timeString = "1111"
    const filePath = await loadConfig("config_test.yaml")
    persistInFile(timeString)
    let file = readFileSync(filePath['file'])
    expect(file['timeString']).toBe(timeString)
    rmSync(filePath)
})