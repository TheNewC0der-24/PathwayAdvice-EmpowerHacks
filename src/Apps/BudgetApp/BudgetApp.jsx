import React, { useState } from 'react';
import styles from './BudgetApp.module.css';

import {
    Box,
    Button,
    Grid,
    Card,
    CardHeader,
    Typography,
    CardContent,
    LinearProgress
} from '@mui/material';

import BudgetCard from './Components/Cards/BudgetCard';
import UncategorizedBudgetCard from './Components/Cards/UncategorizedBudgetCard';
import AddBudgetModal from './Components/Modals/AddBudgetModal';
import AddExpenseModal from './Components/Modals/AddExpenseModal';
import ViewExpensesModal from './Components/Modals/ViewExpensesModal';

import { UNCATEGORIZED_BUDGET_ID, useBudgets } from './Contexts/BudgetsContext';
import { currencyFormatter } from './Utils/utils';

const BudgetApp = () => {

    const [openBudget, setOpenBudget] = useState(false);
    const [openExpense, setOpenExpense] = useState(false);
    const [openViewExpenses, setOpenViewExpenses] = useState(false);

    const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState();

    const handleClickOpenBudget = () => {
        setOpenBudget(true);
    };

    const handleClickOpenExpense = () => {
        setOpenExpense(true);
    };

    const handleClickOpenViewExpenses = (budgetId) => {
        setOpenViewExpenses(true);
        setViewExpensesModalBudgetId(budgetId);
    };

    const handleCloseBudget = () => {
        setOpenBudget(false);
    };

    const handleCloseExpense = () => {
        setOpenExpense(false);
    };

    const handleCloseViewExpenses = () => {
        setOpenViewExpenses(false);
    };

    const { budgets, getBudgetExpenses, expenses } = useBudgets();

    const totalAmount = expenses.reduce((total, expense) => total += expense.amount, 0);
    const totalMax = budgets.reduce((total, budget) => total += budget.max, 0);

    const classNames = [];
    if (totalAmount > totalMax) {
        classNames.push(styles.danger);
    } else if (totalAmount < totalMax) {
        classNames.push(styles.normal);
    }

    const getProgressBarVariant = (totalAmount, totalMax) => {
        const ratio = totalAmount / totalMax;
        if (ratio < 0.5) return "success";
        else if (ratio < 0.75) return "warning";
        else return "error";
    }

    return (
        <React.Fragment>
            <Box mt={5} display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap="1rem">
                <Typography variant="h5">
                    Budgets
                </Typography>

                <Box display="flex" alignItems="center" flexWrap="wrap" gap="0.5rem">
                    <Button variant="contained" sx={{
                        bgcolor: "#0e1313",
                        color: "#dee2e6",
                        '&:hover': {
                            bgcolor: "#0e1313",
                        }
                    }}
                        onClick={handleClickOpenBudget}
                    >
                        Add Budget
                    </Button>
                    <Button variant="outlined" sx={{
                        borderColor: "#0e1313",
                        color: "#0e1313",
                        '&:hover': {
                            borderColor: "#0e1313",
                        }
                    }}
                        onClick={handleClickOpenExpense}
                    >
                        Add Expense
                    </Button>
                </Box>
            </Box>

            <Box mt={3}>
                <Grid container spacing={2}>
                    {
                        budgets.map(budget => {

                            const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total += expense.amount, 0);

                            return (
                                <Grid item xs={12} sm={12} md={6} lg={4} key={budget.id}>
                                    <BudgetCard
                                        normal
                                        name={budget.name}
                                        amount={amount}
                                        max={budget.max}
                                        handleClickOpenViewExpenses={() => handleClickOpenViewExpenses(budget.id)}
                                    />
                                </Grid>
                            )
                        })
                    }

                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <UncategorizedBudgetCard
                            handleClickOpenViewExpenses={() => handleClickOpenViewExpenses(UNCATEGORIZED_BUDGET_ID)}
                        />
                    </Grid>
                </Grid>
            </Box>

            <Box mt={3} sx={{
                width: { xs: "100%", sm: "100%", md: "50%", lg: "30%" }
            }}>
                <Card className={classNames.join(" ")} sx={{
                    border: "1px solid #f8f9fa",
                    color: "#0e1313",
                }} elevation={0}>
                    <CardHeader
                        title="Total"
                        action={
                            <Typography variant="h6">
                                {currencyFormatter.format(totalAmount)} <span style={{ fontSize: "15px", opacity: "0.7" }}>/ {currencyFormatter.format(totalMax)}</span>
                            </Typography>
                        }
                    />
                    <CardContent>
                        <LinearProgress
                            variant="determinate"
                            color={getProgressBarVariant(totalAmount, totalMax)}
                            value={totalAmount / totalMax * 100}
                            sx={{
                                backgroundColor: totalAmount > totalMax && "#d32f2f",
                                height: "10px",
                                borderRadius: "5px",
                            }}
                        />
                    </CardContent>
                </Card>
            </Box>

            <AddBudgetModal open={openBudget} handleClose={handleCloseBudget} />
            <AddExpenseModal open={openExpense} handleClose={handleCloseExpense} />
            <ViewExpensesModal budgetId={viewExpensesModalBudgetId} open={openViewExpenses} handleClose={handleCloseViewExpenses} />
        </React.Fragment>
    )
}

export default BudgetApp;
