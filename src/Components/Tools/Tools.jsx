import React from 'react';
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

import SchoolIcon from '@mui/icons-material/School';
import CalculateIcon from '@mui/icons-material/Calculate';
import BookIcon from '@mui/icons-material/Book';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import CampusIcon from '@mui/icons-material/AccountBalance';

const Tools = () => {
    return (
        <React.Fragment>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: '0.5rem' }}>
                    <Avatar variant="rounded" sx={{ color: "#6d2ae2", bgcolor: "#dfd8fd" }}>
                        {/* If ToolsIcon is not imported or doesn't exist, you can comment it out or replace it */}
                        {/* <ToolsIcon /> */}
                    </Avatar>
                    <Typography variant='h5' sx={{ fontWeight: "bold" }} color="#6d2ae2">
                        Tools for First-Generation Low-Income Students
                    </Typography>
                </Box>
            </Box>

            <Divider sx={{ mt: 3, mb: 5 }} />
            <Box mt={3}>
                <Grid container spacing={2}>
                    <ToolCard
                        icon={<SchoolIcon />}
                        title="Scholarship Finder"
                        description="Search and apply for scholarships tailored for you."
                        bgColor="#FFF7D6"
                        iconColor="#F5CD47"
                        link="/scholarships"
                    />
                    <ToolCard
                        icon={<CalculateIcon />}
                        title="Budget Calculator"
                        description="Manage your finances and plan your expenses."
                        bgColor="#CCE0FF"
                        iconColor="#1D7AFC"
                        link="/budget-calculator"
                    />
                    <ToolCard
                        icon={<BookIcon />}
                        title="Study Resources"
                        description="Access free online study materials and tools."
                        bgColor="#FFEDEB"
                        iconColor="#E34935"
                        link="/study-resources"
                    />
                    <ToolCard
                        icon={<GroupIcon />}
                        title="Mentorship Program"
                        description="Connect with mentors to guide you through your academic journey."
                        bgColor="#DFFCF0"
                        iconColor="#2ABB7F"
                        link="/mentorship-program"
                    />
                    <ToolCard
                        icon={<WorkIcon />}
                        title="Job Board"
                        description="Find part-time job opportunities to support your studies."
                        bgColor="#FFF7D6"
                        iconColor="#F5CD47"
                        link="/job-board"
                    />
                    <ToolCard
                        icon={<CampusIcon />}
                        title="Campus Resources"
                        description="Discover resources available on campus for low-income students."
                        bgColor="#CCE0FF"
                        iconColor="#1D7AFC"
                        link="/campus-resources"
                    />
                </Grid>
            </Box>
        </React.Fragment>
    );
};

const ToolCard = ({ icon, title, description, bgColor, iconColor, link }) => {
    return (
        <Grid item lg={4} md={4} sm={6} xs={12}>
            <Card elevation={0} sx={{ bgcolor: bgColor, height: "100%" }}>
                <CardActionArea href={link}>
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

export default Tools;
