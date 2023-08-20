import React, { useState } from 'react';

import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
} from '@mui/material';

import { useBudgets } from '../../Contexts/BudgetsContext';

const AddBudgetModal = ({ open, handleClose }) => {

    const [name, setName] = useState('');
    const [max, setMax] = useState('');

    const { addBudget } = useBudgets();

    function handleAdd(e) {
        e.preventDefault();

        addBudget({
            name: name,
            max: parseFloat(max)
        });

        setName('');
        setMax('');

        handleClose();
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>
                New Budget
            </DialogTitle>
            <DialogContent>
                <Box mt={3} sx={{ width: { xs: "100%", sm: "350px", md: "400px" } }}>
                    <TextField
                        fullWidth
                        size='small'
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
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
                        onChange={(e) => setMax(e.target.value)}
                        placeholder="Maximal Spending"
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
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {
                    handleClose();
                    setName('');
                    setMax('');
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
                    disabled={name === '' || max === ''}
                >
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddBudgetModal;
