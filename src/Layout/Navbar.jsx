import React from 'react';

import {
    AppBar,
    Box,
    CssBaseline,
    IconButton,
    Toolbar,
    Stack,
    TextField,
    InputAdornment,
} from '@mui/material'

import { FaSearch, FaBars } from 'react-icons/fa';

import Profile from './Navtabs/Profile';

const drawerWidth = 240;

const Navbar = ({ handleDrawerToggle }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    bgcolor: '#f9faff'
                }}
            >
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <FaBars />
                    </IconButton>
                    <TextField
                        size="small"
                        placeholder="Search here…"
                        sx={{
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
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FaSearch />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Stack direction='row' style={{ display: "flex", justifyContent: "end", marginLeft: "auto" }}>
                        <Profile />
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;