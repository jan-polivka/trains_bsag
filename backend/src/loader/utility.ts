export const getTodayDDMMYY = (): string => {
    const epoch = Date.now()
    console.log(epoch)
    const dateObj = new Date(epoch)
    console.log(dateObj)
    console.log("hi")
    // 
    return epoch.toString()
}