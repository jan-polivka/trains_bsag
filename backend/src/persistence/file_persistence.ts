import { readFile, writeFile } from "fs/promises"

type Time = {
    hour: string
    minute: string
}

export const persistInFile = async (time: Time, filepath: string) => {
    const jsonTimeString = JSON.stringify(time)
    await writeFile(filepath, jsonTimeString)
}

export const retrieveFromFile = async (filepath: string): Promise<string> => {
    const timeStringFile = await readFile(filepath, "utf-8").catch((err) => {
        console.error(err.message)
        return '{"timestring": ""}'
    })
    const parsed = JSON.parse(timeStringFile)
    return parsed['timeString']
}