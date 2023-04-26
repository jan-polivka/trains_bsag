const axios = require('axios');


export const submitTimeString = async (timeString: string): Promise<number> => {
    let response = await axios.post("http://127.0.0.1:8080/submit_time_string", {
        timeString: timeString
    })
    return response.status
}