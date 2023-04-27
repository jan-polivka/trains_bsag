import { readFileSync, writeFileSync } from "fs"
import { writeFile } from "fs/promises"

export const persistInFile = async (timeString: string, filepath: string) => {
    const jsonTimeString = JSON.stringify({ timeString: timeString })
    await writeFile(filepath, jsonTimeString)
}

export const retrieveFromFile = (filepath: string): string => {
    readFileSync
    return ""
}