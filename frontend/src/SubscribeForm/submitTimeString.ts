const axios = require('axios');

export const submitTimeString = async (hourString: string, minuteString: string): Promise<number> => {
    let response = await axios.post("http://127.0.0.1:8080/submit_time_string", {
        hourString: hourString, minuteString: minuteString
    })
    return response.data
}