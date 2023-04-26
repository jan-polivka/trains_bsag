export const submitTimeString = async (timeString: string): Promise<number> => {
    let response = await fetch("localhost:8080", {
        method: "POST",
        body: timeString
    })
    return response.status
}