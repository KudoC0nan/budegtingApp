import { fetchData } from "../helpers"

export function dashboardLoader() {
    const userName = fetchData("userName")
    return { userName }
}