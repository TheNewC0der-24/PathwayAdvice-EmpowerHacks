import React from 'react';

import {
    Box,
    Avatar,
    Typography,
    Divider,
    Grid,
    Card,
    CardContent,
    CardHeader,

} from '@mui/material';

import { AiOutlineTeam } from 'react-icons/ai';

const OurTeam = () => {
    return (
        <React.Fragment>
            <Box sx={{ display: "flex", alignItems: "center", gap: '0.5rem' }}>
                <Avatar variant="rounded" sx={{ color: "#6d2ae2", bgcolor: "#dfd8fd" }}>
                    <AiOutlineTeam />
                </Avatar>
                <Typography variant='h5' sx={{ fontWeight: "bold" }} color="#6d2ae2">
                    Our Team
                </Typography>
            </Box>

            <Divider sx={{ mt: 3, mb: 5 }} />

            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: "#6d2ae2" }}>
                                        B
                                    </Avatar>
                                }
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Bhavya Khurana
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

        </React.Fragment>
    )
}

export default OurTeam;
