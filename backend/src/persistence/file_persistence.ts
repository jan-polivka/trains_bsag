import { writeFile } from "fs/promises"

export const persistInFile = async (timeString: string, filepath: string) => {
    writeFile(filepath, timeString, "utf-8")
}