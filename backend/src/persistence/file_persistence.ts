import { writeFile } from "fs/promises"

export const persistInFile = async (timeString: string, filepath: string) => {
    console.log(timeString)
    writeFile(filepath, timeString, 'utf-8')
}