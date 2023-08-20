import React from 'react';
import { Box, Typography, Avatar, Grid, Card, CardContent } from '@mui/material';
import styled from '@emotion/styled';

const StyledContainer = styled(Box)`
    background-color: #f5f5f5;
    padding: 40px 0;
`;

const StyledCard = styled(Card)`
    background-color: #3f51b5; /* MUI primary color */
    color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const OurTeam = () => {
    return (
        <StyledContainer>
            <Typography variant="h4" gutterBottom align="center">
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", mt: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: '0.5rem' }}>
                        <Avatar variant="rounded" sx={{ color: "#6d2ae2", bgcolor: "#dfd8fd" }}>
                            {/* You can add an icon here if needed */}
                        </Avatar>
                        <Typography variant='h5' sx={{ fontWeight: "bold" }} color="#6d2ae2">
                            Our Team
                        </Typography>
                    </Box>
                </Box>
            </Typography>

            <Grid container spacing={4}>
                {/* Sample team member cards */}
                <TeamMember
                    name="John Doe"
                    role="CEO"
                    description="John is the visionary behind our company. With over 20 years of experience, he leads the team with passion and dedication."
                    imageSrc="path_to_image"  // replace with actual image path
                />
                <TeamMember
                    name="Jane Smith"
                    role="CTO"
                    description="Jane is the tech genius of our team. She oversees all technical aspects and ensures everything runs smoothly."
                    imageSrc="path_to_image"  // replace with another image path
                />
                <TeamMember
                    name="Alice Johnson"
                    role="Marketing Head"
                    description="Alice drives our marketing strategies and ensures our brand reaches the right audience."
                    imageSrc="path_to_image"  // replace with another image path
                />
                <TeamMember
                    name="Bob Williams"
                    role="HR Manager"
                    description="Bob ensures our team stays happy and motivated. He's the go-to person for all team-related concerns."
                    imageSrc="path_to_image"  // replace with another image path
                />
                {/* Add more team members as needed */}
            </Grid>
        </StyledContainer>
    );
};

const TeamMember = ({ name, role, description, imageSrc }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
                <CardContent>
                    <Avatar src={imageSrc} alt={name} sx={{ width: 80, height: 80, margin: '0 auto' }} />
                    <Typography variant="h6" gutterBottom align="center" sx={{ mt: 2 }}>
                        {name}
                    </Typography>
                    <Typography variant="body2" align="center" sx={{ fontStyle: 'italic' }}>
                        {role}
                    </Typography>
                    <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                        {description}
                    </Typography>
                </CardContent>
            </StyledCard>
        </Grid>
    );
};

export default OurTeam;
