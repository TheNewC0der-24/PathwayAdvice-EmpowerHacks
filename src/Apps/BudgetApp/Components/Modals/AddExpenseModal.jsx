import React, { useState } from 'react';

import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    MenuItem
} from '@mui/material';

import { useBudgets, UNCATEGORIZED_BUDGET_ID } from '../../Contexts/BudgetsContext';

const AddExpenseModal = ({ open, handleClose, defaultBudgetId }) => {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [budgetId, setBudgetId] = useState(defaultBudgetId);

    const { addExpense, budgets } = useBudgets();

    function handleAdd(e) {
        e.preventDefault();

        addExpense({
            description: description,
            amount: parseFloat(amount),
            budgetId: budgetId
        });

        setDescription('');
        setAmount('');
        setBudgetId("");

        handleClose();
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>
                New Expense
            </DialogTitle>
            <DialogContent>
                <Box mt={3} sx={{ width: { xs: "100%", sm: "350px", md: "400px" } }}>
                    <TextField
                        fullWidth
                        size='small'
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        sx={{
                            marginBottom: "1rem",
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#6d2ae2',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#6d2ae2',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#6d2ae2',
                                },
                            },
                        }}
                    />

                    <TextField
                        fullWidth
                        size='small'
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Amount"
                        sx={{
                            marginBottom: "1rem",
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#6d2ae2',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#6d2ae2',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#6d2ae2',
                                },
                            },
                        }}
                    />

                    <TextField
                        fullWidth
                        size='small'
                        select
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: '#6d2ae2',
                                },
                            },
                            "& .MuiFormLabel-root.Mui-focused": {
                                color: '#6d2ae2',
                            }
                        }}
                        label="Budget"
                        onChange={(e) => setBudgetId(e.target.value)}
                    >
                        <MenuItem id={UNCATEGORIZED_BUDGET_ID} value="Uncategorized">
                            Uncategorized
                        </MenuItem>
                        {
                            budgets.map((budget) => (
                                <MenuItem key={budget.id} value={budget.id}>
                                    {budget.name}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {
                    handleClose();
                    setDescription('');
                    setAmount('');
                    setBudgetId("");
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
                    onClick={handleAdd}
                >
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddExpenseModal;
