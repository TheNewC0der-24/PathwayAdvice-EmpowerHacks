import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';

const Welcome = () => {

    const navigate = useNavigate();

    return (
        <div>
            Welcome

            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    navigate('/PathwayAdvice')
                    localStorage.setItem('start', true)
                }}
            >
                Start
            </Button>
        </div>
    )
}

export default Welcome
