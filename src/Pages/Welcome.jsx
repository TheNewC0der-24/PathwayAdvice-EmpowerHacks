import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TextTransition, { presets } from 'react-text-transition';

import {
    Box,
    Button,
    Typography
} from '@mui/material';

import logo from '../assets/logoDark.png';

const TEXTS = ['First-Gen', 'Low-Income'];

const Welcome = () => {

    const navigate = useNavigate();

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000,
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '5rem',
                paddingBottom: '5rem',
            }}
        >
            <Box>
                <img src={logo} alt='Logo' width='200px' height='200px' />
            </Box>
            <Typography mb={1} variant='h3'>
                PathwayAdvice
            </Typography>

            <Box mb={3} sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0.5rem',
            }}>
                <Typography variant='h6'>
                    Empowering
                </Typography>
                <Typography variant='h5' sx={{ color: '#6d2ae2', fontWeight: "bold" }}>
                    <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                </Typography>
                <Typography variant='h6'>
                    Students
                </Typography>
            </Box>
            <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                    bgcolor: "#6d2ae2",
                    color: "#fff",
                    '&:hover': {
                        bgcolor: "#6d2ae2",
                    }
                }}
                onClick={() => {
                    navigate('/PathwayAdvice')
                    localStorage.setItem('start', true)
                }}
            >
                Start
            </Button>
        </Box>
    )
}

export default Welcome;
