export const getTodayDDMMYY = (): string => {
    const epoch = Date.now()
    console.log(epoch)
    const dateObj = new Date()
    console.log(dateObj.getDate())
    console.log(dateObj.getMonth())
    console.log(dateObj.getFullYear())
    console.log("hi")
    // 
    const dateMonth = (dateObj.getMonth() + 1).toString()
    const month = parseInt(dateMonth) < 10 ? "0" + dateMonth : dateMonth
    return dateObj.getDay().toString()
}