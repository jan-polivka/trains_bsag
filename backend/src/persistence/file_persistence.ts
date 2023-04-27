import { writeFile } from "fs/promises"

export const persistInFile = async (timeString: string, filepath: string) => {
    console.log(timeString)
    const jsonTimeString = JSON.stringify({ timeString: timeString })
    writeFile(filepath, jsonTimeString, 'utf-8')
}