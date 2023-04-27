import { writeFile } from "fs/promises"

export const persistInFile = async (timeString: string, filepath: string) => {
    console.log(filepath)
    writeFile(filepath, timeString)
}