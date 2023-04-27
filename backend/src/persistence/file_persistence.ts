import { readFileSync, writeFileSync } from "fs"
import { readFile, writeFile } from "fs/promises"

export const persistInFile = async (timeString: string, filepath: string) => {
    const jsonTimeString = JSON.stringify({ timeString: timeString })
    await writeFile(filepath, jsonTimeString)
}

export const retrieveFromFile = async (filepath: string): Promise<string> => {
    const timeStringFile = await readFile(filepath, "utf-8").catch((err) => {
        console.error(err.message)
        return '{timeString: ""}'
    })
    console.log(timeStringFile)
    return JSON.parse(timeStringFile)['timeString']
}