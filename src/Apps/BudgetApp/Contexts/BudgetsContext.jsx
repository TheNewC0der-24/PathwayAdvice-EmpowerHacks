import { createContext, useContext } from 'react';
import { v4 as uuidV4 } from 'uuid';
import useLocalStorage from '../Hooks/useLocalStorage';

const BudgetsContext = createContext();

export const UNCATEGORIZED_BUDGET_ID = "Uncategorized";

export function useBudgets() {
    return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {

    const [budgets, setBudgets] = useLocalStorage("budgets", []);
    const [expenses, setExpenes] = useLocalStorage("expenses", []);

    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId);
    };

    function addBudget({ name, max }) {
        setBudgets(prevBudgets => {
            if (prevBudgets.find(budget => budget.name === name)) {
                return prevBudgets;
            }
            return [...prevBudgets, { id: uuidV4(), name, max }]
        });
    };

    function addExpense({ description, amount, budgetId }) {
        setExpenes(prevExpenses => {
            return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }]
        });
    };

    function deleteBudget({ id }) {

        setExpenes(prevExpenses => {
            return prevExpenses.map(expense => {
                if (expense.budgetId !== id) return expense;
                return { ...expense, budgetId: UNCATEGORIZED_BUDGET_ID };
            })
        });

        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id);
        });
    };

    function deleteExpense({ id }) {
        setExpenes(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id);
        });
    };

    return <BudgetsContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addBudget,
        addExpense,
        deleteBudget,
        deleteExpense
    }}>{children}</BudgetsContext.Provider>;
}