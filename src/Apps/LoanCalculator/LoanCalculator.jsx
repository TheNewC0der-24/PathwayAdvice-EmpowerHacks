import React, { useState } from 'react';

import {
    Box, Typography, TextField, Button,
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
    };

    return (
        <Box mt={5} p={2} sx={{
            bgcolor: "#F3F0FF",
            borderRadius: "4px",
            display: "grid",
            placeItems: "center",
        }}>
            <Typography sx={{ fontWeight: "bold" }} variant="subtitle1">
                Loan Calculator
            </Typography>

            <TextField
                label="Loan Amount"
                variant="outlined"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                sx={{ mt: 2, width: '80%' }}
            />

            <TextField
                label="Interest Rate (%)"
                variant="outlined"
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                sx={{ mt: 2, width: '80%' }}
            />

            <TextField
                label="Loan Term (years)"
                variant="outlined"
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                sx={{ mt: 2, width: '80%' }}
            />

            <Button
                variant="contained"
                color="primary"
                onClick={calculateMonthlyPayment}
                sx={{ mt: 2 }}
            >
                Calculate
            </Button>

            {monthlyPayment && (
                <Typography mt={2} variant="h5">
                    Monthly Payment: ${monthlyPayment}
                </Typography>
            )}

            <Typography mt={2} align='center' variant="body1">
                Please ensure the values entered are correct.
            </Typography>

            <Typography mt={2} sx={{ fontWeight: "bold" }} color="#6d2ae2" variant="caption">
                Note: This is a basic calculator and might not include all aspects of your loan.
            </Typography>
        </Box>
    )
}

export default LoanCalculator;
