export const submitTimeString = async (timeString: string): Promise<number> => {
    let response = await window.fetch("localhost:8080/submit_time_string", {
        method: "POST",
        body: timeString
    })
    return response.status
}