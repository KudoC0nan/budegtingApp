import { Form } from "react-router-dom"
// Icons
import { CurrencyRupeeIcon } from "@heroicons/react/16/solid"

const AddBudgetForm = () => {
    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Create budget
            </h2>
            <Form method="post" className="grid-sm">
                <div className="grid-xs">
                    <label htmlFor="newBudget">Budget Name</label>
                    <input type="text" name="newBudget" id="newBudget" placeholder="Eg. Groceries" required/>
                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount">Amount</label>
                    <input type="number" step="0.01" name="newBudgetAmount" id="newBudgetAmount" placeholder="Eg. 200 Rs" inputMode="decimal" required />
                </div>
                <button type="submit" className="btn btn--dark">
                    <span>Create Budget</span>
                    <CurrencyRupeeIcon width={20} />
                </button>
            </Form>
        </div>
    )
}

export default AddBudgetForm