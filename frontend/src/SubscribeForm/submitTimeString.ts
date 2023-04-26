export const submitTimeString = async (timeString: string): Promise<number> => {
    fetch("localhost:8080", {
        method: "POST",
        body: timeString
    })
    return 200
}