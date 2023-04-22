export const getTodayDDMMYY = (): string => {
    const dateObj = new Date()
    const dateMonth = (dateObj.getMonth() + 1).toString()
    const month = parseInt(dateMonth) < 10 ? "0" + dateMonth : dateMonth
    const year = dateObj.getFullYear().toString().slice(-2)
    return dateObj.getDate().toString() + month + year
}