const axios = require('axios');

export const retrieveTimeString = async (): Promise<string> => {
    const timeString = await axios.get("http://127.0.0.1:8080/retrieve_time_string")
    console.log(timeString)
    return ""
}