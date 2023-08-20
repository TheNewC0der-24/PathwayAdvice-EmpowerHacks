import BudgetCard from "./BudgetCard";
import { useBudgets } from "../Contexts/BudgetsContext";

export default function TotalBudgetCard() {

    const { } = useBudgets();



    if (max === 0) return null;

    return (
        <BudgetCard
            name="Total"
            amount={amount}
            max={max}
        />
    )
}

