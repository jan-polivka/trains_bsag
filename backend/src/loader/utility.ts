export const getTodayDDMMYY = (): string => {
    const epoch = Date.now()
    console.log(epoch)
    const dateObj = new Date(epoch)
    console.log(dateObj.getDate)
    console.log(dateObj.getDay)
    console.log(dateObj.getMonth)
    console.log(dateObj.getFullYear)
    console.log("hi")
    // 
    return epoch.toString()
}