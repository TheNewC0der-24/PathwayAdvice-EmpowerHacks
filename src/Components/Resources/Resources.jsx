import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Box,
    Typography,
    Avatar,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    Divider
} from '@mui/material';

import { FaBook, FaUniversity, FaHandHoldingUsd, FaUserGraduate } from 'react-icons/fa';
import { IoLayers } from 'react-icons/io5';

const Resources = () => {

    return (
        <React.Fragment>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: '0.5rem' }}>
                    <Avatar variant="rounded" sx={{ color: "#6d2ae2", bgcolor: "#dfd8fd" }}>
                        <IoLayers />
                    </Avatar>
                    <Typography variant='h5' sx={{ fontWeight: "bold" }} color="#6d2ae2">
                        Resources
                    </Typography>
                </Box>
            </Box>

            <Divider sx={{ mt: 3, mb: 5 }} />

            <Box mt={3}>
                <Grid container spacing={2}>
                    <ResourceCard
                        icon={<FaUniversity />}
                        title="Mental Health"
                        description="Find mental health resources and support groups to help you cope with stress and anxiety."
                        bgColor="#FFF7D6"
                        iconColor="#F5CD47"
                        link="/mental-health"
                    />
                    <ResourceCard
                        icon={<FaBook />}
                        title="Study Materials"
                        description="Access study materials, textbooks, and online courses to enhance your knowledge."
                        bgColor="#CCE0FF"
                        iconColor="#1D7AFC"
                        link="/study-materials"
                    />
                    <ResourceCard
                        icon={<FaHandHoldingUsd />}
                        title="Financial Aid"
                        description="Explore scholarships, grants, and other financial aid opportunities."
                        bgColor="#FFEDEB"
                        iconColor="#E34935"
                        link="/financial-aid"
                    />
                    <ResourceCard
                        icon={<FaUserGraduate />}
                        title="Career Guidance"
                        description="Get guidance on career paths, internships, and job opportunities."
                        bgColor="#DFFCF0"
                        iconColor="#2ABB7F"
                        link="/career-guidance"
                    />
                </Grid>
            </Box>
        </React.Fragment>
    );
};

const ResourceCard = ({ icon, title, description, bgColor, iconColor, link }) => {


    const navigate = useNavigate();

    return (
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Card elevation={0} sx={{ bgcolor: bgColor, height: "100%" }}>
                <CardActionArea onClick={() => {
                    navigate(link);
                }}>
                    <CardContent>
                        <Avatar sx={{ bgcolor: iconColor }}>
                            {icon}
                        </Avatar>
                        <Typography sx={{ mt: 2, fontWeight: "bold" }} variant='subtitle1'>
                            {title}
                        </Typography>
                        <Typography sx={{ mt: 1 }} variant='body2'>
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Resources;
