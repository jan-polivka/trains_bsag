export const getTodayDDMMYY = (): string => {
    const epoch = Date.now()
    console.log(epoch)
    const dateObj = new Date()
    console.log(dateObj.toLocaleString())
    console.log(dateObj.getDate())
    console.log(dateObj.getMonth())
    console.log(dateObj.getFullYear())
    console.log("hi")
    // 
    return epoch.toString()
}