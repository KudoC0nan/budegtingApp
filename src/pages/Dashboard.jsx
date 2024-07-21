import { useLoaderData } from "react-router-dom"

const Dashboard = () => {
    const { userName } = useLoaderData()
    return (
        <div>
            {userName}
            Dashboard
        </div>
    )
}

export default Dashboard