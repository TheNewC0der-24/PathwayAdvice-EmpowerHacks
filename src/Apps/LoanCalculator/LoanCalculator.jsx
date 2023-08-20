import React from 'react';

import {
    Box, Typography,
} from '@mui/material';

const LoanCalculator = () => {
    return (
        <Box mt={5} p={2} sx={{
            bgcolor: "#F3F0FF",
            borderRadius: "4px",
            display: "grid",
            placeItems: "center",
        }}>
            <Typography sx={{ fontWeight: "bold" }} variant="subtitle1">
                STAY TUNED
            </Typography>

            <Typography mt={2} variant="h5">
                Loan Calculator Coming Soon!
            </Typography>

            <Typography mt={2} align='center' variant="body1">
                We are a small team of developers working on this project in our free time. We are working hard to bring you this feature as soon as possible.
            </Typography>

            <Typography mt={2} sx={{ fontWeight: "bold" }} color="#6d2ae2" variant="caption">
                #underconstruction
            </Typography>
        </Box>
    )
}

export default LoanCalculator;
