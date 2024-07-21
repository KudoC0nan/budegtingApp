// Local Storage functions
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}