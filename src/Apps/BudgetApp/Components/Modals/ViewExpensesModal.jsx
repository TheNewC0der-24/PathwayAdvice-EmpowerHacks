import React, { useState } from 'react';

import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    IconButton
} from '@mui/material';

import { FaTrashAlt } from 'react-icons/fa';

import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../../Contexts/BudgetsContext';
import { currencyFormatter } from '../../Utils/utils';

const ViewExpensesModal = ({ open, handleClose, budgetId }) => {

    const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgets();

    const budget = UNCATEGORIZED_BUDGET_ID === budgetId
        ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
        : budgets.find(budget => budget.id === budgetId);

    const expenses = getBudgetExpenses(budgetId);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>
                <Box sx={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                    Expenses for {budget?.name} Budget
                    {budgetId !== UNCATEGORIZED_BUDGET_ID && (
                        <Button
                            variant='contained'
                            size='small'
                            color='error'
                            onClick={() => {
                                deleteBudget(budget);
                                handleClose();
                            }}
                        >
                            Delete
                        </Button>
                    )}
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box mt={3} sx={{
                    width: { xs: "100%", sm: "400px", md: "450px" },
                    maxHeight: "400px",
                    overflowY: "auto",
                }}>
                    {expenses.length === 0 ? (
                        <Box sx={{
                            bgcolor: "#f8f9fa",
                            borderRadius: "0.5rem",
                            padding: "0.5rem 1rem",
                            marginBottom: "0.5rem",
                        }}>
                            No Expenses
                        </Box>
                    ) : (
                        expenses.map(expense => (
                            <Box
                                key={expense.id}
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "1rem",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    bgcolor: "#f8f9fa",
                                    borderRadius: "0.5rem",
                                    padding: "0.5rem 1rem",
                                    marginBottom: "0.5rem",
                                    width: "100%"
                                }}
                            >
                                <Box sx={{ fontWeight: "bold", width: "30%", wordWrap: "break-word" }}>
                                    {expense.description}
                                </Box>
                                <Box>
                                    <Box sx={{ fontWeight: "bold", width: "10%" }}>
                                        {currencyFormatter.format(expense.amount)}
                                    </Box>
                                </Box>
                                <Box>
                                    <IconButton
                                        size='small'
                                        sx={{
                                            bgcolor: "#d32f2f",
                                            color: "#fff",
                                            padding: "0.5rem",
                                            '&:hover': {
                                                bgcolor: "#d32f2f",
                                            }
                                        }}
                                        onClick={() => {
                                            deleteExpense(expense);
                                        }}
                                    >
                                        <FaTrashAlt />
                                    </IconButton>
                                </Box>
                            </Box>
                        ))
                    )}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {
                    handleClose();
                }} variant='outlined'
                    sx={{
                        borderColor: "#6d2ae2",
                        color: "#6d2ae2",
                        '&:hover': {
                            borderColor: "#6d2ae2",
                        }
                    }}
                >
                    Close
                </Button>
                <Button variant='contained'
                    sx={{
                        bgcolor: "#6d2ae2",
                        color: "#fff",
                        '&:hover': {
                            bgcolor: "#6d2ae2",
                        }
                    }}
                >
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ViewExpensesModal;
