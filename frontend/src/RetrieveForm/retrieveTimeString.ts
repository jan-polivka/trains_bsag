const axios = require('axios');

export const retrieveTimeString = async (): Promise<string> => {
    const timeString = await axios.get("http://trains_service-backend:8080/retrieve_time_string")
    console.log(timeString)
    return ""
}