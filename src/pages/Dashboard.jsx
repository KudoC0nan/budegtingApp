// loader
import { useLoaderData } from "react-router-dom"
// components
import Intro from "../components/Intro"
import AddBudgetForm from "../components/AddBudgetForm"

const Dashboard = () => {
    const { userName, budgets } = useLoaderData()
    return (
        <>
            {userName ? <div className="dashboard">
                <h1>Welcome back, <span className="accent">
                {userName}</span></h1>
                <div className="grid-sm">
                    {/* {budgets ? () : ()} */}
                    <div className="grid-lg">
                        <div className="flex-lg">
                            <AddBudgetForm />
                        </div>
                    </div>
                </div>
            </div> : <Intro />}
        </>
    )
}

export default Dashboard