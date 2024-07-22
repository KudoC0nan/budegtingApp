// loader
import { useLoaderData } from "react-router-dom"
// components
import Intro from "../components/Intro"

const Dashboard = () => {
    const { userName } = useLoaderData()
    return (
        <div>
            {userName ? (userName) : <Intro />}
        </div>
    )
}

export default Dashboard