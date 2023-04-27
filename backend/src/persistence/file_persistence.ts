import { writeFileSync } from "fs"

export const persistInFile = (timeString: string, filepath: string) => {
    const jsonTimeString = JSON.stringify({ timeString: timeString })
    writeFileSync(filepath, jsonTimeString)
}