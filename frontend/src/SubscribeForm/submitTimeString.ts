const axios = require('axios');


export const submitTimeString = async (timeString: string): Promise<number> => {
    let response = await axios.post("localhost:8080/submit_time_string", {
        timeString: timeString
    })
    return response.status
}