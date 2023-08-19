import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Container, Box } from '@mui/material';

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <Container style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundImage: 'linear-gradient(to right, #6a11cb, #9c27b0)', // Purple gradient background
        }}>
            <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
                Welcome to the Student Pathway Support
            </Typography>
            <Typography variant="subtitle1" paragraph style={{ color: 'white' }}>
                We're here to guide and support low-income students in their academic journey. Let's get started!
            </Typography>
            <Box mt={2} mb={4}>
                <img 
                    src="https://th.bing.com/th/id/OIP.N0akY_m_7kQ9l5fQUPKt_QHaE7?pid=ImgDet&rs=1" // Placeholder image, replace with your own
                    alt="Supportive Image"
                    style={{ borderRadius: '15px', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)' }}
                />
            </Box>
            <Box mt={2}>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: '#8a2be2', // Light purple button
                        color: 'white',
                        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
                        transition: 'all 0.3s'
                    }}
                    size="large"
                    onClick={() => {
                        navigate('/PathwayAdvice');
                        localStorage.setItem('start', true);
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    Start Your Journey
                </Button>
            </Box>
        </Container>
    );
}

export default Welcome;
