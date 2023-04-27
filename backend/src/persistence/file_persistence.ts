import { writeFile } from "fs/promises"

export const persistInFile = async (timeString: string, filepath: string) => {
    const jsonTimeString = JSON.stringify({ timeString: timeString })
    console.log(jsonTimeString)
    writeFile(filepath, jsonTimeString, 'utf-8')
}