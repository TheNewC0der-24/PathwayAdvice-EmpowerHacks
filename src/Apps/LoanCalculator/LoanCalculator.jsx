import React, { useState } from 'react';

import {
    Box, Typography, TextField, Button, Alert,
} from '@mui/material';

const LoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(null);

    const calculateMonthlyPayment = () => {
        const r = interestRate / 100 / 12;
        const n = loanTerm * 12;
        const payment = (loanAmount * r) / (1 - Math.pow((1 + r), -n));
        setMonthlyPayment(payment.toFixed(2));

        setLoanAmount('');
        setInterestRate('');
        setLoanTerm('');
    };

    return (
        <Box mt={5} p={3} sx={{
            bgcolor: "#F3F0FF",
            borderRadius: "4px",
        }}
        >
            <Typography mb={3} sx={{ fontWeight: "bold" }} variant="h5">
                Loan Calculator
            </Typography>

            <Alert severity="warning">
                Please ensure the values entered are correct.
            </Alert>

            <TextField
                fullWidth
                size="small"
                placeholder="Loan Amount"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                sx={{
                    marginTop: "1rem",
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
                size="small"
                placeholder="Interest Rate (%)"
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
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
                size="small"
                placeholder="Loan Term (years)"
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
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

            <Button
                variant="contained"
                onClick={calculateMonthlyPayment}
                sx={{
                    backgroundColor: "#6d2ae2",
                    color: "#fff",
                    '&:hover': {
                        backgroundColor: "#6d2ae2",
                        color: "#fff",
                    },
                }}
                disabled={!loanAmount || !interestRate || !loanTerm}
            >
                Calculate
            </Button>

            {monthlyPayment && (
                <Typography mt={2} variant="h6">
                    Monthly Payment: ${monthlyPayment}
                </Typography>
            )}

            <Typography mt={2} color="error" variant="body1">
            </Typography>

            <Typography mt={2} sx={{ fontWeight: "bold" }} color="#6d2ae2" variant="caption">
                Note: This is a basic calculator and might not include all aspects of your loan.
            </Typography>
        </Box>
    )
}

export default LoanCalculator;
