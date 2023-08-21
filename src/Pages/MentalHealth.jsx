import { useState } from 'react';

import {
    Box,
    Typography,
    Button,
    Avatar,
    Card,
    CardHeader,
    CardContent,
    Tabs,
    Tab,
} from '@mui/material';

import PropTypes from 'prop-types';

import { useNavigate } from 'react-router';

import { RiMentalHealthFill } from 'react-icons/ri';

import AnxietyDiscordersTab from '../Components/MentalHealthTabs/AnxietyDiscordersTab';
import ADHDTab from '../Components/MentalHealthTabs/ADHDTab';
import OCDTab from '../Components/MentalHealthTabs/OCDTab';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, border: "1px solid #F18D13" }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const MentalHealth = () => {

    const navigate = useNavigate();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card sx={{
            bgcolor: "#FFF4E5",
        }}
            elevation={0}
        >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "#F18D13" }}>
                        <RiMentalHealthFill />
                    </Avatar>
                }
                title="Combat the Mental Cancer"
                subheader="#mental-health"
                action={
                    <Button
                        size="small"
                        sx={{
                            backgroundColor: "#0e1313",
                            color: "#fff",
                            "&:hover": {
                                backgroundColor: "#0e1313",
                            }
                        }}
                        onClick={() => navigate('/PathwayAdvice/resources')}
                    >
                        Back
                    </Button>
                }
            />
            <CardContent>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            backgroundColor: "#F18D13",
                            color: "#fff",
                            "&:hover": {
                                backgroundColor: "#F18D13",
                            },
                            "& .MuiTabs-indicator": {
                                backgroundColor: "#0e1313",
                                height: "3px"
                            },
                            "& .MuiTab-root": {
                                textTransform: "none",
                                fontWeight: "bold",
                                color: "#0e1313 !important",
                                "&:hover": {
                                    color: "#0e1313",
                                },
                            },

                        }}
                    >
                        <Tab label="Anxiety Discorders" {...a11yProps(0)} />
                        <Tab label="ADHD" {...a11yProps(1)} />
                        <Tab label="OCD" {...a11yProps(2)} />
                    </Tabs>
                </Box>

                <TabPanel value={value} index={0}>
                    <AnxietyDiscordersTab />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ADHDTab />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <OCDTab />
                </TabPanel>
            </CardContent>
        </Card>
    )
}

export default MentalHealth;
