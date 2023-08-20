import React, { useState } from 'react';

import {
    Box,
    Typography,
    Avatar,
    Divider,
    Button
} from '@mui/material';

import { RiToolsFill } from 'react-icons/ri';
import { MdLock } from 'react-icons/md';

import BudgetApp from '../../Apps/BudgetApp/BudgetApp';
import LoanCalculator from '../../Apps/LoanCalculator/LoanCalculator';

const Tools = () => {

    const [active, setActive] = useState("budget");

    return (
        <React.Fragment>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: '0.5rem' }}>
                    <Avatar variant="rounded" sx={{ color: "#6d2ae2", bgcolor: "#dfd8fd" }}>
                        <RiToolsFill />
                    </Avatar>
                    <Typography variant='h5' sx={{ fontWeight: "bold" }} color="#6d2ae2">
                        Tools
                    </Typography>
                </Box>
            </Box>
            <Divider sx={{ mt: 3, mb: 5 }} />

            <Box>
                <Button
                    variant={active === "budget" ? "contained" : "outlined"}
                    sx={{
                        mr: 2, mb: 2,
                        backgroundColor: active === "budget" ? "#6d2ae2" : "transparent",
                        color: active === "budget" ? "#fff" : "#6d2ae2",
                        borderColor: "#6d2ae2",
                        '&:hover': {
                            backgroundColor: active === "budget" ? "#6d2ae2" : "#dfd8fd",
                            color: active === "budget" ? "#fff" : "#6d2ae2",
                            borderColor: "#6d2ae2",
                        }
                    }}
                    onClick={() => setActive("budget")}
                >
                    Budget App
                </Button>

                <Button
                    variant={active === "loan" ? "contained" : "outlined"}
                    sx={{
                        mr: 2, mb: 2,
                        backgroundColor: active === "loan" ? "#6d2ae2" : "transparent",
                        color: active === "loan" ? "#fff" : "#6d2ae2",
                        borderColor: "#6d2ae2",
                        '&:hover': {
                            backgroundColor: active === "loan" ? "#6d2ae2" : "#dfd8fd",
                            color: active === "loan" ? "#fff" : "#6d2ae2",
                            borderColor: "#6d2ae2",
                        }
                    }}
                    color="primary"
                    onClick={() => setActive("loan")}
                >
                    Loan Calculator
                </Button>

                <Button
                    variant={active === "fitness" ? "contained" : "outlined"}
                    sx={{
                        mr: 2, mb: 2,
                        backgroundColor: active === "fitness" ? "#6d2ae2" : "transparent",
                        color: active === "fitness" ? "#fff" : "#6d2ae2",
                        borderColor: "#6d2ae2",
                        '&:hover': {
                            backgroundColor: active === "fitness" ? "#6d2ae2" : "#dfd8fd",
                            color: active === "fitness" ? "#fff" : "#6d2ae2",
                            borderColor: "#6d2ae2",
                        }
                    }}
                    color="primary"
                    onClick={() => setActive("fitness")}
                    disabled
                >
                    Fitness Tracker <MdLock style={{ marginLeft: ".5rem" }} />
                </Button>

                <Button
                    variant={active === "sleep" ? "contained" : "outlined"}
                    sx={{
                        mr: 2, mb: 2,
                        backgroundColor: active === "sleep" ? "#6d2ae2" : "transparent",
                        color: active === "sleep" ? "#fff" : "#6d2ae2",
                        borderColor: "#6d2ae2",
                        '&:hover': {
                            backgroundColor: active === "sleep" ? "#6d2ae2" : "#dfd8fd",
                            color: active === "sleep" ? "#fff" : "#6d2ae2",
                            borderColor: "#6d2ae2",
                        }
                    }}
                    color="primary"
                    onClick={() => setActive("sleep")}
                    disabled
                >
                    Sleep Tracker <MdLock style={{ marginLeft: ".5rem" }} />
                </Button>
            </Box>

            {active === "budget" && <BudgetApp />}
            {active === "loan" && <LoanCalculator />}
        </React.Fragment>
    )
}

export default Tools;