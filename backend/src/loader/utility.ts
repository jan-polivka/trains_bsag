export const getTodayDDMMYY = (): string => {
    const epoch = Date.now()
    console.log(epoch)
    const dateObj = new Date(epoch)
    console.log(dateObj)
    // 
    return epoch.toString()
}