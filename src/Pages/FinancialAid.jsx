import {
    Box, Button, Typography,
} from '@mui/material';

import { useNavigate } from 'react-router';

const FinancialAid = () => {

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                textAlign: "center",
            }}
        >
            <Typography gutterBottom sx={{ fontWeight: "bold" }} variant="h5" color="#6d2ae2">
                STAY TUNED
            </Typography>

            <Typography gutterBottom variant="h5">
                Financial Aid COMING SOON!!
            </Typography>

            <Typography variant="h5" sx={{ width: "50%" }}>
                We are a small and growing team with Great ideas.
                We are working hard to bring this feature to you.
            </Typography>

            <Typography gutterBottom variant="h5">
            </Typography>

            <Typography mt={2} sx={{ fontWeight: "bold" }} color="#6d2ae2" variant="caption">
                #underconstrunction
            </Typography>

            <Button
                sx={{
                    mt: 2,
                    backgroundColor: "#0e1313",
                    color: "#fff",
                    "&:hover": {
                        backgroundColor: "#0e1313",
                    }
                }}
                variant="contained"
                onClick={() => navigate('/PathwayAdvice/resources')}
            >
                Go Back
            </Button>
        </Box>
    )
}

export default FinancialAid;
