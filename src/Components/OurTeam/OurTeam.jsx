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
    IconButton,
    CardActions,

} from '@mui/material';

import { AiOutlineTeam } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTwitter, FaLink, FaInstagram } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

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
                    <Grid item xs={12} sm={6} md={6}>
                        <Card sx={{ height: "100%" }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: "#6d2ae2" }}>
                                        B
                                    </Avatar>
                                }
                                title="Bhavya Khurana"
                                subheader="Frontend Developer"
                            />
                            <CardContent sx={{
                                height: "200px",
                                overflow: "auto",
                            }}>
                                <Typography gutterBottom variant="subtitle1">
                                    Hey there! I'm Bhavya Khurana, a passionate frontend developer and content writer with a soft spot for dogs 🐶. I spend my days crafting user-friendly interfaces and bringing creative designs to life. When I'm not coding, you'll often find me typing away, weaving engaging content for various platforms. I believe in the power of words to inspire and connect people.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: '0.5rem',
                                    }}
                                >
                                    <IconButton
                                        href="https://github.com/TheNewC0der-24"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            bgcolor: "#dfd8fd",
                                            color: "#6d2ae2",
                                            '&:hover': {
                                                color: "#6d2ae2",
                                            },
                                        }}
                                    >
                                        <FaGithub />
                                    </IconButton>
                                    <IconButton
                                        href="https://www.linkedin.com/in/bhavya-khurana/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            bgcolor: "#dfd8fd",
                                            color: "#6d2ae2",
                                            '&:hover': {
                                                color: "#6d2ae2",
                                            },
                                        }}
                                    >
                                        <FaLinkedinIn />
                                    </IconButton>
                                    <IconButton
                                        href="https://twitter.com/Cynophilist_B"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            bgcolor: "#dfd8fd",
                                            color: "#6d2ae2",
                                            '&:hover': {
                                                color: "#6d2ae2",
                                            },
                                        }}
                                    >
                                        <FaTwitter />
                                    </IconButton>
                                    <IconButton
                                        href="mailto:khuranabhavya24@gmail.com"
                                        sx={{
                                            bgcolor: "#dfd8fd",
                                            color: "#6d2ae2",
                                            '&:hover': {
                                                color: "#6d2ae2",
                                            },
                                        }}
                                    >
                                        <BiLogoGmail />
                                    </IconButton>
                                    <IconButton
                                        href="https://bhavya-khurana.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            bgcolor: "#dfd8fd",
                                            color: "#6d2ae2",
                                            '&:hover': {
                                                color: "#6d2ae2",
                                            },
                                        }}
                                    >
                                        <FaLink />
                                    </IconButton>
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                        <Card sx={{ height: "100%" }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: "#6d2ae2" }}>
                                        S
                                    </Avatar>
                                }
                                title="Susmit Das"
                                subheader="Frontend Developer"
                            />
                            <CardContent sx={{
                                height: "200px",
                                overflow: "auto",
                            }}>
                                <Typography gutterBottom variant="subtitle1">
                                    Hello! My name is Susmit Das, and I call the scenic state of California in America my home. As a student, I've had experience in the MERN stack and am pushing my knowledge in it. I take pride in my proficiency with Python, HTML, JavaScript, and CSS. Driven by a passion for coding, I'm always on the lookout for opportunities to learn and collaborate with fellow tech enthusiasts. I'm enthusiastic about contributing more and having more hands-on experience in the tech realm!
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: '0.5rem',
                                    }}
                                >
                                    <IconButton
                                        href="https://github.com/idsus"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            bgcolor: "#dfd8fd",
                                            color: "#6d2ae2",
                                            '&:hover': {
                                                color: "#6d2ae2",
                                            },
                                        }}
                                    >
                                        <FaGithub />
                                    </IconButton>
                                    <IconButton
                                        href="mailto:susmitkdas@gmail.com"
                                        sx={{
                                            bgcolor: "#dfd8fd",
                                            color: "#6d2ae2",
                                            '&:hover': {
                                                color: "#6d2ae2",
                                            },
                                        }}
                                    >
                                        <BiLogoGmail />
                                    </IconButton>
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                        <Card sx={{ height: "100%" }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: "#6d2ae2" }}>
                                        H
                                    </Avatar>
                                }
                                title="Hala Abdelhamid"
                                subheader="UI/UX Designer"
                            />
                            <CardContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: '0.5rem',
                                    }}
                                >
                                    <IconButton
                                        href="https://github.com/Hala3720"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            bgcolor: "#dfd8fd",
                                            color: "#6d2ae2",
                                            '&:hover': {
                                                color: "#6d2ae2",
                                            },
                                        }}
                                    >
                                        <FaGithub />
                                    </IconButton>

                                    <IconButton
                                        href="https://www.instagram.com/__hala2006__/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            bgcolor: "#dfd8fd",
                                            color: "#6d2ae2",
                                            '&:hover': {
                                                color: "#6d2ae2",
                                            },
                                        }}
                                    >
                                        <FaInstagram />
                                    </IconButton>
                                    <IconButton
                                        href="mailto:halakarakany@gmail.com"
                                        sx={{
                                            bgcolor: "#dfd8fd",
                                            color: "#6d2ae2",
                                            '&:hover': {
                                                color: "#6d2ae2",
                                            },
                                        }}
                                    >
                                        <BiLogoGmail />
                                    </IconButton>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                        <Card sx={{ height: "100%" }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: "#6d2ae2" }}>
                                        O
                                    </Avatar>
                                }
                                title="Orangina"
                                subheader="Researcher"
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Box>

        </React.Fragment>
    )
}

export default OurTeam;
