import React from 'react';

import {
    Box,
    Typography,
    Avatar,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Divider
} from '@mui/material';

import { MdDashboardCustomize } from 'react-icons/md';
import { BiBrain } from 'react-icons/bi';
import { IoMdHeart, IoMdWallet } from 'react-icons/io';
import { AiOutlineBulb } from 'react-icons/ai';

import dashboard from '../../assets/dashboard.png';

import Moment from 'moment';

const Dashboard = () => {

    const date = Moment().format("Do MMM YYYY");
    const weekday = Moment().format("dddd");

    return (
        <React.Fragment>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: '0.5rem' }}>
                    <Avatar variant="rounded" sx={{ color: "#6d2ae2", bgcolor: "#dfd8fd" }}>
                        <MdDashboardCustomize />
                    </Avatar>
                    <Typography variant='h5' sx={{ fontWeight: "bold" }} color="#6d2ae2">
                        Dashboard
                    </Typography>
                </Box>
                <Typography sx={{ fontWeight: "bold" }} variant='subtitle1'>
                    {date}, {weekday}
                </Typography>
            </Box>

            <Divider sx={{ mt: 3, mb: 5 }} />

            <Box>
                <Card elevation={0} sx={{ bgcolor: "#dfd8fd" }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", p: 5 }}>
                        <CardContent>
                            <Typography variant='h5' color="#6d2ae2" sx={{ fontWeight: "bold" }}>
                                Welcome User!
                            </Typography>
                            <Typography variant='subtitle1'>
                                Get familiar with the dashboard, here are some ways to get started.
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            image={dashboard}
                            sx={{ width: "30%", display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}
                            alt="dashboard"
                        />
                    </Box>
                </Card>
            </Box>

            <Box mt={3}>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card elevation={0} sx={{ bgcolor: "#FFF7D6", height: "100%" }}>
                            <CardActionArea>
                                <CardContent>
                                    <Avatar sx={{ bgcolor: "#F5CD47" }}>
                                        <BiBrain />
                                    </Avatar>
                                    <Typography sx={{ mt: 2 }} variant='subtitle1'>
                                        Are you feeling overwhelmed? It's okay to reach out for help. Mental health
                                        challenges like depression, anxiety, OCD, and ADHD can affect anyone. Don't
                                        suffer in silence. We're here to provide resources and support to help you
                                        manage and overcome these challenges.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card elevation={0} sx={{ bgcolor: "#CCE0FF", height: "100%" }}>
                            <CardActionArea>
                                <CardContent>
                                    <Avatar sx={{ bgcolor: "#1D7AFC" }}>
                                        <IoMdHeart />
                                    </Avatar>
                                    <Typography sx={{ mt: 2 }} variant='subtitle1'>
                                        Taking care of yourself is essential. Whenever you're feeling stressed, take a
                                        deep breath and explore the self-care resources we've prepared for you. From
                                        meditation techniques to stress-relief exercises, we're here to guide you
                                        through effective solutions to maintain your mental well-being.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card elevation={0} sx={{ bgcolor: "#FFEDEB", height: "100%" }}>
                            <CardActionArea>
                                <CardContent>
                                    <Avatar sx={{ bgcolor: "#E34935" }}>
                                        <IoMdWallet />
                                    </Avatar>
                                    <Typography sx={{ mt: 2 }} variant='subtitle1'>
                                        Worried about your financial situation? You're not alone. Many students face
                                        challenges with loans, part-time jobs, and educational costs. We're here to
                                        provide financial planning tools, tips for managing student loans, and guidance
                                        on exploring scholarship opportunities so you can pursue your dreams without
                                        unnecessary financial stress.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card elevation={0} sx={{ bgcolor: "#DFFCF0", height: "100%" }}>
                            <CardActionArea>
                                <CardContent>
                                    <Avatar sx={{ bgcolor: "#2ABB7F" }}>
                                        <AiOutlineBulb />
                                    </Avatar>
                                    <Typography sx={{ mt: 2 }} variant='subtitle1'>
                                        Your journey is unique, and your potential is limitless. Alongside addressing mental
                                        health and finances, remember to focus on personal growth. Setting goals, developing
                                        skills, and nurturing your passions are all part of your journey. Let us support
                                        you in achieving both academic success and personal fulfillment.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

        </React.Fragment>
    )
}

export default Dashboard;
